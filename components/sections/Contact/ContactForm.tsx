import Button from '@/components/ui/Button';
import { cn } from '@/utils/cn';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { RegisterOptions, useForm, UseFormRegister, FieldError } from 'react-hook-form';

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
  const onSubmit = () => {
    // Simulacija slanja (npr. API poziv)
    console.log('Podaci s forme:');
    reset();
    alert('Poruka uspješno poslana!');
  };
  return (
    <form
      className="flex w-full max-w-3xl flex-col gap-8 bg-blue-100 p-5 lg:p-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Red s Imenom i Emailom */}
      <div className="flex w-full flex-col gap-10 md:flex-row">
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
        centered={true}
        icon={faPaperPlane}
      />
    </form>
  );
}

type FormFieldProps = {
  label: string;
  name: keyof ContactFormData; // Osigurava da 'name' mora biti jedno od polja iz ContactFormData
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
          'mb-3 block text-lg font-semibold text-slate-800 duration-200 group-focus-within:text-blue-500',
          error && 'group-focus-within:text-red-500',
        )}
      >
        {label}
      </span>
      <InputTag
        type={type}
        // Spajamo bazne stilove s error stilovima
        className={cn(
          'w-full border-b-2 bg-transparent pb-2 text-lg transition-all duration-200 focus:outline-none',
          'border-blue-300 group-focus-within:border-blue-500', // Default
          error && 'border-red-500 group-focus-within:border-red-500', // Ako postoji greška
          isTextArea && 'min-h-[100px]', // Specifično za poruku
        )}
        // Ovdje ispravno povezujemo react-hook-form
        {...register(name, validation)}
      />
      {/* Prikaz poruke o grešci */}
      {error ? (
        <p className="text-sm font-medium text-red-500">{error.message}</p>
      ) : (
        <div className="h-4" />
      )}
    </label>
  );
};

export default ContactForm;
