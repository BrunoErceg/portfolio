import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .min(3, 'Ime mora imati najmanje 3 slova')
    .max(30, 'Ime mora imati najviše 30 slova'),
  email: z.email(),
  message: z.string().min(10, 'Poruka mora imati najmanje 10 slova'),
});
