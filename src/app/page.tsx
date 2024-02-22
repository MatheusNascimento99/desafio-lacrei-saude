'use client'
import HeaderFull from "./components/HeaderConponents";
import MidlleHome from "./components/MidleHome/index";
import FooterFull from "./components/FooterConponents/footer";



export default function Home() {
  return (
    <div>
      <HeaderFull></HeaderFull>
      <MidlleHome></MidlleHome>
      <FooterFull></FooterFull>
    </div>
  );
}
