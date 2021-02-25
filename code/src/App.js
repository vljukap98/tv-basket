import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from "./About";
import SignIn from "./SignIn";
import Register from "./Register";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/sign_in">
              <SignIn />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
