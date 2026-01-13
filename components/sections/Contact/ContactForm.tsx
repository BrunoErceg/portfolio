import { Button } from '@/components/ui';
import { cn } from '@/utils/cn';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import {
  RegisterOptions,
  useForm,
  UseFormRegister,
  FieldError,
  SubmitHandler,
} from 'react-hook-form';
import { toast } from 'sonner';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });
  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Poruka je uspješno poslana!');
        reset();
      } else {
        toast.error('Slanje nije uspjelo. Pokušajte ponovno.');
      }
    } catch (error) {
      console.error('Greška:', error);
      toast.error('Došlo je do mrežne greške.');
    }
  };

  return (
    <form
      className="flex w-full max-w-3xl flex-col gap-5 bg-blue-100 p-5 md:gap-10 lg:p-10 dark:bg-slate-800"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Red s Imenom i E-mailom */}
      <div className="flex w-full flex-col gap-5 md:flex-row md:gap-10">
        <FormField
          label="Ime i prezime*"
          name="name"
          register={register}
          error={errors.name}
          validation={{
            required: 'Ovo polje je obavezno',
            minLength: { value: 3, message: 'Ime mora imati najmanje 3 karaktera' },
            maxLength: { value: 30, message: 'Ime mora imati najviše 30 karaktera' },
          }}
        />

        <FormField
          label="E-mail*"
          name="email"
          type="email"
          register={register}
          error={errors.email}
          validation={{
            required: 'E-mail je obavezan',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Unesite ispravnu e-mail adresu',
            },
          }}
        />
      </div>

      {/* Polje za poruku */}
      <FormField
        label="Vaša poruka"
        name="message"
        isTextArea
        register={register}
        error={errors.message}
        validation={{ required: 'Niste napisali poruku' }}
      />

      {/* Submit gumb */}
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

type FormFieldProps = {
  label: string;
  name: keyof ContactFormData;
  register: UseFormRegister<ContactFormData>;
  validation?: RegisterOptions<ContactFormData, any>;
  error?: FieldError;
  type?: string;
  isTextArea?: boolean;
};

const FormField = ({
  label,
  name,
  register,
  validation,
  error,
  type = 'text',
  isTextArea = false,
}: FormFieldProps) => {
  const InputTag = isTextArea ? 'textarea' : 'input';

  return (
    <label className="group block w-full">
      <span
        className={cn(
          'mb-3 block text-base font-semibold text-slate-800 duration-200 group-focus-within:text-blue-500 md:text-lg dark:text-slate-100 dark:group-focus-within:text-slate-400',
          error && 'group-focus-within:text-red-500',
        )}
      >
        {label}
      </span>
      <InputTag
        type={type}
        className={cn(
          'w-full border-b-2 bg-transparent pb-2 text-lg transition-all duration-200 focus:outline-none',
          'border-blue-300 group-focus-within:border-blue-500 dark:border-slate-100 dark:group-focus-within:border-slate-400', // Default
          error &&
            'border-red-500 group-focus-within:border-red-500 dark:border-red-500 dark:group-focus-within:border-red-500', // Ako postoji greška
          isTextArea && 'min-h-[100px]',
        )}
        {...register(name, validation)}
      />

      {error ? (
        <p className="text-sm font-medium text-red-500">{error.message}</p>
      ) : (
        <div className="h-4" />
      )}
    </label>
  );
};

export default ContactForm;
