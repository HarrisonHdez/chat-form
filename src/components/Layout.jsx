import FooterBar from "./FooterBar";
import NavBar from "./Navbar";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <FooterBar />
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
