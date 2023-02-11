import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar";
import MovieList from "./components/movieList";
import MovieForm from "./components/movieForm";
import Rentals from "./components/rentals";
import Customers from "./components/customers";
import NotFound from "./components/common/notFound";
import LoginForm from "./components/loginForm";
import RegisterForm from './components/registerForm';

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="content">
                    <Switch>
                        <Route path="/login" exact component={LoginForm} />
                        <Route path="/register" exact component={RegisterForm} />
                        <Route path="/movies/:_id" component={MovieForm} />
                        <Route path="/movies" exact component={MovieList} />
                        <Route path="/not-found" component={NotFound} />
                        <Route path="/customers" component={Customers} />
                        <Route path="/rentals" component={Rentals} />
                        <Redirect exact from="/" to="/login" />
                        <Redirect to="/not-found" />
                    </Switch>

                </div>
            </div>
        );
    }
}

export default App;
