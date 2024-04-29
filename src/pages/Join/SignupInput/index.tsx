import { FC, ChangeEvent } from "react";
import { StyledInput } from "./styles";

interface Props {
  placeholder?: string;
  type?: string;
  name?: string;
  onChange?: any;
  value?: string;
  setValue?: ((value: string) => void | undefined) | undefined;
  children?: React.ReactNode;
  disable?: boolean;
}

const SignupInput: FC<Props> = ({
  type = "text",
  placeholder,
  name,
  disable,
  value,
  setValue,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (setValue) {
      setValue(e.target.value);
    }
  };

  return (
    <>
      <StyledInput
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        name={name}
        disabled={disable}
      ></StyledInput>
    </>
  );
};

export default SignupInput;
