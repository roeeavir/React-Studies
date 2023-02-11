import React, { Component } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navBarTest";

export default class App extends Component {

    constructor() {
        super();

        this.state = {
            counters: [
                { _id: 1, value: 0 },
                { _id: 2, value: 0 },
                { _id: 3, value: 0 },
                { _id: 4, value: 0 }
            ]
        };
    }

    handleRemoveCounter = id => {
        const counters = this.state.counters.filter(c => c._id !== id);
        this.setState({ counters })
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0
            return c;
        });
        this.setState({ counters })
    }

    handleYese = (counter, shese) => {
        const counters = this.state.counters;
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value += shese;
        this.setState({ counters });
    }

    render() {
        return (
            <React.Fragment>
                <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        handleReset={this.handleReset}
                        handleYese={this.handleYese}
                        handleRemoveCounter={this.handleRemoveCounter} />
                </main>
            </React.Fragment>
        );
    }
}