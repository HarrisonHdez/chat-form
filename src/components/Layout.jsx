import PropTypes from "prop-types";
import NavBar from "./NavBar";
import FooterBar from "./FooterBar";

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
