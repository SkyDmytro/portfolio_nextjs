import { ReactElement } from "react";

interface CustomInputProps {
  labelText: string;
}

const CustomInput = ({
  labelText,
  ...props
}: CustomInputProps): ReactElement => {
  return (
    <div className="flex flex-col gap-4">
      <label className="font-bold">{labelText}</label>
      <input
        type="text"
        className="p-2 bg-blue rounded focus:outline-none focus:ring-2 focus:ring-lightBlue"
        {...props}
      />
    </div>
  );
};

export default CustomInput;
