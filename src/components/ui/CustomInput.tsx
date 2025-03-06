import { ReactElement } from 'react';

interface CustomInputProps {
  labelText: string;
}

export const CustomInput = ({
  labelText,
  ...props
}: CustomInputProps): ReactElement => {
  return (
    <div className="space-y-2">
      <label htmlFor="name" className="text-sm text-zinc-400">
        {labelText}
      </label>
      <input
        placeholder={`Type your ${labelText.toLowerCase()}`}
        type="text"
        id="name"
        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-emerald-500 text-white"
        {...props}
      />
    </div>
  );
};
