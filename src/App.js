import React from "react";
import "./App.css";
import HomePage from "./Components/HomePage";
import { Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import NewPatient from "./Components/NewPatient";
import WhoIsOnDuty from "./Components/WhoIsOnDuty";
import Database from "./Components/Database";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Switch>
          <Route path="/" exact={true} component={HomePage} />
          <Route path="/NewPatient" component={NewPatient} />
          <Route path="/Duty" component={WhoIsOnDuty} />
          <Route path="/database" component={Database} />
        </Switch>
      </main>
    </div>
  );
}

export default App;

/* <NavBar />
      <Route path="/" component={HomePage} />
<Switch>
  <Route path="/discover/:searchtext?" component={DiscoverMoviesPage} />
  <Route path="/movielist/:imdbID" component={MoviePage} />
  <Route path="/about" component={AboutPage} />
  <Route path="/" component={HomePage} />
</Switch> */
