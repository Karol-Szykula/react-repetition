import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {

    state = {
        age: this.props.age
    };


    onMakeMeOlder = () => {
        this.setState({age: this.state.age += 3})
    };

    render() {
        return (
            <div>
                <p>In a new Component!</p>
                <p>Your name: {this.props.name}</p>
                <p>Your age: {this.state.age}</p>
                <hr/>
                <button onClick={this.onMakeMeOlder} className={"btn btn-primary"}>Make me older!</button>
            </div>
        );
    }
}

Home.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
}