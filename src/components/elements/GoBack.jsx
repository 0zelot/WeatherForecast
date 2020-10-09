import React from "react";

import lang from "../../utils/getLanguage.js";

import config from "../../config.json";

const GoBack = (props) => {

    return (
        <p className="back"><a href={config.url}>{lang("click_here")}</a> {lang("go_back")}</p>
    );
}
  
export default GoBack;