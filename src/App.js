import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
 
import Index from "./components/Index.jsx";
import Footer from "./components/elements/Footer.jsx";
import Error from "./components/pages/404.jsx";
import Country from "./components/elements/Country.jsx";

class App extends Component {

    render() {
        return (
            // <BrowserRouter basename="/location">
            <BrowserRouter>
                <div>
                    <Country />
                    <Switch>
                        <Route path="/" component={Index} exact />
                        <Route component={Error}/>
                    </Switch>
                    <Footer />
                </div> 
            </BrowserRouter>
        );
    }
}
 
export default App;