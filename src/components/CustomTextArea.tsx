import React from "react";

/**
 * Interface defining the props for the CustomTextArea component.
 */
type CustomTextAreaProps = {
  /** The name/label for the text area.  This is also used as the input's `name` attribute. */
  name: string;
  /** Callback function to be called when the text area's value changes.
   *  Receives the new value as a string argument.
   */
  onChange: (value: string) => void;
};

/**
 * A custom text area component with a label and optional placeholder.
 * Supports controlled input and handles changes via a callback function.
 *
 * @param {CustomTextAreaProps} props - The component's props.
 * @param {string} props.name - The name/label for the text area.
 * @param {function} props.onChange - Callback function for handling text area changes.
 *
 * @example
 * <CustomTextArea name="description" onChange={(value) => console.log(value)} />
 */
const CustomTextArea = (props: CustomTextAreaProps) => {
  const { name, onChange } = props;

  return (
    <div className="flex gap-x-2 items-start flex-col">
      <p className="capitalize text-sm font-semibold text-stone-600">
        {name} (Optional)
      </p>

      <textarea
        onChange={(e) => onChange(e.target.value)}
        className="hover:cursor-pointer focus:outline-none focus:ring-0 focus:border-transparent text-stone-500 font-medium border rounded-md px-4 py-2 placeholder:text-sm w-full"
        name={name} // Important for form submissions
        placeholder={"Enter " + name}
        rows={3}
      ></textarea>
    </div>
  );
};

export default CustomTextArea;