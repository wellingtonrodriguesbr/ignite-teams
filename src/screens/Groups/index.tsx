import { Button } from "@components/Button";
import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ListEmpty } from "@components/ListEmpty";
import { Loading } from "@components/Loading";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { getAllGroups } from "@storage/group/getAllGroups";
import { useCallback, useState } from "react";
import { Alert, FlatList } from "react-native";
import { Container } from "./styles";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { navigate } = useNavigation();

  function handleNewGroup() {
    navigate("new");
  }

  async function fetchGroups() {
    try {
      setIsLoading(true);
      const data = await getAllGroups();
      setGroups(data);
      setIsLoading(false);
    } catch (error) {
      Alert.alert("Turmas", "Não foi possível carregar as turmas!");
      console.log(error);
    }
  }

  function handleOpenGroup(group: string) {
    navigate("players", { group });
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <GroupCard onPress={() => handleOpenGroup(item)} title={item} />
          )}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <ListEmpty message="Nenhuma turma cadastrada. Que tal criar a primeira?" />
          )}
        />
      )}
      <Button text="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  );
}
