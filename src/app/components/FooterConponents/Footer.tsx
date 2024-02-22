
import Image from 'next/image'
import {
  Footer,
  RedirectionLinksFooter,
  HomeLinkFooter,
  UsuarioLinkFooter,
  ProfissionalLinkFooter,
  Paragrafo,
  LinksSocialFooter,
  IconSocial
} from "./FooterBar.style";

import FaceImg from "../../../../Assets/img/FacebookLogo.png";
import InstaImg from "../../../../Assets/img/InstagramLogo.png";
import LinkedinImg from "../../../../Assets/img/LinkedinLogo.png";



export default function FooterFull() {
  return (
    <main>
      <Footer>
        <RedirectionLinksFooter>
          <HomeLinkFooter className='homePageFooter'  href="/">Home</HomeLinkFooter>
          <UsuarioLinkFooter className='userPageFooter' href="usuario">Pessoa Usuária</UsuarioLinkFooter>
          <ProfissionalLinkFooter className='profPageFooter' href="profissional">Profissional</ProfissionalLinkFooter>
        </RedirectionLinksFooter>
        <LinksSocialFooter>
          <IconSocial target='_blank' href="https://www.instagram.com/lacrei.saude"><Image src={InstaImg} alt='logo Instagran'/> </IconSocial>
          <IconSocial target='_blank' href="https://www.facebook.com/lacrei.saude"><Image src={FaceImg} alt='logo FaceBook'/> </IconSocial>
          <IconSocial target='_blank' href="https://www.linkedin.com/company/lacrei-saude/"><Image src={LinkedinImg} alt='logo Linkedin'/> </IconSocial>
        </LinksSocialFooter>
        <Paragrafo>Desafio Front-end Lacrei</Paragrafo>
      </Footer>
    </main>
  );
}
