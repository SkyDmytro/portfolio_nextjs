import { ReactElement } from "react";

/**
 * A custom button component.
 * @param {CustomButtonProps} props - The properties for the button.
 * @param {string} props.type - The type of the button (defaults to 'button').
 * @param {string} props.text - The text to be displayed on the button.
 * @param {React.MouseEventHandler<HTMLButtonElement>} props.onClick - The function to be called when the button is clicked.
 * @returns {React.ReactElement} A button element with the specified properties.
 */

export interface CustomButtonProps {
  type?: "button" | "submit" | "reset";
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export const CustomButton = ({
  type = "button",
  text,
  onClick,
}: CustomButtonProps): ReactElement => {
  return (
    <button
      type={type}
      className="bg-lightBlue w-1/3 self-end hover:bg-primaryFont hover:text-lightBlue text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
