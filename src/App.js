import React from 'react';

import {Header} from "./components/Header";
import {Home} from "./components/Home";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            homeLink: "Home"
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

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home
                            onChangeLink={this.onChangeLink}
                            initialLink={this.state.homeLink}
                            name={"Max"}
                            age={27} greet={this.onGreet}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
