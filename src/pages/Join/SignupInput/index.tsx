import { FC, ChangeEvent } from "react";
import { StyledInput, StyledInputContainer } from "./styles";

interface Props {
  placeholder?: string;
  type?: string;
  name?: string;
  onChange?: any;
  value?: string;
  setValue?: ((value: string) => void | undefined) | undefined;
  onClick?: () => void;
  disable?: boolean;
}

const SignupInput: FC<Props> = ({
  type = "text",
  placeholder,
  name,
  disable,
  value,
  setValue,
  onClick,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (setValue) {
      setValue(e.target.value);
    }
  };

  return (
    <StyledInputContainer>
      <StyledInput
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        name={name}
        disabled={disable}
      />
      {type === "verify" && <button onClick={onClick}>중복확인</button>}
    </StyledInputContainer>
  );
};

export default SignupInput;
