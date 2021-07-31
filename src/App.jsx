import "./styles.css";
import { Route, Switch, Link } from "react-router-dom";
import { About } from "./Components/About";
import { Home } from "./Components/Home";
import { Login } from "./Components/Login";
import { Contact } from "./Components/Contact";
import { Services } from "./Components/Services";
import { Navbar } from "./Components/Navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/about-us">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/contact/others">Other contact pages</Route>
        <Route path="/Users"></Route>
        {/* <Route path="/User/:id">
          <UserDetails />
        </Route> */}
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}
