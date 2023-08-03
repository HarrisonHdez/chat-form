import styled from "styled-components";


const Nav = styled.nav`
  width: 100%;
  background-color: var(--colorCode);

`;
const NavContent = styled.div`
  padding: 10px 20px;
  max-width: 1200px;
  margin: auto;
  width: 95%;
`;

const NavBar = () => {
  return (
    <Nav>
        <NavContent>
            <img className="logo" src="image/logo.png" alt="logo" />
        </NavContent>
    </Nav>
  )
}

export default NavBar