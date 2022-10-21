import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const PlayerContainer = styled.View`
  width: 100%;
  height: 56px;
  background-color: ${(props) => props.theme.COLORS.GRAY_500};
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
  border-radius: 6px;
`;

export const PlayerName = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_200,
}))`
  margin-left: 16px;
  margin-right: 4px;
`;
