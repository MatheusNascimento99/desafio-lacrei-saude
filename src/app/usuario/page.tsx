"use client";
import "./style.css";
import HeaderMenu from "../components/HeaderConponents/Header";
import MidlleUsuario from "../components/User/index";
import Footer from "../components/FooterConponents/Footer";

const Usuario = () => {
  return (
    <div>
      <HeaderMenu></HeaderMenu>
      <MidlleUsuario></MidlleUsuario>
      <Footer></Footer>
    </div>
  );
};

export default Usuario;
