import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { groupCreate } from "@storage/group/groupCreate";
import { useState } from "react";
import { Content, Icon, NewGroupContainer } from "./styles";

export function NewGroup() {
  const { navigate } = useNavigation();
  const [group, setGroup] = useState("");

  async function handleCreateNewGroup() {
    try {
      await groupCreate(group);
      navigate("players", { group });
    } catch (error) {
      console.log(error);
    }
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
