import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Home from "./components/home/Home";
import Auth from "./components/auth/Auth";
import { createContext, useState } from "react";
import Destination from "./components/destination/Destination";
export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null)

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router >
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/auth">
            <Auth />
          </Route>

          <Route exact path={"/destination/" || "/destination/:mode"} >
            {loggedInUser ? <Destination /> : <Redirect to="/auth" />}
          </Route>

        </Switch>
      </Router >
    </UserContext.Provider>
  );
}

export default App;
