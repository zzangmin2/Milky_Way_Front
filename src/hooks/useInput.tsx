import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
} from "react";

type ReturnTypes<T> = [
  T,
  (e: ChangeEvent<HTMLInputElement>) => void,
  Dispatch<SetStateAction<T>>
];

const useInput = <T,>(initialData: T): ReturnTypes<T> => {
  const [value, setValue] = useState(initialData);
  const handler = useCallback((e: { target: { value: unknown } }) => {
    setValue(e.target.value as unknown as T);
  }, []);

  return [value, handler, setValue];
};

export default useInput;
