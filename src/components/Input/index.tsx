import { FC, useEffect } from "react";
import useInput from "../../hooks/useInput";
import { StyledInput } from "./styles";

interface Props {
  placeholder: string;
  type?: string;
}

const Input: FC<Props> = ({ type, placeholder }) => {
  const [value, onChange, setValue] = useInput("");

  useEffect(() => {
    if (!type) {
      type = "text";
    }
  }, []);

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <>
      <StyledInput
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
    </>
  );
};

export default Input;
