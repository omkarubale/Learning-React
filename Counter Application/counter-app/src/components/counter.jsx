import React, { Component } from "react";

class Counter extends Component {
    state = {
        value: this.props.value
    };

    handleIncrement = e => {
        this.setState({ value: this.state.value + 1 });
    };

    render() {
        return (
            <React.Fragment>
                <span className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button
                    onClick={() => {
                        this.handleIncrement(this.state.value);
                    }}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += this.state.value === 0 ? "badge-warning" : "badge-primary";
        return classes;
    }

    formatCount() {
        const { value: count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;
