/* eslint-disable */
import React from "react";
import NavBar from "./components/navBar.jsx";
import Users from "./components/users";
import { Route, Switch, Redirect } from "react-router-dom";
import UsersLayout from "./layouts/usersLayout.jsx";
import MainLayout from "./layouts/mainLayout";
import LoginLayout from "./layouts/loginLayout";

function App() {
    return (
        <>
            <NavBar />

            <Switch>
                <Route path={"/users/:id"} component={UsersLayout} />
                <Route path={"/users"} component={Users} />
                <Route path={"/login"} component={LoginLayout} />
                <Route exact path={"/"} component={MainLayout} />
            </Switch>
        </>
    );
}

export default App;
/* eslint-disable */
