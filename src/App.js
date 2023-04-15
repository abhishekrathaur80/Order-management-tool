import React from "react";
import LoginPage from "./LoginPage";
import OrderPage from "./OrderPage";
import { Switch, Link, Route } from "react-router-dom";
import "./App.module.css";

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>
        <Route path="/orders" exact>
          <OrderPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
