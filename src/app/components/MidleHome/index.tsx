"use client"
import './style.css'
import Image from 'next/image'
import FotoHome from '../../../../Assets/img/HomeImg.svg'

const MidlleHome = () => {
    return (
        <div className='midlle_section'>
            <div className='midlle_section_texts'>
                <h1>Boas vindas a Lacrei<br /> Saúde</h1>
                <h2>Uma plataforma segura e acolhedora<br /> para comunidade LGBTQIAPN+</h2>
                <div className='midlle_section_btn'>
                    <a href="usuario">
                        <button href="/usuario" id='btn_usuario'>Pessoa Usuária</button>
                    </a>
                    <a href="profissional">
                        <button href="/profissional" id='btn_profissional'>Profissional</button>
                    </a>
                </div>
            </div >
            <div className='midlle_section_foto'>
            <Image src={FotoHome} alt='Foto desenho médica'/>

            </div>
        </div>
    )
}

export default MidlleHome;