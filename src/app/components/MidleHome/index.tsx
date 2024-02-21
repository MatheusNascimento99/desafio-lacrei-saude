"use client"
import './style.css'
import Image from 'next/image'
import FotoHome from '../../../../Assets/img/HomeImg.svg'

const MidlleHome = () => {
    return (
        <div className='midlle_section'>
            <div className='midlle_section_texts'>
                <h2>Boas vindas a Lacrei Saúde</h2>
                <p>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</p>
                <div className='midlle_section_btn'>
                    <a href="usuario">
                        <button href="/usuario" id='btn_usuario'>Pessoa Usuária</button>
                    </a>
                    <a href="profissional">
                        <button href="/profissional" id='btn_profissional'>Profissional</button>
                    </a>
                </div>
            </div>
            <div className='midlle_section_foto'>
            <Image id='imgHome' src={FotoHome} alt='Foto desenho médica'/>

            </div>
        </div>
    )
}

export default MidlleHome;