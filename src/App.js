import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./components/home/Home";
import Auth from "./components/auth/Auth";
import { createContext, useState } from "react";
export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState(JSON.parse(localStorage.getItem("profile")))

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
        </Switch>
      </Router >
    </UserContext.Provider>
  );
}

export default App;
