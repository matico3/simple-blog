import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "./Icons";
const LinkStyles = styled.div`
  margin-left: auto;
  a {
    margin-left: 16px;
    text-decoration: none;
    padding: 10px;
    border: 3px solid black;
    background-color: rgb(250, 237, 237);
    transition: background-color 0.3s;
    &:hover {
      background-color: var(--pink) !important;
    }
  }
`;

const NavbarStyles = styled.nav`
  padding: 20px;
  display: flex;
  align-items: center;
  margin: 20px auto;
  border-bottom: 1px solid #f2f2f2;
  background-color: rgb(250, 237, 237);
  max-width: var(--max-width);
  border: 3px solid black;

  svg {
    transition: fill 0.3s;
    &:hover {
      fill: #e5fcf8;
    }
  }
`;

function Navbar() {
  return (
    <NavbarStyles>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Icon />
      </Link>
      <LinkStyles className="links">
        <Link
          to="/"
          style={{
            color: "var(--grey)",
            fontWeight: "bold",
            backgroundColor: "rgb(253, 231, 231)",
          }}>
          Home
        </Link>
        <Link
          to="/create"
          style={{
            fontWeight: "bold",
            color: "white",
            backgroundColor: "var(--lightGrey)",
          }}>
          New Blog
        </Link>
      </LinkStyles>
    </NavbarStyles>
  );
}

export default Navbar;
