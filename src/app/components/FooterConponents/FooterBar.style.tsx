"use client";
import { useRouter } from "next/router";
import styled from "styled-components";

//!HEADER DIV
export const Footer = styled.div`
  background-color: #ffffff;
  height: 10rem;
  border-top: 1px solid rgb(176, 224, 211);
  display: flex;
  flex-direction: column;
  margin: 0px 4rem;
  padding: 2rem 0px 0.5rem;
  box-sizing: border-box;
  justify-content: space-between;

  flex-wrap: wrap;

  @media only screen and (max-width: 1040px) {
    margin: 0px 2rem;
  }

  @media only screen and (max-width: 520px) {
    height: auto;
    flex-direction: column;
    transition: height 2s, flex-direction 2s;
    margin: 0px 1rem;
    padding: 2rem 0px 0.5rem;
    padding-top: 1rem;


  }
`;

//*DIV DOS LNKS
export const RedirectionLinksFooter = styled.div`
  display: flex;
  gap: 2.5rem;


  @media only screen and (max-width: 520px) {
    flex-direction: column;
    font-size: 0.9rem;
    gap: 5px;
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
  color: #1f1f1f;
  font-size: 16px;
  max-width: 100%;

  @media only screen and (max-width: 520px) {
    font-size: 0.9rem;
    margin-left: 0px;
    font-size: 0.875rem;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.7;
    ity: 0.5;
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
    font-size: 0.875rem;

  }

  &:hover {
    cursor: pointer;
    opacity: 0.7;
    ity: 0.5;
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

  @media only screen and (max-width: 520px) {
    font-size: 0.9rem;

  }

  &:hover {
    cursor: pointer;
    opacity: 0.7;
    ity: 0.5;
  }
`;

export const LinksSocialFooter = styled.div`
  color: #018762;
  text-decoration: none;
  display: flex;
  gap: 32px;
  @media only screen and (max-width: 520px) {
    font-size: 0.9rem;
    margin-left: 0px;
    margin: 10px 0 10px 0;

  }
`;

export const IconSocial = styled.a`
  text-decoration: none;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const Paragrafo = styled.p`
  color: #515151;
  font-family: Nunito;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;

  @media only screen and (max-width: 520px) {
    font-size: 0.75rem;
  }
`;
