'use client';
import { cn } from '@/utils/cn';
import { InputHTMLAttributes } from 'react';
import { useFormContext, FieldValues, Path } from 'react-hook-form';

type FormInputProps<TFormValues extends FieldValues> = {
    name: Path<TFormValues>;
    label: string;
} & InputHTMLAttributes<HTMLInputElement>

export function FormInput<TFormValues extends FieldValues>({
    name,
    label,
    ...rest
}: FormInputProps<TFormValues>) {
    const {
        register,
        formState: { errors },
    } = useFormContext<TFormValues>();

    const errorMessage = errors[name]?.message as string | undefined;

    const inputClass = cn(`
        w-full p-3 border rounded-lg transition duration-150 ease-in-out
        focus:outline-none focus:ring-2
        ${errorMessage
            ? 'border-red-500 focus:ring-red-500'
            : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
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
                {...register(name)}
                {...rest}
            />
            {errorMessage && (
                <p className="mt-1 text-sm text-red-500">{errorMessage}</p>
            )}
        </div>
    );
}