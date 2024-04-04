import { FC, useEffect } from "react";
import useInput from "../../../hooks/useInput";
import { StyledInput } from "./styles";

interface Props {
  placeholder?: string;
  type?: string;
  name?: string;
  onChange?: any;
  children?: React.ReactNode;
}

const SignupInput: FC<Props> = ({ type, placeholder, name }) => {
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
        name={name}
      />
    </>
  );
};

export default SignupInput;
