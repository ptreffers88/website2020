import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "./components/header/header";
import { Home } from "./pages/home/home";
import { Projects } from "./components/projects/projects";
import { ProjectSingle } from "./pages/project-single/project-single";
import { Footer } from "./components/footer/footer";

const App = (): JSX.Element => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projects/">
          <Projects />
        </Route>
        <Route exact path="/projects/:name">
          <ProjectSingle />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
