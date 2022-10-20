import styled from "styled-components/native";

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
