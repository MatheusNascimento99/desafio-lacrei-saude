"use client";
import "./style.css";
import HeaderMenu from "../components/_HeaderConponents";
import MidlleProfissional from "../components/Prof/index";
import Footer from "../components/_FooterConponents/footer";

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
