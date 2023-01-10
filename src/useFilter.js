import { useState } from "react";
import styled from "styled-components";

const Styled = styled.div`
  button {
    display: flex;
    justify-content: flex-end;
  }
  form {
    display: flex;
    justify-content: flex-end;
  }
`;

export default function useFilter({ filterSettings, setFilterSettings }) {
  function handleChange(e) {
    setFilterSettings({ ...filterSettings, [e.target.name]: e.target.value });
  }
  return (
    <Styled>
      <form>
        <select name="type" value={filterSettings.type} onChange={handleChange}>
          <option value="title">Title</option>
          <option value="author">Author</option>
        </select>
        <input
          type="text"
          name="search"
          value={filterSettings.search}
          onChange={handleChange}
        />
      </form>
    </Styled>
  );
}
