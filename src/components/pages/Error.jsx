import React from "react";

import GoBack from "../elements/GoBack.jsx";

import lang from "../../utils/getLanguage.js";

const Error = () => {
    document.title = `${lang("error.geolocalization.title")} | ${lang("head.title")}`;

    return (
        <div className="information text-center">
            <h1>{lang("error.geolocalization.info")}</h1>
            <p className="information-description">
                {lang("error.geolocalization.desc")}<br />
                <GoBack />
            </p>
        </div>
    );
}
 
export default Error;