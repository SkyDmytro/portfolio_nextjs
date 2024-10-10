import React, { ReactElement } from "react";

// interface FormMessageTextAreaProps {
//   // onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
//   // value: string;
// }

export const FormMessageTextArea = ({
  // onChange,
  // value,
  ...props
}): ReactElement => {
  return (
    <div className="flex flex-col gap-4">
      <label htmlFor="message" className="font-bold">
        Message
      </label>
      <textarea
        id="message"
        className="p-2 rounded resize-none bg-blue "
        cols={30}
        rows={10}
        {...props}
      />
    </div>
  );
};
