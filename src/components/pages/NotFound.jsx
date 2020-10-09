import React from "react";

import GoBack from "../elements/GoBack.jsx";

import lang from "../../utils/getLanguage.js";
 
const Error = () => {
    document.title = `${lang("error.notfound.title")} | ${lang("head.title")}`;

    return (
        <div className="information text-center">
            <h1>{lang("error.notfound.info")}</h1>
            <p className="information-description">
                {lang("error.notfound.desc")}<br />
                <GoBack />
            </p>
        </div>
    )
}
 
export default Error;