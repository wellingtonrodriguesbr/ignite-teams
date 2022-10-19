import { TextInput } from "react-native";
import styled from "styled-components/native";

export const InputContainer = styled(TextInput)`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;
  padding: 16px;
  background-color: ${(props) => props.theme.COLORS.GRAY_700};
  color: ${(props) => props.theme.COLORS.WHITE};
  font-family: ${(props) => props.theme.FONT_FAMILY.REGULAR};
  font-size: ${(props) => props.theme.FONT_SIZE.MD}px;
  margin-bottom: 16px;
`;
