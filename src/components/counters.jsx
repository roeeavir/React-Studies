import React, { Component } from "react";
import "./counters.css";
import Counter from "./counter";

class Counters extends Component {

    constructor(props) {
        super();
    }

    render() {
        const { handleReset, handleYese, handleRemoveCounter, counters } = this.props;

        return (
            <div>
                <button onClick={handleReset}>Reset Counters</button>
                {counters.map(counter => <Counter
                    key={counter._id}
                    counter={counter}
                    handleRemoveCounter={handleRemoveCounter}
                    handleYese={handleYese}
                />)}
            </div>
        )
    }
}

export default Counters;