import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class RegisterForm extends Form {

    constructor(props) {
        super(props);

        this.state = {
            data: {
                email: "",
                password: "",
                name: ""
            },
            errors: {}
        }

        this.schema = {
            email: Joi.string().required().email().label("Email"),
            password: Joi.string().required().min(5).label("Password"),
            name: Joi.string().required().label("Name"),
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
                    {this.renderInput("email", "Email", "email", <small id="emailHelp" className="form - text text - muted">We'll never share your Email with anyone else.</small>)}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderInput("name", "Name")}
                    {this.renderSumbitButton("Register")}
                </form>
            </div>
        )
    }

}

export default RegisterForm;