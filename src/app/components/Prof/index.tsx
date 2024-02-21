import React from 'react';
import Image from 'next/image'

import FotoProf from '../../../../Assets/img/profImg.svg';
import './style.css';

const MidlleProfissional = () => {
    return (
        <div className='midlle_section'>
            <div className='midlle_section_texts'>
                <h1>Profissional</h1>
                <div className='h2-container'>
                    <div className='vertical-line'></div>
                    <h2>A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais
                        de qualidade e que atendam às suas necessidades de forma segura e acolhedora.
                    </h2>
                </div>
            </div>
            <div className='midlle_section_foto'>
            <Image src={FotoProf} alt='Foto de profissionais'/>
            </div>
        </div>
    );
}

export default MidlleProfissional;