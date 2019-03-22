import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0,
        tags: ["tag1", "tag2", "tag3"]
    };

    handleIncrement = e => {
        console.log(e + 1);
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <React.Fragment>
                <span className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button
                    onClick={() => {
                        this.handleIncrement(this.state.count);
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
        classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;
