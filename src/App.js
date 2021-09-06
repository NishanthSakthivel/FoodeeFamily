import React from "react";
import Card from "./UI/Card";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./UI/Card.css";
import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import contact from "./components/contact";

function App() {
  return (
    <React.Fragment>
      <Router>
        <div className="app_container text-center">
          <div className="text-center">
            <NavBar />
          </div>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/FoodeeFamily" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={contact} />
          </div>
          <Footer />
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
