import React, { Component } from "react";
import "./counter.css";

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: this.props.counter.value
        };
    }

    render() {
        const { counter, handleYese, handleRemoveCounter } = this.props;
        return (
            <React.Fragment>
                <h1>Sevel {counter._id}</h1>
                <span>Yagon {counter.value}</span>
                <button className="inc-button" onClick={() => handleYese(counter, 1)}>Yese</button>
                <button className="dec-button" disabled={counter.value <= 0} onClick={() => handleYese(this.props.counter, -1)}>Shese</button>
                <button className="del-button" onClick={() => handleRemoveCounter(counter._id)}>PimPamPom</button>
            </React.Fragment >
        )
    }
}

export default Counter;