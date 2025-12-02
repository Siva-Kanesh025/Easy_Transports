import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import QuotePage from "./pages/QuotePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HouseMovingPage from "./pages/HouseMovingPage";
import PalletRemovalsPage from "./pages/PalletRemovalsPage";
import SkipRemovalsPage from "./pages/SkipRemovalsPage";
import BulkRemovalsPage from "./pages/BulkRemovalsPage";
import CourierServices from "./pages/CourierServices";
import ManVanPage from "./pages/ManVanPage";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/quote" element={<QuotePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/services/house-moving" element={<HouseMovingPage />} />
              <Route path="/services/pallet-removals" element={<PalletRemovalsPage />} />
              <Route path="/services/skip-removals" element={<SkipRemovalsPage />} />
              <Route path="/services/bulk-removals" element={<BulkRemovalsPage />} />
              <Route path="/services/courier-services" element={<CourierServices />} />
              <Route path="/services/manvan" element={<ManVanPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;