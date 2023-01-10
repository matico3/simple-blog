import Navbar from "./Navbar";
import Homepage from "./Homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateBlog from "./CreateBlog";
import BlogDetails from "./BlogDetails";
import GlobalStyles from "./GlobalStyles";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <>
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/create">
              <CreateBlog />
            </Route>
            <Route path="/blogs/:id">
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
