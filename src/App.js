import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import Welcome from './Pages/Welcome';

function App() {
 
  return (
    <Router>
      <Switch>
      <Route exact path="/">
            <Home />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
