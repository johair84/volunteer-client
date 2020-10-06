import React, { createContext, useState } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Component/Login/Login';
import Book from './Component/Book/Book';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Registration from './Component/Registration/Registration';


export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
   
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <p>Name: {loggedInUser.name}</p>
      <Router>
      <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/registration">
            <Registration></Registration>
          </PrivateRoute>
          <PrivateRoute path="/book/:activitesName">
            <Book></Book>
          </PrivateRoute>
          <Route exact path="/">
              <Home></Home>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
         
       

  
  );
}

export default App;
