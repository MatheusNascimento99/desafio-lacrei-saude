"use client";
import "./style.css";
import HeaderMenu from "../components/HeaderConponents/Header";
import MidlleProfissional from "../components/Prof/index";
import Footer from "../components/FooterConponents/Footer";

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
