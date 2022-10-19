import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonContainerStyleProps = "primary" | "secondary";

type Props = {
  type: ButtonContainerStyleProps;
};

export const ButtonContainer = styled(TouchableOpacity)<Props>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  background: ${(props) =>
    props.type === "primary"
      ? props.theme.COLORS.GREEN_700
      : props.theme.COLORS.RED_DARK};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: ${(props) => props.theme.FONT_SIZE.MD}px;
  font-family: ${(props) => props.theme.FONT_FAMILY.BOLD};
  color: ${(props) => props.theme.COLORS.WHITE};
`;
