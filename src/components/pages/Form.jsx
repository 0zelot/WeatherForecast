import React from "react";

import {staticbackground} from "../Index.jsx";

import lang from "../../utils/getLanguage.js";

const Form = () => {
    document.title = `${lang("head.title")}`;

    return (
        <main style={{backgroundImage: `url(${staticbackground.path})`, backgroundSize: "cover"}}>
            <div className="information text-center">
                <h1>{lang("form.search")}</h1>
                <div className="mt-5 text-center">
                    <form action="" method="get">
                        <label htmlFor="query">{lang("form.city")}</label>
                        <input className="form-control place" type="text" name="q" id="q" placeholder={lang("form.placeholder")} required></input><br />
                        <button type="sumbit" className="btn btn-info">{lang("form.button.search")}</button>
                    </form>
                    <br />
                    <form action="" method="get">
                        <input type="text" name="q" id="q" value="0" readOnly hidden></input>
                        <button type="sumbit" className="btn btn-info">{lang("form.button.geo")}</button>
                    </form>
                </div>
            </div>
            <p className="author">{lang("photo.author").replace("{0}", staticbackground.author)} <a href='https://www.pexels.com/'>Pexels</a>.</p>
        </main>
    );
}

export default Form;