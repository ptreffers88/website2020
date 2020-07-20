import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/header/header";
import { Home } from "./pages/home/home";
import { Footer } from "./components/footer/footer";
import { ProjectSingle } from "./pages/project-single/project-single";
import { Projects } from "./components/projects/projects";

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
