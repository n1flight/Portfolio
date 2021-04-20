import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

// import pages
import About from "./pages/about"
import Portfolio from "./pages/portfolio"
import Contact from "./pages/contact"

// import components
import Nav from "./components/nav"

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
