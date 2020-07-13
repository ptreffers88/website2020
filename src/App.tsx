import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/header/header";
import { Home } from "./pages/home/home";
import { Footer } from "./components/footer/footer";
import { PortfolioSingle } from "./pages/portfolio-single/portfolio-single";

const App = (): JSX.Element => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/portfolio/:id">
          <PortfolioSingle />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
