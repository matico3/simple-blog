import { useState } from "react";
import BlogList from "./BlogList";
import FilterByAuthor from "./useFilter";
import useGet from "./useGet";

function Home() {
  const [filterSettings, setFilterSettings] = useState({
    type: "author",
    search: "matic",
  });

  const { data: blogs, isPending, error } = useGet("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      <FilterByAuthor
        filterSettings={filterSettings}
        setFilterSettings={setFilterSettings}></FilterByAuthor>
      {blogs && (
        <BlogList
          blogs={blogs.filter((blog) =>
            blog[filterSettings.type]
              .toLowerCase()
              .includes(filterSettings.search.toLowerCase())
          )}
          title={filterSettings.search === "" ? "All blogs" : "Matic"}
        />
      )}
    </div>
  );
}

export default Home;
