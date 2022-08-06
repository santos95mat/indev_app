import { StyledMain } from "./styles";

const Main = ({ topRef }) => {
  return (
    <StyledMain ref={topRef}>
      <div>
        <h1>ESTÁGIO</h1>
        <h2>PROVA DE SELEÇÃO</h2>
      </div>
    </StyledMain>
  );
};

export default Main;
