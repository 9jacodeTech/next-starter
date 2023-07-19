import clsx from 'clsx';
import React, { SyntheticEvent } from 'react';

export type ValueOption = {
  value: string;
  label: string;
};

type FormItemProps = {
  id?: string;
  name: string;
  inputType: 'email' | 'password' | 'text' | 'textarea';
  placeholder?: string;
  required?: boolean;
  options?: ValueOption[];
  value?: string;
  disabled?: boolean;
  error?: string;
  onChange?: (
    e: SyntheticEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  defaultValue?: string;
};

type FormItemWithLabelProps = Omit<FormItemProps, 'error'> & {
  label: string;
  error?: string | string[];
};

const getInputClass = (hasError: boolean) =>
  clsx(
    'border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 dark:text-white',
    hasError
      ? 'bg-red-50 border-red-500 text-red-900 dark:bg-gray-600'
      : 'bg-gray-50 border-gray-300 text-gray-900 dark:border-gray-500'
  );

const Select = (props: Omit<FormItemProps, 'label' | 'inputType'>) => {
  return (
    <select
      id={props.id}
      name={props.name}
      defaultValue={props.defaultValue}
      required={props.required}
      onChange={props.onChange}
      disabled={props.disabled}
      value={props.value}
      className={getInputClass(!!props.error)}
    >
      {props.options?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

const Input = (props: Omit<FormItemProps, 'label' | 'options'>) => {
  return (
    <input
      type={props.inputType}
      name={props.name}
      id={props.id}
      onChange={props.onChange}
      disabled={props.disabled}
      className={getInputClass(!!props.error)}
      placeholder={props.placeholder}
      required={props.required}
      value={props.value}
      defaultValue={props.defaultValue}
    />
  );
};

const Textarea = (
  props: Omit<FormItemProps, 'label' | 'options' | 'inputType'>
) => {
  return (
    <textarea
      name={props.name}
      id={props.id}
      onChange={props.onChange}
      disabled={props.disabled}
      className={clsx(getInputClass(!!props.error), 'min-h-[160px]')}
      placeholder={props.placeholder}
      required={props.required}
      value={props.value}
      defaultValue={props.defaultValue}
    />
  );
};

const FormItem = (props: FormItemProps) => {
  const { id, options = [], inputType, ...others } = props;

  if (options.length) return <Select {...others} options={options} id={id} />;
  if (inputType === 'textarea') return <Textarea id={id} {...others} />;

  return <Input id={id} inputType={inputType} {...others} />;
};

export const FormItemWithLabel = (props: FormItemWithLabelProps) => {
  const { id, label, error, ...others } = props;
  const labelClasses = clsx(
    'block mb-2 text-sm font-medium',

    error ? 'text-red-700 dark:text-red-500' : 'text-gray-900 dark:text-white'
  );

  let errorText = error;
  if (errorText && typeof errorText !== 'string') {
    errorText = error?.[0];
  }

  return (
    <div className="mb-6">
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
      <FormItem id={id} error={errorText} {...others} />
      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-500">
          <span className="font-medium">Oops!</span> {errorText}
        </p>
      )}
    </div>
  );
};
