import "./App.css";

function App() {
  const title = "Welcome to the new blog";

  const person = { name: "yoshi", age: 50 };

  const link = "https://www.google.si/?gws_rd=ssl";
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>{person.name}</p>
        <p>{Math.random() * 20}</p>

        <a href={link}>GOOGLE</a>
      </div>
    </div>
  );
}

export default App;
