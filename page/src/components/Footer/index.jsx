import { StyledFooter } from "./styles";

const Footer = ({ contactRef }) => {
  return (
    <StyledFooter ref={contactRef} id="footer">
      <p>Matheus Rodrigues Santos</p>
      <p>santos95.mat@gmail.com</p>
      <p>(31) 97168-8746</p>
      <p>Faculdade de Belo Horizonte</p>
    </StyledFooter>
  );
};

export default Footer;
