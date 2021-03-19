import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./components/home/Home";
import Auth from "./components/auth/Auth";

function App() {
  return (
    <Router >
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/auth">
          <Auth />
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
