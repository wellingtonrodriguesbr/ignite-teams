import { TouchableOpacityProps } from "react-native";
import {
  ButtonContainer,
  ButtonContainerStyleProps,
  ButtonText,
} from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  type?: ButtonContainerStyleProps;
}

export function Button({ text, type = "primary", ...rest }: ButtonProps) {
  return (
    <ButtonContainer type={type} {...rest}>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
}
