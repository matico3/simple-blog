import { useParams } from "react-router-dom";
import styled from "styled-components";
import useGet from "./useGet";

const Styled = styled.div`
  h2 {
    font-size: 20px;
    color: var(--pink);
    margin-bottom: 10px;
  }

  div {
    margin: 20px 0;
  }

  button {
    background: var(--pink);
    color: #fff;
    border: 0;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
  }
`;
export default function BlogDetails() {
  const { id } = useParams();
  const { data: blog, isPending, error } = useGet(`http://localhost:8000/blogs/${id}`);
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
    </Styled>
  );
}
