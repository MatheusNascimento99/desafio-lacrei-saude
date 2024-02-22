"use client";
import styled from "styled-components";

//!HEADER DIV
export const Header = styled.div`
  background-color: #eeeeee;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  flex-wrap: wrap;
  padding: 0.5rem 4rem;
  

  @media only screen and (max-width: 520px) {
    height: auto;
    flex-direction: column;
    transition: height 2s, flex-direction 2s;
  padding: 0.5rem 1rem;

  }
`;

//!LOGO H1
export const Logo = styled.a`
  width: auto;
  height: auto;
  font-size: 2rem;
  font-weight: 700;
  font-family: Nunito;
  color: #018762;
  text-decoration: none;

  
  &:hover {
    cursor: pointer;
  }
`;

//*DIV DOS LNKS
export const RedirectionLinks = styled.div`
  display: flex;
  gap: 2.5rem;
  box-sizing: border-box;
  font-weight: bold;
  justify-content: space-between;
  
  @media only screen and (max-width: 520px) {
    font-size: 0.9rem;
    gap: 1rem;
  }
`;

//!LINKS

export const HomeLink = styled.a`
  text-decoration: none;
  font-family: Nunito;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: left;
  color: #018762;
  font-size: 16px;
  max-width: 100%;

  @media only screen and (max-width: 520px) {
    font-size: 0.9rem;
  font-weight: bold;

  }

  &:hover {
    cursor: pointer;
    opacity: 0.7;ity: 0.5;
  }
`;

export const UsuarioLink = styled.a`
  font-family: Nunito;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0em;
  color: #1f1f1f;
  text-decoration: none;
  max-width: 100%;
  @media only screen and (max-width: 520px) {
    font-size: 0.9rem;
  font-weight: bold;

  }

  &:hover {
    cursor: pointer;
    opacity: 0.7;ity: 0.5;
  }
`;

export const ProfissionalLink = styled.a`
  font-family: Nunito;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: #1f1f1f;
  text-decoration: none;
  max-width: 100%;
  @media only screen and (max-width: 520px) {
    font-size: 0.9rem;
  font-weight: bold;

  }

  &:hover {
    cursor: pointer;
    opacity: 0.7;ity: 0.5;
  }
`;
