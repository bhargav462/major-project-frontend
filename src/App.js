// import './App.css';
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Toolbar from './components/Navigation/Toolbar/Toolbar'
import Home from './components/Home/Home'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import News from './components/News/news';
import Products from './components/products/products'

class Error extends React.Component {
  render() {
    return <div><h1>404 Error</h1></div>;
  }
}

function App() {

  return (
    <div className="App">
      <Router>
         <Toolbar />
         <Switch>
           <Route path="/" exact component={Home} />
           <Route path="/register" exact component={Register} />
           <Route path="/login" exact component={Login} />
           <Route path="/news" exact component={News} />
           <Route path="/products" exact component={Products} />
           <Route path="/error" exact component={Error} />
         </Switch>
      </Router>
    </div>
  );
}

export default App;
