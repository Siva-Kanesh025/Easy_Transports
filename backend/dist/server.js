"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const resend_1 = require("resend");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
}));
app.use(express_1.default.json());
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const EMAIL_FROM = process.env.EMAIL_FROM;
const RECEIVER_EMAIL = process.env.RECEIVER_EMAIL;
const PORT = process.env.PORT || 5000;
const resend = new resend_1.Resend(RESEND_API_KEY);
app.post("/send-quote", async (req, res) => {
    const data = req.body;
    if (!data.serviceType || !data.pickupPostcode || !data.name || !data.email) {
        return res.status(400).json({ success: false, message: "Missing required fields" });
    }
    const html = `
    <h2>New Quote Request</h2>
    <p><strong>Service:</strong> ${data.serviceType}</p>
    <p><strong>Pickup:</strong> ${data.pickupPostcode}</p>
    <p><strong>Dropoff:</strong> ${data.dropoffPostcode || "-"}</p>
    <p><strong>Date:</strong> ${data.date || "-"}</p>
    <p><strong>Preferred Time:</strong> ${data.preferredTime || "-"}</p>
    <p><strong>Need Helpers:</strong> ${data.needHelpers ? "Yes" : "No"}</p>
    <hr/>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone || "-"}</p>
    <p><strong>Notes:</strong><br/> ${data.notes?.replace(/\n/g, "<br/>") || "-"}</p>
  `;
    try {
        await resend.emails.send({
            from: EMAIL_FROM,
            to: RECEIVER_EMAIL,
            subject: `New Quote Request — ${data.serviceType} — ${data.name}`,
            html,
            replyTo: data.email,
        });
        return res.json({ success: true, message: "Email sent successfully" });
    }
    catch (error) {
        console.error("Resend error:", error);
        return res.status(500).json({ success: false, message: "Failed to send email" });
    }
});
app.listen(PORT, () => {
    console.log(`Email API running on port ${PORT}`);
});
