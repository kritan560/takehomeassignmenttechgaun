import { HTMLInputTypeAttribute } from "react";

/**
 * Interface defining the props for the CustomInput component.
 */
type CustomInputProps = {
  /** The name/label for the input. This is also used as the input's `name` attribute. */
  name: string;
  /** Callback function to be called when the input's value changes.
   * Receives the new value as a string argument.
   */
  onChange: (value: string) => void;
  /** Optional extra information to display next to the input label. */
  extraInfo?: string;
  /** The type of the input element (e.g., "text", "email", "password"). Defaults to "text". */
  type?: HTMLInputTypeAttribute | undefined;
};

/**
 * A custom input component with a label, optional extra info, and placeholder.
 * Supports controlled input and handles changes via a callback function.
 *
 * @param {CustomInputProps} props - The component's props.
 * @param {string} props.name - The name/label for the input.
 * @param {function} props.onChange - Callback function for handling input changes.
 * @param {string} [props.extraInfo] - Optional extra information to display.
 * @param {string} [props.type="text"] - The type of the input element.
 *
 * @example
 * <CustomInput name="email" type="email" onChange={(value) => console.log(value)} extraInfo="(required)" />
 * <CustomInput name="password" type="password" onChange={(value) => console.log(value)} />
 */
const CustomInput = (props: CustomInputProps) => {
  const { name, onChange, extraInfo, type = "text" } = props;

  return (
    <div className="flex gap-x-2 items-start flex-col">
      <p className="capitalize text-sm font-semibold text-stone-600">
        {name} {extraInfo}
      </p>
      <input
        onChange={(e) => onChange(e.target.value)}
        className="hover:cursor-pointer focus:outline-none focus:ring-0 focus:border-transparent text-stone-500 w-full font-medium border rounded-md px-4 py-2 placeholder:text-sm"
        type={type}
        name={name} // Important for form submissions
        placeholder={"Enter " + name}
      />
    </div>
  );
};

export default CustomInput;