import React from "react";
import ReactTooltip from 'react-tooltip';

import lang from "../utils/getLanguage.js";


const Country = (props) => {
    let flag = lang();
    let title = lang("country.img.title");
    if((flag === "default") || (flag === "en")) {
        flag = "gb";
        title = lang("country.img.title.default");
    }

    return (
        <aside>
            <ReactTooltip />
            <img src={`https://www.countryflags.io/${flag}/flat/32.png`} alt="Flag" data-tip={title} />
        </aside>
    );
}
  
export default Country;