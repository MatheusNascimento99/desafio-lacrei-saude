"use client";
import styled from "styled-components";

//!HEADER DIV
export const Header = styled.div`
  background-color: #eeeeee;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  flex-wrap: wrap;

  @media only screen and (max-width: 520px) {
    height: auto;
    flex-direction: column;
    transition: height 2s, flex-direction 2s;
  }
`;

//!LOGO H1
export const Logo = styled.a`
  width: auto;
  height: auto;
  font-size: 32px;
  font-weight: 700;
  font-family: Nunito;
  margin-left: 44px;
  margin-top: 8px;
  color: #018762;
  text-decoration: none;

  @media only screen and (max-width: 1040px) {
    margin-left: 10px;
  }

  &:hover {
    cursor: pointer;
  }
`;

//*DIV DOS LNKS
export const RedirectionLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-right: 5rem;

  @media only screen and (max-width: 520px) {
    margin-right: 0px;
    font-size: 0.9rem;
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
  }

  &:hover {
    cursor: pointer;
    opacity: 0.7;ity: 0.5;
  }
`;
