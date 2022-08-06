import { useState } from "react";
import { StyledRegisteredMobile } from "./styles";

const Registered = ({ listRef, datareal }) => {
  const [check, setCheck] = useState([datareal[0]]);

  return (
    <StyledRegisteredMobile ref={listRef} id="registered">
      <h2>
        LISTA DE
        <br />
        CADASTRO
      </h2>

      <article className="register__header">
        {datareal.map((element, index) => (
          <div key={index}>
            <label>
              <input
                defaultChecked={index === 0}
                onClick={() => setCheck([element])}
                type="radio"
                name="regitered"
              />
              <span>{index + 1}</span>
            </label>
          </div>
        ))}
      </article>

      {check.map((el, index) => (
        <article key={index} className="register__dados">
          <div>
            <p className="colunm__title">NOME</p>
            <p className="colunm__dados">{el.nome}</p>
          </div>
          <div>
            <p className="colunm__title">E-MAIL</p>
            <p className="colunm__dados">{el.email}</p>
          </div>
          <div>
            <p className="colunm__title">NASC.</p>
            <p className="colunm__dados">{el.nascimento}</p>
          </div>
          <div>
            <p className="colunm__title">TEL.</p>
            <p className="colunm__dados">{el.telefone}</p>
          </div>
        </article>
      ))}
    </StyledRegisteredMobile>
  );
};

export default Registered;
