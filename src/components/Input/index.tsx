import { FC } from "react";
import useInput from "../../hooks/useInput";
import { StyledInput } from "./styles";

interface Props {
  placeholder: string;
}

const Input: FC<Props> = ({ placeholder }) => {
  const [value, onChange, setValue] = useInput("");

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <>
      <StyledInput
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
    </>
  );
};

export default Input;
