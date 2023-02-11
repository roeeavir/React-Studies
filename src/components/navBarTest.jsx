import React, { Component } from "react";

export default class NavBarTester extends Component {

    constructor(props) {
        super();

        this.state = {
            totalCounters: props.totalCounters
        }
    }

    render() {
        return (
            <nav>
                Shikse <span>{this.props.totalCounters}</span>
            </nav>
        );
    }
}