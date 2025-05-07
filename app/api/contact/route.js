import nodemailer from 'nodemailer';

export async function POST(req,res) {
  if (req.method === 'POST' || req.method === 'post') {
    const payload = await req.json;

    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can use other services such as 'hotmail', 'yahoo', etc.
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    const mailOptions = {
      from: `${email}`,
      to: 'divyamraj278@gmail.com', // Receiver email address
      subject: `Contact form submission from ${name}`,
      text: `
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Failed to send email:', error);
      res.status(500).json({ success: false, error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
}
