import styled from "styled-components";
import useForm from "./useForm";
import usePost from "./usePost";

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
`;

export default function Create() {
  const {
    form: blog,
    handleChange,
    clearForm,
  } = useForm({
    title: "",
    body: "",
    author: "Matic",
  });

  const { isSuccess, isPending, fetchPost, error } = usePost();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPost("http://localhost:8000/blogs", blog, clearForm);
  };

  return (
    <Styled>
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
          {isSuccess && <div style={{ margin: "20px" }}>New blog added!</div>}
        </form>
      )}
    </Styled>
  );
}
