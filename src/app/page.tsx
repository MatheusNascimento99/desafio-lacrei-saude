'use client'
import HeaderFull from "./components/_HeaderConponents";
import MidlleHome from "./components/MidleHome/index";
import FooterFull from "./components/_FooterConponents/footer";



export default function Home() {
  return (
    <div>
      <HeaderFull></HeaderFull>
      <MidlleHome></MidlleHome>
      <FooterFull></FooterFull>
    </div>
  );
}
