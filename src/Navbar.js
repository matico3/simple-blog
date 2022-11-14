function Navbar() {
  return (
    <nav className="navbar">
      <h1>Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a
          href="/create"
          style={{
            color: "white",
            backgroundColor: "grey",
          }}>
          New Blog
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
