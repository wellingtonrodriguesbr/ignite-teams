import { TextInputProps } from "react-native";
import { InputContainer } from "./styles";
import { useTheme } from "styled-components";

export function Input({ ...rest }: TextInputProps) {
  const { COLORS } = useTheme();
  return <InputContainer placeholderTextColor={COLORS.GRAY_300} {...rest} />;
}
