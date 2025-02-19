import React from "react";

type CustomTextAreaProps = {
  name: string;
  onChange: (value: string) => void;
};

const CustomTextArea = (props: CustomTextAreaProps) => {
  const { name, onChange } = props;

  return (
    <div className="flex gap-x-2 items-start flex-col ">
      <p className="capitalize text-sm font-semibold text-stone-600">
        {name} (Optional)
      </p>

      <textarea
        onChange={(e) => onChange(e.target.value)}
        className="hover:cursor-pointer focus:outline-none focus:ring-0 focus:border-transparent text-stone-500 font-medium border rounded-md px-4 py-2 placeholder:text-sm w-full"
        name={name}
        placeholder={"Enter " + name}
        rows={3}
      ></textarea>
    </div>
  );
};

export default CustomTextArea;
