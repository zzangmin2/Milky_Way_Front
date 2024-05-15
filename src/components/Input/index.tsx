import {
  FC,
  ChangeEvent,
  useEffect,
  KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { StyledInput } from "./styles";

interface Props {
  placeholder?: string;
  name?: string;
  value: string;
  setValue: (value: string) => void;
  inputType?: string;
  inputState?: string;
  onEnterPress?: () => void;
  disabled?: boolean;
}

const Input: FC<Props> = ({
  placeholder,
  name,
  value,
  setValue,
  inputType,
  onEnterPress,
  disabled,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // 따로 inputType을 명시하지 않았다면 기본으로 type="text"로 처리
  useEffect(() => {
    if (!inputType) {
      inputType = "text";
    }
  }, []);

  //enter키 눌렀을 떄 이벤트 처리 함수
  const handleKeyDown = (e: ReactKeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onEnterPress) {
      onEnterPress();
    }
  };

  return (
    <StyledInput
      type={inputType}
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
      name={name}
      onKeyDown={handleKeyDown}
      disabled={disabled}
    />
  );
};

export default Input;
