import { ButtonIcon } from "@components/ButtonIcon";
import { Icon, PlayerContainer, PlayerName } from "./styles";

interface PlayerCardProps {
  name: string;
  onRemove: () => void;
}

export function PlayerCard({ name, onRemove }: PlayerCardProps) {
  return (
    <PlayerContainer>
      <Icon name="person" />
      <PlayerName>{name}</PlayerName>
      <ButtonIcon icon="close" type="secondary" onPress={onRemove} />
    </PlayerContainer>
  );
}
