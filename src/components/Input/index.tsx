import { FC, ChangeEvent, useEffect } from "react";
import { StyledInput } from "./styles";

interface Props {
  placeholder?: string;
  name?: string;
  value: string;
  setValue: (value: string) => void;
  inputType?: string;
  inputState?: string;
}

const Input: FC<Props> = ({
  placeholder,
  name,
  value,
  setValue,
  inputType,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (!inputType) {
      inputType = "text";
    }
  }, []);

  return (
    <StyledInput
      type={inputType}
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
      name={name}
    />
  );
};

export default Input;
