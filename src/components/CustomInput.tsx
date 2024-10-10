import React from "react";

interface CustomInputProps {
  labelText: string;
  // inputValue: string;
  // onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput = ({
  labelText,
  // inputValue,
  // onChange,
  ...props
}: CustomInputProps): React.ReactElement => {
  return (
    <div className="flex flex-col gap-4">
      <label className="font-bold">{labelText}</label>
      <input type="text" className="p-2 bg-blue rounded" {...props} />
    </div>
  );
};

export default CustomInput;
