import React from "react";
import {Route} from "react-router";
import {BrowserRouter} from 'react-router-dom'

import {Root} from "./components/Root";
import {Home} from "./components/Home";
import {User} from "./components/User";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path={"/"} component={Root}>
                        <Route path={"user/:id"} component={User}/>
                        <Route path={"home"} component={Home}/>
                    </Route>
                    <Route path={"home-single"} component={Home}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App

