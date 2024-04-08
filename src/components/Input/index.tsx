import { FC, ChangeEvent } from "react";
import { StyledInput } from "./styles";

interface Props {
  placeholder: string;
  name?: string;
  value: string;
  setValue: (value: string) => void;
}

const Input: FC<Props> = ({ placeholder, name, value, setValue }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <StyledInput
      type="text"
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
      name={name}
    />
  );
};

export default Input;
