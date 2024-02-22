import React from 'react';
import FotoUsusario from '../../../../Assets/img/UsuarioImg.svg';
import Image from 'next/image'
import './style.css';


const MidlleUsuario = () => {
    return (
        <div className='midlle_section'>
            <div className='midlle_section_texts'>
                <h2>Pessoa Usuária</h2>
                <div className='h2-container'>
                    <div className='vertical-line'></div>
                    <p>A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais
                        de qualidade e que atendam às suas necessidades de forma segura e acolhedora.
                    </p>
                </div>
            </div>
            <div className='midlle_section_foto'>
            <Image id='imgMidlleUsuario' src={FotoUsusario} alt='Foto Desenho Usuários'/>

            </div>
        </div>
    );
}

export default MidlleUsuario;
