"use client";
import "./style.css";
import HeaderMenu from "../components/_HeaderConponents";
import MidlleUsuario from "../components/User/index";
import Footer from "../components/FooterConponents/_footer";

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
