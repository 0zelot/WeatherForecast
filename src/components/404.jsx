import React from "react";

import {staticbackground} from "./Index.jsx";

import background from "../utils/getBackground.js";
import lang from "../utils/getLanguage.js";

const Error = () => {
    document.title = `404 | ${lang("head.title")}`;

    return (
        <main style={{backgroundImage: `url(${background("GENERAL").path})`, backgroundSize: "cover",}}>
            <div className="information text-center">
                <h1>{lang("error.404.info")}</h1>
                <p class="information-description">
                    {lang("error.404.desc")}<br />
                    <a href="/">{lang("click_here")}</a> {lang("go_back")}
                </p>
            </div>
            <p className="author">{lang("photo.author").replace("{0}", staticbackground.author)} <a href='https://www.pexels.com/'>Pexels</a>.</p>
        </main>
    );
}

export default Error;