import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class LoginForm extends Form {

    constructor(props) {
        super(props);

        this.state = {
            data: {
                userName: "",
                password: ""
            },
            errors: {}
        }

        this.schema = {
            userName: Joi.string().required().label("User Name"),
            password: Joi.string().required().label("Password"),
        }
    }

    doSubmit = () => {
        // Call server
        console.log("Submitted");
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.onSubmit}>
                    {this.renderInput("userName", "User Name", "text", <small>We'll never share your User Name with anyone else.</small>)}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderSumbitButton("Login")}
                </form>
            </div>
        )
    }

}

export default LoginForm;