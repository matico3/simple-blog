import styled from "styled-components";
import useForm from "./useForm";
import usePost from "./usePost";
import { useHistory } from "react-router-dom";

const Styled = styled.div`
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  label {
    text-align: left;
    color: var(--darkGrey);
    display: block;
    margin: 15px 0;
  }
  h2 {
    font-size: 20px;
    color: var(--pink);
    margin-top: 20px;
    margin-bottom: 30px;
    padding: 10px;
    border: 2px solid black;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 6px 10px;
    margin: 10px 0;
    border: 3px solid var(--grey);
    box-sizing: border-box;
    display: block;
  }
  button {
    background-color: var(--pink);
    color: #fff;
    font-weight: bold;
    border: 2px solid var(--darkGrey);
    padding: 8px;
    margin: 15px 0;
    transition: background-color 0.3s;
    cursor: pointer;
    &:hover {
      background-color: var(--grey);
    }
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
