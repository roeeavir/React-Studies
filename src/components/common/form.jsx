import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Selector from "./selector";



class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {},
            errors: {}
        }
    }

    validate = () => {
        const options = { abortEarly: false };
        const { error } = Joi.validate(this.state.data, this.schema, options);

        if (!error) return null;

        const errors = {};
        error.details.forEach(e => errors[e.path[0]] = e.message)

        return Object.keys(errors).length === 0 ? null : errors;
    }

    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] }
        const { error } = Joi.validate(obj, schema);

        return error ? error.details[0].message : null;

    }

    onSubmit = e => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({ errors: errors || {} })
        if (errors) return;

        this.doSubmit();
    }

    handleChange = ({ currentTarget }) => {
        const errors = { ...this.state.errors };
        const error = this.validateProperty(currentTarget);
        if (error) errors[currentTarget.name] = error;
        else delete errors[currentTarget.name];

        const data = { ...this.state.data };
        data[currentTarget.name] = currentTarget.value;
        this.setState({ data, errors });
    }

    renderSumbitButton = (label) => {
        return <button type="submit" disabled={this.validate()} className="btn btn-primary">
            {label}
        </button>
    }

    renderInput = (name, label, type = "text", extraContent) => {
        const { data, errors } = this.state;

        return <Input
            value={data[name]}
            label={label}
            name={name}
            type={type}
            isAutoFocus={true}
            error={errors[name]}
            onChange={this.handleChange}
            extraContent={extraContent}
        />
    }

    renderSelector = (name, label, options) => {
        const { data, errors } = this.state;

        return <Selector
            name={name}
            label={label}
            options={options}
            value={data[name]}
            error={errors[name]}
            onChange={this.handleChange}
        />
    }

}

export default Form;