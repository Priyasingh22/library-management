
import Home from "./Home";
import './App.css';
import Adminlogin from "./Adminlogin";
import Userlogin from "./Userlogin";
import Adminportal from "./Adminportal";
import Userportal from "./Userportal";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Addbook from "./Addbook";
import Booklist from "./Booklist";
function App() {


  return (
    <div className="App">
      <Router>

        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/adminlogin"><Adminlogin /></Route>
          <Route exact path="/userlogin"><Userlogin /></Route>
          <Route exact path="/adminportal"><Adminportal /></Route>
          <Route exact path="/userportal"><Userportal /></Route>
          <Route exact path="/Addbook"><Addbook /></Route>
          <Route exact path="/Booklist"><Booklist /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
