import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Content, Icon, NewGroupContainer } from "./styles";

export function NewGroup() {
  const { navigate } = useNavigation();
  const [group, setGroup] = useState("");

  function handleCreateNewGroup() {
    navigate("players", { group });
  }

  return (
    <NewGroupContainer>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />
        <Input
          placeholder="Nome da turma"
          onChangeText={(text) => setGroup(text)}
        />
        <Button text="Criar" onPress={handleCreateNewGroup} />
      </Content>
    </NewGroupContainer>
  );
}
