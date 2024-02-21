import React from 'react';
import FotoUsusario from '../../../../Assets/img/usuarioImg.svg';
import Image from 'next/image'
import './style.css';


const MidlleUsuario = () => {
    return (
        <div className='midlle_section'>
            <div className='midlle_section_texts'>
                <h1>Pessoa Usuária</h1>
                <div className='h2-container'>
                    <div className='vertical-line'></div>
                    <h2>A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais
                        de qualidade e que atendam às suas necessidades de forma segura e acolhedora.
                    </h2>
                </div>
            </div>
            <div className='midlle_section_foto'>
            <Image src={FotoUsusario} alt='logo FaceBook'/>

            </div>
        </div>
    );
}

export default MidlleUsuario;
