import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";
import { useState } from "react";
import { Alert } from "react-native";
import { Content, Icon, NewGroupContainer } from "./styles";

export function NewGroup() {
  const { navigate } = useNavigation();
  const [group, setGroup] = useState("");

  async function handleCreateNewGroup() {
    try {
      if (!group.trim().length) {
        return Alert.alert("Campo vazio", "Informe o nome da turma!");
      }

      await groupCreate(group);
      navigate("players", { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo grupo", error.message);
      } else {
        Alert.alert("Novo grupo", "Não foi possível criar um novo grupo!");
      }
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
