import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Toolbar from './components/Navigation/Toolbar/Toolbar'
import Home from './components/Home/Home'
import Register from './components/Register/Register'
import Login from './components/Login/Login'

function App() {
  return (
    <div className="App">
      <Router>
         <Toolbar />
         <Switch>
           <Route path="/" exact component={Home} />
           <Route path="/register" exact component={Register} />
           <Route path="/login" exact component={Login} />
         </Switch>
      </Router>
    </div>
  );
}

export default App;
