import { FC } from "react";

interface inputProps {
  label?: string;
  placeholder?: string;
  name: string;
  type?: string;
  onChange?: (e: any) => void;
  value?: string;
  defaultValue?: string;
  required?: boolean;
}

const Input: FC<inputProps> = ({
  label,
  placeholder,
  name,
  type = "text",
  onChange,
  value,
  defaultValue,
  required = false,
}) => {
  return (
    <div className="flex flex-col items-start">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className="border w-full py-3 px-4 outline-none rounded-lg"
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
        required={required}
      />
    </div>
  );
};

export default Input;
