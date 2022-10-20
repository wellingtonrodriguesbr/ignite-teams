import { ButtonIconContainer, Icon } from "./styles";
import { TouchableOpacityProps } from "react-native";
import { ButtonContainerStyleProps } from "@components/Button/styles";
import { MaterialIcons } from "@expo/vector-icons";

interface ButtonIconProps extends TouchableOpacityProps {
  type?: ButtonContainerStyleProps;
  icon: keyof typeof MaterialIcons.glyphMap;
}

export function ButtonIcon({
  type = "primary",
  icon,
  ...rest
}: ButtonIconProps) {
  return (
    <ButtonIconContainer {...rest}>
      <Icon name={icon} type={type} />
    </ButtonIconContainer>
  );
}
