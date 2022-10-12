import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.COLORS.GRAY_700};
`;

export const Text = styled.Text`
  font-size: 40px;
  color: ${(props) => props.theme.COLORS.GREEN_500};
  font-family: ${(props) => props.theme.FONT_FAMILY.BOLD};
`;
