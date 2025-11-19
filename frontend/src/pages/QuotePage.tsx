import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Switch } from "../components/ui/switch";
import { CheckCircle } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const QuotePage = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [_isSubmitting, setIsSubmitting] = useState(false);
  const formAnimation = useScrollAnimation({ threshold: 0.1 });

  const [formData, setFormData] = useState({
    serviceType: "",
    pickupPostcode: "",
    dropoffPostcode: "",
    date: "",
    preferredTime: "",
    needHelpers: false,
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // ⭐ NEW UPDATED SUBMIT FUNCTION
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.serviceType || !formData.pickupPostcode || !formData.name || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const resp = await fetch("https://porter-agwl.onrender.com/send-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const json = await resp.json();

      if (resp.ok && json.success) {
        setSubmitted(true);
        toast({
          title: "Quote Requested!",
          description: "We'll get back to you within 3 hours.",
        });
      } else {
        toast({
          title: "Error",
          description: json.message || "Unable to send quote. Try again later.",
          variant: "destructive",
        });
      }
    } catch (err) {
      toast({
        title: "Network Error",
        description: "Cannot reach the mail server. Try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNextStep = () => {
    if (step === 1) {
      if (!formData.serviceType || !formData.pickupPostcode || !formData.dropoffPostcode || !formData.preferredTime) {
        toast({
          title: "Missing Information",
          description: "Please fill in all service details",
          variant: "destructive",
        });
        return;
      }
    }
    setStep(step + 1);
  };

  // ⭐ THANK YOU SCREEN
  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary/30 py-12 px-4">
        <Card className="max-w-lg w-full text-center animate-scale-in">
          <CardContent className="pt-12 pb-12">
            <CheckCircle className="h-16 w-16 text-accent mx-auto mb-6 animate-bounce" />
            <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
            <p className="text-muted-foreground mb-6">
              We've received your quote request. Our team will review it and get back to you within 3 hours.
            </p>

            <div className="bg-secondary/50 rounded-lg p-4 text-left space-y-2">
              <p><strong>Service:</strong> {formData.serviceType}</p>
              <p><strong>From:</strong> {formData.pickupPostcode}</p>
              <p><strong>To:</strong> {formData.dropoffPostcode}</p>
              <p><strong>Contact:</strong> {formData.email}</p>
            </div>

            <Button asChild className="mt-6" variant="hero">
              <a href="/">Return to Homepage</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary/30 py-12 px-4">
      <div ref={formAnimation.ref} className="container mx-auto max-w-3xl">
        
        {/* HEADER */}
        <div
          className={`text-center mb-8 transition-all duration-700 ${
            formAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl font-bold mb-4">Get Your Free Quote</h1>
          <p className="text-lg text-muted-foreground">
            Fill in the details below and we'll get back to you with a competitive quote
          </p>
        </div>

        {/* STEP INDICATOR */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            {/* STEP 1 */}
            <div className={`flex items-center ${step >= 1 ? "text-primary" : "text-muted-foreground"}`}>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                  step >= 1 ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground"
                }`}
              >
                1
              </div>
              <span className="ml-2 font-medium hidden sm:inline">Service Details</span>
            </div>

            <div className="w-12 h-0.5 bg-border" />

            {/* STEP 2 */}
            <div className={`flex items-center ${step >= 2 ? "text-primary" : "text-muted-foreground"}`}>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                  step >= 2 ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground"
                }`}
              >
                2
              </div>
              <span className="ml-2 font-medium hidden sm:inline">Contact Info</span>
            </div>
          </div>
        </div>

        {/* MAIN CARD */}
        <Card className="animate-scale-in shadow-xl">
          <CardHeader>
            <CardTitle>{step === 1 ? "Step 1: Service Details" : "Step 2: Your Information"}</CardTitle>
            <CardDescription>
              {step === 1 ? "Tell us about the service you need" : "How can we reach you?"}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* STEP 1 FORM */}
              {step === 1 ? (
                <div className="space-y-6 animate-fade-in">
                  
                  {/* SERVICE TYPE */}
                  <div className="space-y-2">
                    <Label>Service Type *</Label>
                    <Select
                      value={formData.serviceType}
                      onValueChange={(value) => handleInputChange("serviceType", value)}
                    >
                      <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="House-Moving">House Moving</SelectItem>
                        <SelectItem value="Pallet-Removals">Pallet Removals</SelectItem>
                        <SelectItem value="Bulk-Removals">Bulk Removals</SelectItem>
                        <SelectItem value="Courier-Services">Courier Services</SelectItem>
                        <SelectItem value="Skip-Removals">Skip Removals</SelectItem>
                        <SelectItem value="Man&Van">Man & Van</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* POSTCODES */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Pickup Postcode *</Label>
                      <Input
                        placeholder="SW1A 1AA"
                        value={formData.pickupPostcode}
                        onChange={(e) => handleInputChange("pickupPostcode", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Dropoff Postcode *</Label>
                      <Input
                        placeholder="E1 6AN"
                        value={formData.dropoffPostcode}
                        onChange={(e) => handleInputChange("dropoffPostcode", e.target.value)}
                      />
                    </div>
                  </div>

                  {/* DATE + TIME */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Preferred Date</Label>
                      <Input
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange("date", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Preferred Time *</Label>
                      <Select
                        value={formData.preferredTime}
                        onValueChange={(value) => handleInputChange("preferredTime", value)}
                      >
                        <SelectTrigger><SelectValue placeholder="Select a preferred time" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Morning-Hours">Morning Hours</SelectItem>
                          <SelectItem value="Afternoon-Hours">Afternoon Hours</SelectItem>
                          <SelectItem value="Evening-Hours">Evening Hours</SelectItem>
                          <SelectItem value="Night-Hours">Night Hours</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* HELPERS SWITCH */}
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={formData.needHelpers}
                      onCheckedChange={(checked) => handleInputChange("needHelpers", checked)}
                    />
                    <Label className="cursor-pointer">I need additional helpers</Label>
                  </div>

                  <Button type="button" variant="hero" className="w-full" onClick={handleNextStep}>
                    Continue to Contact Details
                  </Button>
                </div>
              ) : (
                // ⭐ STEP 2 FORM
                <div className="space-y-6 animate-fade-in">
                  
                  <div className="space-y-2">
                    <Label>Full Name *</Label>
                    <Input
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Email *</Label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Phone</Label>
                      <Input
                        type="tel"
                        placeholder="07123 456789"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Additional Notes</Label>
                    <Textarea
                      rows={4}
                      placeholder="Any special requirements..."
                      value={formData.notes}
                      onChange={(e) => handleInputChange("notes", e.target.value)}
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button type="button" variant="outline" className="w-full" onClick={() => setStep(1)}>
                      Back
                    </Button>

                    <Button type="submit" variant="hero" className="w-full group">
                      Submit Quote Request
                      <CheckCircle className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </CardContent>
        </Card>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          All information is secure and only used for your quote.
        </p>
      </div>
    </div>
  );
};

export default QuotePage;