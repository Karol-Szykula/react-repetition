import React from 'react';

import {Header} from "./components/Header";
import {Home} from "./components/Home";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            homeLink: "Home",
            homeMounted: true
        };
    }

    onChangeLink = (newName) => {
        this.setState({
            homeLink: newName
        })
    };

    onGreet() {
        alert("Hello!");
    };

    onChangeHomeMounted = () => {
        this.setState({
            homeMounted: !this.state.homeMounted
        })
    }

    render() {

        let homeComponent = '';
        if (this.state.homeMounted) {
            homeComponent = (
                <Home
                    onChangeLink={this.onChangeLink}
                    initialLink={this.state.homeLink}
                    name={"Max"}
                    age={27} greet={this.onGreet}
                />
            );
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        {homeComponent}
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <button onClick={this.onChangeHomeMounted} className={"btn btn-primary"}>(Un)Mount home
                            component
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
