import Navbar from "./Navbar";
import Homepage from "./Homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateBlog from "./CreateBlog";
import BlogDetails from "./BlogDetails";
import GlobalStyles from "./GlobalStyles";
import NotFound from "./NotFound";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <GlobalStyles />
      <>
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/create">
              <CreateBlog />
            </Route>
            <Route exact path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default App;
