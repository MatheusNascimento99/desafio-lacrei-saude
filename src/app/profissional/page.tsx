import HeaderMenu from "../components/HeaderConponents/Header";
import Footer from "../components/FooterConponents/Footer";
import MidlleProfissional from "../components/Prof/index";
import './style.css'

const Profissional = () => {
    return (
        <div>
            <HeaderMenu/>
            <MidlleProfissional></MidlleProfissional>
            <Footer></Footer>
        </div>
    )
}

export default Profissional;