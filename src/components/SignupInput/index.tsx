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
  disabled?: boolean;
  color?: string | undefined;
}

const SignupInput: FC<Props> = ({
  type = "text",
  placeholder,
  name,
  disabled,
  value,
  setValue,
  onClick,
  color,
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
        disabled={disabled}
        color={color}
      />
      {type === "verify" && (
        <button onClick={onClick} disabled={disabled}>
          중복확인
        </button>
      )}
      {type === "verifyloading" && (
        <button onClick={onClick} color={color} disabled={disabled}>
          ..
        </button>
      )}
    </StyledInputContainer>
  );
};

export default SignupInput;
