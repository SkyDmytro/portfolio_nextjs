import { MouseEventHandler, ReactElement } from 'react';

/**
 * A custom button component.
 * @param {CustomButtonProps} props - The properties for the button.
 * @param {string} props.type - The type of the button (defaults to 'button').
 * @param {string} props.text - The text to be displayed on the button.
 * @param {MouseEventHandler<HTMLButtonElement>} props.onClick - The function to be called when the button is clicked.
 * @returns {ReactElement} A button element with the specified properties.
 */

export interface CustomButtonProps {
  type?: 'button' | 'submit' | 'reset';
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: string;
}
export const CvButton = ({
  type = 'button',
  text,
  onClick,
  icon,
}: CustomButtonProps): ReactElement => {
  return (
    <button
      type={type}
      className="relative bg-opacity-50  bg-lightBlue w-1/3  hover:bg-primaryFont hover:text-blue transition duration-500 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {icon && (
        <img src={icon} alt="icon" className=" absolute h-5 w-5 left-2" />
      )}
      <span>{text}</span>
    </button>
  );
};
