import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'brunoerceg95@gmail.com',
      subject: `Nova poruka od ${name}`,
      html: `
        <h1>Nova kontakt poruka sa brunoerceg.dev</h1>
        <p><strong>Ime:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Poruka:</strong> ${message}</p>
      `,
    };
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email poslan uspješno!' }, { status: 200 });
  } catch (error) {
    console.error('Greška kod slanja:', error);
    return NextResponse.json({ message: 'Greška pri slanju emaila.' }, { status: 500 });
  }
}
