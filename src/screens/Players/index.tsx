import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { ListEmpty } from "@components/ListEmpty";
import { PlayerCard } from "@components/PlayerCard";
import { useNavigation, useRoute } from "@react-navigation/native";
import { removeGroupByName } from "@storage/group/removeGroupByName";
import { addPlayerByGroup } from "@storage/player/addPlayerByGroup";
import { getPlayerByGroupAndTeam } from "@storage/player/getPlayerByGroupAndTeam";
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";
import { removePlayerByGroup } from "@storage/player/removePlayerByGroup";
import { AppError } from "@utils/AppError";
import { useEffect, useState, useRef } from "react";
import { Alert, FlatList, TextInput } from "react-native";
import { Form, HeaderList, NumberOfPlayers, PlayersContainer } from "./styles";

interface RouteParams {
  group: string;
}

export function Players() {
  const [teamSeletected, setTeamSelected] = useState("Time A");
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
  const [newPlayerName, setNewPlayerName] = useState("");
  const { navigate } = useNavigation();

  const newPlayerNameInputRef = useRef<TextInput>(null);

  const route = useRoute();
  const { group } = route.params as RouteParams;

  async function handleAddPlayer() {
    if (!newPlayerName.trim().length) {
      return Alert.alert("Novo jogador", "Informe o nome do jogador.");
    }

    const newPlayer = {
      name: newPlayerName,
      team: teamSeletected,
    };

    try {
      await addPlayerByGroup(newPlayer, group);
      newPlayerNameInputRef.current?.blur();

      setNewPlayerName("");
      fetchPlayersByTeam();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo jogador", error.message);
      } else {
        console.log(error);
        Alert.alert(
          "Novo jogador",
          "Não foi possível adicionar o novo jogador."
        );
      }
    }
  }

  async function handleRemovePlayer(playerName: string) {
    try {
      await removePlayerByGroup(playerName, group);
      fetchPlayersByTeam();
    } catch (error) {
      Alert.alert("Remover jogador", "Falha ao remover jogador!");
    }
  }

  async function removeGroup() {
    try {
      await removeGroupByName(group);
      navigate("groups");
    } catch (error) {
      Alert.alert("Remover turma", "Não foi possível remover essa turma!");
    }
  }

  async function handleRemoveGroup() {
    Alert.alert("Remover turma", "Tem certeza que deseja remover essa turma?", [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim, remover",
        onPress: () => removeGroup(),
      },
    ]);
  }

  async function fetchPlayersByTeam() {
    try {
      const playersByTeam = await getPlayerByGroupAndTeam(
        group,
        teamSeletected
      );
      setPlayers(playersByTeam);
    } catch (error) {
      console.log(error);
      Alert.alert("Jogadores", "Não foi possível carregar os jogadores!");
    }
  }

  useEffect(() => {
    fetchPlayersByTeam();
  }, [teamSeletected]);

  return (
    <PlayersContainer>
      <Header showBackButton />
      <Highlight title={group} subtitle="Adicione a galera e separe os times" />
      <Form>
        <Input
          inputRef={newPlayerNameInputRef}
          placeholder="Nome do jogador"
          value={newPlayerName}
          autoCorrect={false}
          onChangeText={setNewPlayerName}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />
        <ButtonIcon icon="add" onPress={handleAddPlayer} />
      </Form>
      <HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === teamSeletected}
              onPress={() => setTeamSelected(item)}
            />
          )}
          horizontal
        />
        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>
      <FlatList
        data={players}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
        renderItem={({ item }) => (
          <PlayerCard
            name={item.name}
            onRemove={() => handleRemovePlayer(item.name)}
          />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Nenhum jogador nesse time." />
        )}
      />
      <Button
        text="Remover turma"
        type="secondary"
        onPress={handleRemoveGroup}
      />
    </PlayersContainer>
  );
}
