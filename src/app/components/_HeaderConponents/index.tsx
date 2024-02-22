import { useRouter } from 'next/router';
import Link from 'next/link'

import {
  Header,
  Logo,
  RedirectionLinks,
  HomeLink,
  UsuarioLink,
  ProfissionalLink,
} from "./headerBar.style";

export default function HeaderFull() {
  
  
  return (  
    <main>
      <Header>
        <Logo href="/">Lacrei</Logo>
        <RedirectionLinks>
          <HomeLink className='homePage' href="/">Home</HomeLink>
          <UsuarioLink className='userPage' href="usuario">Pessoa Usuária</UsuarioLink>
          <ProfissionalLink className='profPage'  href="profissional">Profissional</ProfissionalLink>
        </RedirectionLinks>
      </Header>
    </main>
  );
}

