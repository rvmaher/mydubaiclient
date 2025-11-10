'use client';
import { cn } from '@/utils/cn';
import { InputHTMLAttributes } from 'react';
import { FieldValues, Path, UseFormRegister, RegisterOptions, FieldErrors } from 'react-hook-form';

type InputPerfectProps<TFormValues extends FieldValues> = {
    name: Path<TFormValues>;
    label: string;
    register: UseFormRegister<TFormValues>;
    rules?: RegisterOptions<TFormValues, Path<TFormValues>>;
    errors?: FieldErrors<TFormValues>;
} & InputHTMLAttributes<HTMLInputElement>

export function InputPerfect<TFormValues extends FieldValues>({
    name,
    label,
    register,
    rules,
    errors,
    ...rest
}: InputPerfectProps<TFormValues>) {
    const errorMessage = errors && (errors[name]?.message as string | undefined);

    const inputClass = cn(`
    w-full p-3 border rounded-lg transition duration-150 ease-in-out
    focus:outline-none focus:ring-2
    ${errorMessage
            ? 'border-red-500 focus:ring-red-500'
            : 'border-gray-300 focus:border-green-500 focus:ring-green-500'
        }
  `);

    return (
        <div className="mb-4">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
                {label}
            </label>
            <input
                id={name}
                className={inputClass}
                {...register(name, rules)}
                {...rest}
            />
            {errorMessage && (
                <p className="mt-1 text-sm text-red-500">{errorMessage}</p>
            )}
        </div>
    );
}