import { HTMLInputTypeAttribute } from "react";

type CustomInputProps = {
  name: string;
  onChange: (value: string) => void;
  extraInfo?: string;
  type?: HTMLInputTypeAttribute | undefined;
};

const CustomInput = (props: CustomInputProps) => {
  const { name, onChange, extraInfo, type="text" } = props;

  return (
    <div className="flex gap-x-2 items-start flex-col">
      <p className="capitalize text-sm font-semibold text-stone-600">
        {name} {extraInfo}
      </p>
      <input
        onChange={(e) => onChange(e.target.value)}
        className="hover:cursor-pointer focus:outline-none focus:ring-0 focus:border-transparent text-stone-500 w-full font-medium border rounded-md px-4 py-2 placeholder:text-sm"
        type={type}
        name={name}
        placeholder={"Enter " + name}
      />
    </div>
  );
};

export default CustomInput;
