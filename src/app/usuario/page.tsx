import Footer from "../components/FooterConponents/Footer";
import HeaderMenu from "../components/HeaderConponents/Header";
import MidlleUsuario from "../components/User/index";
import "./style.css";

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
