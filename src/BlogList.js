import { Link } from "react-router-dom";
import styled from "styled-components";

const Styled = styled.div`
  padding: 10px 16px;
  margin: 20px 0;
  border-bottom: 1px solid #fafafa;

  &:hover {
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  }
  h2 {
    font-size: 20px;
    color: var(--pink);
    margin-bottom: 8px;
  }
`;

export default function BlogList({ blogs, title, handleDelete }) {
  return (
    <div>
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Styled>
            <Link to={`/blogs/${blog.id}`} style={{ textDecoration: "none" }}>
              <h2>{blog.title}</h2>
              <p>Written by {blog.author}</p>
            </Link>
          </Styled>
        </div>
      ))}
    </div>
  );
}
