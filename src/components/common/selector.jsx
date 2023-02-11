import React from "react";
// import Select from 'react-select'

const Selector = ({ name, label, options, ...rest }) => {

    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select
                {...rest}
                name={name}
            >
                <option value="" />
                {options.map(option => <option key={option.value} value={option.value}>
                    {option.label}
                </option>)}
            </select>
            <br />
        </div>
    )
}

export default Selector;