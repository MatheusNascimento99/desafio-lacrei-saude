import React from "react";
import Image from "next/image";

import FotoProf from "../../../../Assets/img/ProfImg.svg";
import "./style.css";

const MidlleProfissional = () => {
  return (
    <div className="midlle_section">
      <div className="midlle_section_texts_prof">
        <h2>Profissional</h2>
        <div className="h2-container">
          <div className="vertical-line"></div>
          <p>
            Buscamos recrutar pessoas profissionais da saúde que entendam as
            necessidades e se comprometam com o bem-estar da comunidade
            LGBTQIAPN+.
          </p>
        </div>
      </div>
      <div className="midlle_section_foto">
        <Image
          id="imgMidlleProfissional"
          src={FotoProf}
          alt="Foto de profissionais"
        />
      </div>
    </div>
  );
};

export default MidlleProfissional;
