import React from "react";

import background from "../utils/getBackground.js";

import Form from "./Form.jsx";
import Result from "./Result.jsx";

const urlParams = new URLSearchParams(window.location.search);

const staticbackground = background("GENERAL");

class Index extends React.Component {

    render() {
        if(urlParams.has("query") === true) {
            return (<Result />);
        } else {
            return(<Form />);
        }
    }
}

export default Index;
export {staticbackground};
