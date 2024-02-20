

import {
  Header,
  Logo,
  RedirectionLinks,
  HomeLink,
  UsuarioLink,
  ProfissionalLink,
} from "./HeaderBar.style";

export default function HeaderFull() {
  return (
    <main>
      <Header>
        <Logo href="/">Lacrei</Logo>
        <RedirectionLinks>
          <HomeLink href="/">Home</HomeLink>
          <UsuarioLink href="usuario">Pessoa Usuária</UsuarioLink>
          <ProfissionalLink href="profissional">Profissional</ProfissionalLink>
        </RedirectionLinks>
      </Header>
    </main>
  );
}
