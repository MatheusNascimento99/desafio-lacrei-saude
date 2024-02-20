"use client";
import styled from "styled-components";

//!HEADER DIV
export const Footer = styled.div`
  background-color: #FFFFFF;
  height: 151px;
InstaImg
  display: flex;
  flex-direction: column;

  padding: 0 20px;
  box-sizing: border-box;
  
  flex-wrap: wrap;

  @media only screen and (max-width: 520px) {
    height: auto;
    flex-direction: column;
    transition: height 2s, flex-direction 2s;
  }
`;

//*DIV DOS LNKS
export const RedirectionLinksFooter = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 24px;
  padding-top:23px;

  @media only screen and (max-width: 520px) {
    flex-direction: column;
    font-size: 0.9rem;
    gap:5px;
    margin-left: 0px;
  }
`;

//!LINKS

export const HomeLinkFooter = styled.a`
  text-decoration: none;
  font-family: Nunito;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;
  color: #1F1F1F;
  font-size: 16px;
  max-width: 100%;

  @media only screen and (max-width: 520px) {
    font-size: 0.9rem;
    margin-left: 0px;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.7;ity: 0.5;
  }
`;

export const UsuarioLinkFooter = styled.a`
  font-family: Nunito;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0em;
  color: #1f1f1f;
  text-decoration: none;
  max-width: 100%;
  @media only screen and (max-width: 520px) {
    font-size: 0.9rem;
    margin-left: 0px;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.7;ity: 0.5;
  }
`;

export const ProfissionalLinkFooter = styled.a`
  font-family: Nunito;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: #1f1f1f;
  text-decoration: none;
  max-width: 100%;
  

  &:hover {
    cursor: pointer;
    opacity: 0.7;ity: 0.5;
  }
`;

export const Paragrafo = styled.p`
  color: #515151;
  font-family: Nunito;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  margin-left: 24px;
  margin-top: 10px;

  @media only screen and (max-width: 520px) {
    font-size: 0.9rem;
    margin-left: 0px;
  }

`;

export const LinksSocialFooter = styled.a`
  color: #018762;
  margin-top: 20px;
  text-decoration: none;
  display: flex;
  gap: 32px;
  margin-left: 24px;
  @media only screen and (max-width: 520px) {
    font-size: 0.9rem;
    margin-left: 0px;
  }

  
`;


export const IconSocial = styled.a`

text-decoration: none;
  
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
  `;
