import { Button } from '@/components/ui';
import { cn } from '@/utils/cn';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema } from '@/schemas';
import { sendEmail } from '@/actions/send-email';
import { FormField } from './FormField';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

function ContactForm({ className }: { className?: string }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });
  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    try {
      const { success, error } = await sendEmail(data);

      if (success) {
        toast.success(success);
        reset();
      } else {
        toast.error(error);
      }
    } catch (error) {
      console.error('Greška:', error);
      toast.error('Došlo je do mrežne greške.');
    }
  };

  return (
    <form
      className={cn(
        'flex flex-col items-center gap-5 bg-blue-100 p-5 md:gap-10 lg:p-10 dark:bg-slate-800',
        className,
      )}
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Red s Imenom i E-mailom */}
      <div className="flex w-full flex-col gap-5 md:flex-row md:gap-10">
        <FormField label="Ime i prezime*" name="name" register={register} error={errors.name} />

        <FormField
          label="E-mail*"
          name="email"
          type="email"
          register={register}
          error={errors.email}
        />
      </div>

      <FormField
        label="Vaša poruka"
        name="message"
        isTextArea
        register={register}
        error={errors.message}
      />

      <Button
        type="submit"
        text={isSubmitting ? 'Slanje...' : 'Pošalji'}
        variant="secondary"
        size="lg"
        iconSize="sm"
        icon={faPaperPlane}
      />
    </form>
  );
}

export default ContactForm;
