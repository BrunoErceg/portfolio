'use server';

import { contactSchema } from '@/schemas';
import { error } from 'console';
import nodemailer from 'nodemailer';

export async function sendEmail(rawData: unknown) {
  const validatedData = contactSchema.safeParse(rawData);
  if (!validatedData.success) {
    return { error: 'Neispravni podaci.' };
  }

  const { name, email, message } = validatedData.data;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'brunoerceg95@gmail.com',
      subject: `Nova poruka od ${name}`,
      html: `<p><strong>Ime:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Poruka:</strong> ${message}</p>`,
    });

    return { success: 'Poruka je uspješno poslana!', error: null };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Slanje nije uspjelo. Pokušajte ponovno.' };
  }
}
