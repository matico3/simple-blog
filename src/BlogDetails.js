import { useParams } from "react-router-dom";
import styled from "styled-components";
import useGet from "./useGet";
import { useHistory } from "react-router-dom";

const Styled = styled.div`
  padding: 0 0 50px;
  h2 {
    font-size: 20px;
    color: var(--pink);
    margin-bottom: 10px;
  }

  div {
    margin: 20px 0;
  }

  button {
    background-color: var(--pink);
    color: #fff;
    font-weight: bold;
    padding: 8px;
    width: 100px;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
      background-color: var(--grey);
    }
  }
  .right {
    float: right;
  }
  .left {
    float: left;
  }
`;

export default function BlogDetails() {
  const history = useHistory();
  const { id } = useParams();
  const { data: blog, isPending, error } = useGet(`http://localhost:8000/blogs/${id}`);
  const goBack = () => {
    history.push("/");
  };
  const deleteBlog = () => {
    fetch(`http://localhost:8000/blogs/${blog.id}`, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };
  return (
    <Styled>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
      <div className="container">
        <button onClick={goBack} className="left">
          Go back
        </button>
        <p></p>
        <button onClick={deleteBlog} className="right">
          Delete
        </button>
      </div>
    </Styled>
  );
}
