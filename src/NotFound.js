import { Link } from "react-router-dom";
import styled from "styled-components";

const Styled = styled.div`
  margin: 20px;
  p {
    margin: 20px 0 30px;
  }
  a {
    text-decoration: none;
    padding: 10px;
    font-weight: bold;
    border: 3px solid black;
    background-color: rgb(250, 237, 237);
    transition: background-color 0.3s;
    &:hover {
      background-color: var(--pink) !important;
    }
  }
`;

export default function NotFound() {
  return (
    <Styled>
      <h2>Sorry,</h2>
      <p>this page could not be found... 😢</p>
      <Link to="/">Return to the homepage</Link>
    </Styled>
  );
}
