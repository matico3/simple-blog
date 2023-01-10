import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkStyles = styled.div`
  margin-left: auto;
  a {
    margin-left: 16px;
    text-decoration: none;
    padding: 6px;
    &:hover {
      color: var(--pink) !important;
    }
  }
`;

const NavbarStyles = styled.nav`
  padding: 20px;
  display: flex;
  align-items: center;
  max-width: 600px;
  margin: 20px auto;
  border-bottom: 1px solid #f2f2f2;
  background-color: rgb(250, 237, 237);
`;

function Navbar() {
  return (
    <NavbarStyles>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 style={{ color: "var(--pink) " }}>Blogs</h1>
      </Link>
      <LinkStyles className="links">
        <Link
          to="/"
          style={{
            color: "var(--grey)",
            fontWeight: "bold",
          }}>
          Home
        </Link>
        <Link
          to="/create"
          style={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "var(--grey)",
          }}>
          New Blog
        </Link>
      </LinkStyles>
    </NavbarStyles>
  );
}

export default Navbar;
