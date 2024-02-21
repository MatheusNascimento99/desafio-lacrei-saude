
import Image from "next/image";
import HeaderFull from "./components/HeaderConponents/Header";
import FooterFull from "./components/FooterConponents/Footer";
import MidlleHome from "./components/MidleHome/index";



export default function Home() {
  return (
    <div>
      <HeaderFull></HeaderFull>
      <MidlleHome></MidlleHome>
      <FooterFull></FooterFull>
    </div>
  );
}
