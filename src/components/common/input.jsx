import React from "react";

const Input = ({ name, label, isAutoFocus, error, extraContent, ...rest }) => {

    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                {...rest}
                name={name}
                autoFocus={isAutoFocus}
                className="form-control"
                id={name}
                placeholder={label} />
            <br />
            {error && <div className="alert alert-danger">{error}</div>}
            {extraContent}
        </div>
    )
}

export default Input;