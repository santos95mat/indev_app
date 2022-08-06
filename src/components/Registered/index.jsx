import { StyledRegistered } from "./styles";
import topoImg from "../../assets/icones/topo-pag.svg";

const Registered = ({ listRef, datareal, topRef, matchesHeader }) => {
  return (
    <StyledRegistered ref={listRef} id="registered">
      <h2>LISTA DE CADASTRO</h2>
      <section>
        <article className="table_colunm">
          <div className="table__index"></div>
          <div className="table__value">NOME</div>
          <div className="table__value">E-MAIL</div>
          <div className="table__value">NASCIMENTO</div>
          <div className="table__value">TELEFONE</div>
        </article>

        {datareal.map((e, index) => (
          <article key={index} className="table__map">
            <div className="table__index">{index + 1}</div>
            <div className="table__value">{e.nome}</div>
            <div className="table__value">{e.email}</div>
            <div className="table__value">{e.nascimento}</div>
            <div className="table__value">{e.telefone}</div>
          </article>
        ))}
      </section>
      {matchesHeader ? (
        <img
          onClick={(e) => {
            topRef.current.scrollIntoView({
              behavior: "smooth",
            });
          }}
          src={topoImg}
          alt=""
        />
      ) : (
        <></>
      )}
    </StyledRegistered>
  );
};

export default Registered;
