"use client";
import "./style.css";
import HeaderMenu from "../components/HeaderConponents/header";
import MidlleProfissional from "../components/Prof/index";
import Footer from "../components/FooterConponents/footer";

const Profissional = () => {
  return (
    <div>
      <HeaderMenu />
      <MidlleProfissional></MidlleProfissional>
      <Footer></Footer>
    </div>
  );
};

export default Profissional;
