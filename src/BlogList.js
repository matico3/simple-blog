import { Link } from "react-router-dom";
import styled from "styled-components";

const Styled = styled.div``;

function BlogList({ blogs, title, handleDelete }) {
  return (
    <div className="home">
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

export default BlogList;
