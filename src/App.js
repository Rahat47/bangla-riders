import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./components/home/Home";

function App() {
  return (
    <Router >
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
