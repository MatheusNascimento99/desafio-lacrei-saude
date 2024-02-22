"use client";
import "./style.css";
import HeaderMenu from "../components/HeaderConponents";
import MidlleUsuario from "../components/User/index";
import Footer from "../components/FooterConponents/footer";

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
