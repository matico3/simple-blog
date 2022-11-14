import { useState } from "react";
import BlogList from "./BlogList";

const defaultBlogs = [
  {
    title: "Moj novi blog",
    body: "lorem ipsum",
    author: "matic",
    id: 1,
  },
  {
    title: "Svet je lep",
    body: "lorem ipsum lorem ipsum",
    author: "yoshi",
    id: 2,
  },
  {
    title: "Tehnologija gre dalje",
    body: "lorem ipsum lorem ipsum lorem ipsum",
    author: "matic",
    id: 3,
  },
];

function Home() {
  const [blogs, setBlogs] = useState(defaultBlogs);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      <BlogList
        blogs={blogs}
        title="All blogs!"
        handleDelete={handleDelete}
      />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "matic")}
        title="Matic's blogs!"
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default Home;
