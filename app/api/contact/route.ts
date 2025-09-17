// /app/api/contact/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();
    const { firstName, lastName, email, phone, subject, message } = data;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,  
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form from Four096: ${subject}`,
      html: `
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true, message: "Email sent successfully" }), { status: 200 });
} catch (error) {
  console.error("Email sending error:", error);
  return new Response(
    JSON.stringify({
      error: "Failed to send email",
      details: String(error),    
      raw: JSON.stringify(error, Object.getOwnPropertyNames(error))
    }),
    { status: 500, headers: { "Content-Type": "application/json" } }
  );
}



}
