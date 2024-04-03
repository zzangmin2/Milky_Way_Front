import { FC, ChangeEvent, useEffect } from "react";
import useInput from "../../hooks/useInput";
import { StyledInput } from "./styles";

interface Props {
  placeholder: string;
  type?: string;
  name?: string;
  onChange?: (value: string) => void;
}

const Input: FC<Props> = ({ type = "text", placeholder, name, onChange }) => {
  const [value, setValue] = useInput("");

  useEffect(() => {
    if (!type) {
      type = "text";
    }
  }, [type]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue: any = e.target.value;
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
      name={name}
    />
  );
};

export default Input;
