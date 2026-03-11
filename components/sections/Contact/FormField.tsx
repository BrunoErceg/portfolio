import { cn } from '@/utils/cn';
import { FieldError, UseFormRegister } from 'react-hook-form';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

type FormFieldProps = {
  label: string;
  name: keyof ContactFormData;
  register: UseFormRegister<ContactFormData>;
  error?: FieldError;
  type?: string;
  isTextArea?: boolean;
};

export function FormField({
  label,
  name,
  register,
  error,
  type = 'text',
  isTextArea = false,
}: FormFieldProps) {
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
        {...register(name)}
      />

      {error ? (
        <p className="text-sm font-medium text-red-500">{error.message}</p>
      ) : (
        <div className="h-4" />
      )}
    </label>
  );
}
