import { useState } from "react";
import { StyledRegister } from "./styles";
import { mask, unMask } from "remask";
import axios from 'axios';

const Register = ({ registerRef, database, setDatabase }) => {
  const [error, setError] = useState('');

  const getRegister = (e) => {
    const isName = e.target.form[1].value;
    const isEmail = e.target.form[2].value;
    const isDate = e.target.form[3].value;
    const isTel = e.target.form[4].value;

    if (!isName || !isEmail || !isDate || !isTel) {
      setError("todos os campos precisam estar devidamente preenchidos")
      return;
    }

    const data = {
      nome: e.target.form[1].value,
      email: e.target.form[2].value,
      nascimento: e.target.form[3].value,
      telefone: e.target.form[4].value,
    };

    axios
    .post('https://indev-api.onrender.com/registered', data)
    .then(() => {
      e.target.form[1].value = "";
      e.target.form[2].value = "";
      setDateValue("");
      setTelValue("");

      setError("Cadastro efetuado com sucesso")

      setTimeout(() => {
        setError("")
      }, 3000);
    })
    .catch((error) => {
      setError("Telefone ou e-mail inválido")
    });

  };

  const [telValue, setTelValue] = useState("");

  const telMask = (e) => {
    const tel = mask(unMask(e.target.value), [
      "(99) 9999-9999",
      "(99) 9 9999-9999",
    ]);
    setTelValue(tel);
  };

  const [dateValue, setDateValue] = useState("");

  const dateMask = (e) => {
    const date = mask(e.target.value, ["99/99/9999"]);
    setDateValue(date);
  };

  return (
    <StyledRegister ref={registerRef} id="register">
      <form id="formRegister">
        <fieldset form="formRegister" name="formRegister">
          <legend>CADASTRO</legend>

          <div>
            <label htmlFor="name">Nome</label>
            <input required type="text" id="name" name="name" title="nome" />
          </div>

          <div>
            <label htmlFor="email">E-mail</label>
            <input
              required
              type="email"
              id="email"
              name="email"
              title="email"
            />
          </div>

          <div>
            <label htmlFor="date">Nascimento</label>
            <input
              required
              type="text"
              id="date"
              name="date"
              title="data de nascimento"
              onChange={dateMask}
              value={dateValue}
            />
          </div>

          <div>
            <label htmlFor="tel">Telefone</label>
            <input
              required
              type="tel"
              id="tel"
              name="tel"
              title="telefone (xx) xxxxx-xxxx"
              onChange={telMask}
              value={telValue}
            />
          </div>
        </fieldset>
      </form>

        <p>{error}</p>

      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          getRegister(e);
        }}
        form="formRegister"
      >
        CADASTRAR
      </button>
    </StyledRegister>
  );
};

export default Register;
