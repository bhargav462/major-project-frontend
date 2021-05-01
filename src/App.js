import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Toolbar from './components/Navigation/Toolbar/Toolbar'
import Home from './components/Home/Home'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import News from './components/News/news';
import Products from './components/products/products'
import Profile from './components/Profile/Profile'
import history from './utilities/history/history'
import Cookies from 'js-cookie'
import ProductDetails from './components/products/productsDetails/ProductDetails'
import addCrop from './components/farmers/addCrop/addCrop'
import updateCrop from './components/farmers/updateCrop/updateCrop'

export const AuthContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  user: null
}

const reducer = (state,action) => {
  console.log("localStorage",Cookies.get("token"))
  console.log("storage",state)
  switch(action.type){
    case "LOGIN":
       localStorage.setItem("user",JSON.stringify(action.payload.user))
       return {
         ...state,
         isAuthenticated: true,
         user: action.payload.user
       };
    case "LOGOUT":
      localStorage.clear();
      return{
        ...state,
        isAuthenticated: false,
        user: null
      }
    default:
      return{
        ...state,
        isAuthenticated: Cookies.get('token') === undefined ? false : true,
        user: localStorage.getItem('user')
      };
  }
}

class Error extends React.Component {
  render() {
    return <div><h1>404 Error</h1></div>;
  }
}

function App() {
  const [state,dispatch] = React.useReducer(reducer,initialState);

  return (
    <AuthContext.Provider value={{state,dispatch}}>
      <div className="App">
        <Router history={history}>
          <Toolbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
            <Route path="/news" exact component={News} />
            <Route path="/products" exact component={Products} />
            <Route path="/error" exact component={Error} />
            <Route path="/farmer/addCrop" exact component={addCrop} />
            <Route path="/farmer/updateCrop" exact component={updateCrop} />
            <Route path="/farmer/deleteCrop" exact component={updateCrop} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/land/:id" exact component={ProductDetails} />
            <Route path="/logout" render={() => {
                localStorage.clear();
                Cookies.remove("token");
                dispatch({});
                console.log("loggeg out")
                return <Redirect to={{pathname: "/"}} />
            }} />
            <Route render={() => <Redirect to={{pathname: "/"}} />} />
          </Switch>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
