import styled from "styled-components";
import useForm from "./useForm";
import usePost from "./usePost";
import { useHistory } from "react-router-dom";
import useGet from "./useGet";

const Styled = styled.div`
  max-width: 400px;
  margin: 0 auto;
  text-align: center;

  label {
    text-align: left;
    display: block;
  }
  h2 {
    font-size: 20px;
    color: var(--pink);
    margin-bottom: 30px;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 6px 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    box-sizing: border-box;
    display: block;
  }
  button {
    background: var(--pink);
    color: #fff;
    border: 0;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
  }
  p {
    margin: 10px;
  }
  .success {
    display: grid;
    grid-template-columns: 1fr 0.5fr 1fr;
  }
`;

export default function Create() {
  const history = useHistory();

  const {
    form: blog,
    handleChange,
    clearForm,
  } = useForm({
    title: "",
    body: "",
    author: "Matic",
  });

  const { isSuccess, isPending, fetchPost, error, blogId } = usePost();
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPost("http://localhost:8000/blogs", blog, clearForm);
  };

  const toTheBlog = () => {
    history.push(`/blogs/${blogId}`);
  };

  const addANewOne = () => {
    window.location.reload();
  };

  return (
    <Styled>
      {!isSuccess && (
        <>
          <h2>Add a New Blog</h2>
          {isPending && <div>Loading...</div>}
          {error && <div>{error}</div>}
          {!isPending && (
            <form onSubmit={handleSubmit}>
              <label>Blog Title:</label>
              <input
                type="text"
                name={"title"}
                required
                value={blog.title}
                onChange={handleChange}
              />
              <label>Blog Body:</label>
              <textarea
                value={blog.body}
                name="body"
                onChange={handleChange}
                required></textarea>
              <label>Blog Author:</label>
              <select value={blog.author} name="author" onChange={handleChange}>
                <option value="Matic">Matic</option>
                <option value="ChatGPT">ChatGPT</option>
              </select>

              <button type="submit" disabled={isPending}>
                Add Blog
              </button>
            </form>
          )}
        </>
      )}
      {isSuccess && <div style={{ margin: "20px" }}>New blog added!</div>}
      {isSuccess && (
        <div className="success">
          <button onClick={toTheBlog} disabled={isPending}>
            Go To the Blog
          </button>
          <p>or</p>
          <button onClick={addANewOne} disabled={isPending}>
            Add a New One
          </button>
        </div>
      )}
    </Styled>
  );
}
