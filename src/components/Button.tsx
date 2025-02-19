import React from "react";

/**
 * Interface defining the props for the Button component.
 */
type ButtonProps = {
  /** The text to display on the button. */
  name: string;
  /** Callback function to be called when the button is clicked. */
  onClick: () => void;
};

/**
 * A reusable button component with customizable text and click handler.
 *
 * @param {ButtonProps} props - The component's props.
 * @param {string} props.name - The text to display on the button.
 * @param {function} props.onClick - Callback function for handling button clicks.
 *
 * @example
 * <Button name="Submit" onClick={() => console.log("Button clicked")} />
 */
const Button = (props: ButtonProps) => {
  const { name, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="capitalize bg-sky-500 text-white hover:bg-sky-600/80 transition w-full px-4 py-2 rounded-md"
    >
      {name}
    </button>
  );
};

export default Button;