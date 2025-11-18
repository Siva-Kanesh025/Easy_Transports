import express, { Request, Response } from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Read config from env
const SMTP_HOST = process.env.SMTP_HOST!;
const SMTP_PORT = Number(process.env.SMTP_PORT || 465);
const SMTP_SECURE = (process.env.SMTP_SECURE === "true");
const SMTP_USER = process.env.SMTP_USER!;
const SMTP_PASS = process.env.SMTP_PASS!;
const RECEIVER_EMAIL = process.env.RECEIVER_EMAIL || SMTP_USER;
const APP_PORT = Number(process.env.PORT || 5000);

// Create transporter
const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_SECURE,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

// Optional: verify connection configuration
transporter.verify().then(() => {
  console.log("SMTP transporter verified");
}).catch((err) => {
  console.error("Error verifying transporter:", err);
});

type QuotePayload = {
  serviceType: string;
  pickupPostcode: string;
  dropoffPostcode?: string;
  date?: string;
  preferredTime?: string;
  needHelpers?: boolean;
  name: string;
  email: string;
  phone?: string;
  notes?: string;
};

app.post("/send-quote", async (req: Request, res: Response) => {
  const data = req.body as QuotePayload;

  // Basic validation (you can improve)
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
    <p><strong>Notes:</strong><br/> ${data.notes ? data.notes.replace(/\n/g, "<br/>") : "-"}</p>
  `;

  try {
    await transporter.sendMail({
      from: `"Easy Transports" <${SMTP_USER}>`,
      to: RECEIVER_EMAIL, // where you want to receive the email
      subject: `New Quote Request — ${data.serviceType} — ${data.name}`,
      html,
      replyTo: data.email,
    });

    return res.json({ success: true, message: "Email sent" });
  } catch (error) {
    console.error("Send mail error:", error);
    return res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

app.listen(APP_PORT, () => {
  console.log(`Email API listening on port ${APP_PORT}`);
});