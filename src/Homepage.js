import { useState } from "react";
import BlogList from "./BlogList";
import Filter from "./Filter";
import useGet from "./useGet";

function Home() {
  const [filterSettings, setFilterSettings] = useState({
    type: "author",
    search: "",
  });

  const { data: blogs, isPending, error } = useGet("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      <Filter filterSettings={filterSettings} setFilterSettings={setFilterSettings} />
      {blogs && (
        <BlogList
          blogs={blogs.filter((blog) =>
            blog[filterSettings.type]
              .toLowerCase()
              .includes(filterSettings.search.toLowerCase())
          )}
          title={
            filterSettings.search === ""
              ? "All blogs"
              : `Filtering by ${filterSettings.type}`
          }
        />
      )}
    </div>
  );
}

export default Home;
