import { BackButton, BackIcon, HeaderContainer, Logo } from "./styles";
import { TouchableOpacityProps } from "react-native";
import logoImg from "@assets/logo.png";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: HeaderProps) {
  const { navigate } = useNavigation();

  function handleGoHome() {
    navigate("groups");
  }

  return (
    <HeaderContainer>
      {showBackButton ? (
        <BackButton onPress={handleGoHome}>
          <BackIcon />
        </BackButton>
      ) : null}
      <Logo source={logoImg} />
    </HeaderContainer>
  );
}
