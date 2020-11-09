import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Saved from "./containers/Saved/Saved";
import Search from "./containers/Search/Search";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Jumbotron />
      <Switch>
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
        <Route path="/" component={Search} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
