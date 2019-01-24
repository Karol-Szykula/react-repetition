import React from "react";

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age,
            homeLink: "Link",
            inputValue: ''
        };
        console.log('constructor')
    };


    componentWillMount() {
        console.log("Component will mount");
    };

    componentDidMount() {
        console.log("did mount");
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log("Receive props: ", nextProps);
    };

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("Should component update: ", nextProps, nextState);
        return true;
    };

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log("will update: ", nextProps, nextState);
    };

    componentDidUpdate(prevProps, prevState) {
        console.log("did update: ", prevProps, prevState);
    };

    componentWillUnmount() {
        console.log("component will unmount");
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