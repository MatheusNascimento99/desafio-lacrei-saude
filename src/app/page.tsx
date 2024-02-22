'use client'
import HeaderFull from "./components/HeaderConponents/Header";
import MidlleHome from "./components/MidleHome/index";
import FooterFull from "./components/FooterConponents/Footer";



export default function Home() {
  return (
    <div>
      <HeaderFull></HeaderFull>
      <MidlleHome></MidlleHome>
      <FooterFull></FooterFull>
    </div>
  );
}
