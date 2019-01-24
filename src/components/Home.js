import React from "react";

export class Home extends React.Component {

    state = {
        age: this.props.age,
        homeLink: "Link",
        inputValue: ''
    };


    onMakeMeOlder = () => {
        let age = this.state.age + 3;
        this.setState({age: age});
    };

    onChangeName = () => {
        this.props.onChangeLink(this.state.inputValue);
    };

    onHandleChange = (event) => {
        this.setState({inputValue: event.target.value})
    };

    render() {
        return (
            <div>
                <p>In a new Component!</p>
                <p>Your name: {this.props.name}</p>
                <p>Your age: {this.state.age}</p>
                <hr/>
                <button onClick={this.onMakeMeOlder} className={"btn btn-primary"}>Make me older!</button>
                <hr/>
                <button onClick={this.props.greet} className={"btn btn-primary"}>On Greet</button>
                <hr/>
                <input
                    type={"text"}
                    value={this.state.inputValue}
                    onChange={(event) => this.onHandleChange(event)}
                />
                <button onClick={this.onChangeName} className={"btn btn-primary"}>On Change Link</button>
            </div>
        );
    }
}