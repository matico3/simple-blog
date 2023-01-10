import BlogList from "./BlogList";
import useGet from "./useGet";

function Home() {
  const { data: blogs, isPending, error } = useGet("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading..</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
      {/* {blogs && (
        <BlogList
          blogs={blogs.filter((blog) => blog.author === "matic")}
          title="Matic's blogs!"
        />
      )} */}
    </div>
  );
}

export default Home;
