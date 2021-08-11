import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/contacto">
            <Contact />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
