import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/home_page/Home";
import About from "./components/about_page/About";
import Project from "./components/project_page/Project";
import Contact from "./components/contact_page/Contact";
import Notfound from "./components/notfound_page/Notfound";

// css
import "./css/style.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Project} />
        <Route path="/contact" component={Contact} />
        <Route path="/404" component={Notfound} />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;
