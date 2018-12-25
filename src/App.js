import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import HomePage from "./screens/HomePage";
import ProjectsPage from "./screens/ProjectsPage";
import ContactPage from "./screens/ContactPage";
import ResumePage from "./screens/ResumePage";
import AboutPage from "./screens/AboutPage";
import theme from "./theme.js";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/projects" component={ProjectsPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/resume" component={ResumePage} />
            <Route exact path="/about" component={AboutPage} />
          </Switch>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
