import styled, { css } from "styled-components/native";

export const PlayersContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const Form = styled.View`
  width: 100%;
  height: 56px;
  background-color: ${(props) => props.theme.COLORS.GRAY_700};
  flex-direction: row;
  border-radius: 6px;
`;

export const HeaderList = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin: 32px 0 12px;
`;

export const NumberOfPlayers = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;
