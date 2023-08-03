import styled from "styled-components";

const Footer = styled.footer`
  width: 100%;
  background-color: var(--colorCode);
  position: absolute;
  bottom: 0;
`;
const FooterContent = styled.div`
  padding: 10px 20px;
  max-width: 1200px;
  margin: auto;
  width: 95%;
  font-family: var(--primaryFont);
  color: #fff;
  text-align: center;
`;

const FooterBar = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Footer>
      <FooterContent>
        <p>Todos los derechos reservados &copy; {getCurrentYear()}</p>
      </FooterContent>
    </Footer>
  );
};

export default FooterBar;
