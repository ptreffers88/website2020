import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LOGO from "./assets/img/logo.svg";
import { Home } from "./pages/home/home";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";

function App() {
  return (
    <Router>
      <Header logo={LOGO} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
