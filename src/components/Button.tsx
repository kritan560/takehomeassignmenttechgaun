import React from "react";

type ButtonProps = {
  name: string;
  onClick: () => void;
};

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
