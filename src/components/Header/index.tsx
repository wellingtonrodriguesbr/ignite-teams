import { BackButton, BackIcon, HeaderContainer, Logo } from "./styles";
import logoImg from "@assets/logo.png";

interface HeaderProps {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: HeaderProps) {
  return (
    <HeaderContainer>
      {showBackButton ? (
        <BackButton>
          <BackIcon />
        </BackButton>
      ) : null}
      <Logo source={logoImg} />
    </HeaderContainer>
  );
}
