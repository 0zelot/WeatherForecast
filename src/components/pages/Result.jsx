import React from "react";

import Loader from "../elements/Loader.jsx";
import Error from "./Error.jsx";
import NotFound from "./NotFound.jsx";
import ForecastCard from "../elements/ForecastCard.jsx";
import GoBack from "../elements/GoBack.jsx";
import {staticbackground} from "../Index.jsx";

import getLocation from "../../utils/getLocation.js";
import getWeather from "../../utils/getWeather.js";
import background from "../../utils/getBackground.js";
import lang from "../../utils/getLanguage.js";

const query = new URLSearchParams(window.location.search).get("q");


class Result extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            current: null,
            forecast: null,
            error: null
        }
    }

    async componentDidMount() {
        try {
            if(query === "0") {
                await getLocation().then(async loc => {
                    if(loc === "denied" || loc === "not_supported") {
                        this.setState({error: true});
                    } else {
                        await getWeather(loc).then(async response => {
                            const result = JSON.parse(response);
                            const current = result.weatherdata.weather.current._attributes;
                            const forecast = result.weatherdata.weather.forecast;
                            this.setState({current, forecast});
                            document.title = `${current.observationpoint} | ${lang("head.title")}`;
                        });
                    }
                });
            } else {
                await getWeather(query).then(async response => {
                    const result = JSON.parse(response);
                    const current = result.weatherdata.weather[0].current._attributes;
                    const forecast = result.weatherdata.weather[0].forecast;
                    this.setState({current, forecast});
                    document.title = `${current.observationpoint} | ${lang("head.title")}`;
                });
            }
        } catch {
            this.setState({error: "unknown"});
        }
    }

    render() {
        try {
            if(this.state.error === true) {
                return(
                    <main style={{backgroundImage: `url(${staticbackground.path})`, backgroundSize: "cover"}}>
                        <Error />
                        <p className="author">{lang("photo.author").replace("{0}", staticbackground.author)} <a href='https://www.pexels.com/'>Pexels</a>.</p>
                    </main>
                );
            } else if(this.state.error === "unknown") {
                return(
                    <main style={{backgroundImage: `url(${staticbackground.path})`, backgroundSize: "cover"}}>
                        <NotFound />
                        <p className="author">{lang("photo.author").replace("{0}", staticbackground.author)} <a href='https://www.pexels.com/'>Pexels</a>.</p>
                    </main>
                );
            } else {
                if(this.state.current && this.state.forecast) {
                    const current = this.state.current;
                    const forecast = this.state.forecast;
                    const temperature = current.temperature < 1 ? "icily" : (current.temperature > 24 ? "hot" : "normal");
                    const thisbackground = background(current.skytext.toLowerCase().split(" ").join("_"), current.temperature);

                    return(
                        <main style={{backgroundImage: `url(${thisbackground.path})`, backgroundSize: "cover"}}>
                            <div className="content text-center">
                                <p className="general">{current.observationpoint}</p>
                                <section className="current">
                                    <div className="darkness">
                                        <div className="row">
                                            <div className="col">
                                                <span id={temperature} className="temperature">{current.temperature}°C</span>
                                            </div>
                                            <div className="col">
                                                <span className="skytext">{lang("result.skytext." + current.skytext.toLowerCase().split(" ").join("_"))}</span><br />
                                                <span>
                                                    {lang("result.windspeed")}: <span className="information">{current.windspeed}</span><br />
                                                    {lang("result.humidity")}: <span className="information">{current.humidity}%</span><br />
                                                    {lang("result.feelslike")}: <span className="information">{current.feelslike}°C</span><br />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section>
                                    <div className="row d-flex justify-content-center">
                                        <ForecastCard id={forecast[1]} />
                                        <ForecastCard id={forecast[2]} />
                                        <ForecastCard id={forecast[3]} />
                                        <ForecastCard id={forecast[4]} />
                                    </div>
                                </section>
                                <div className="darkness text-center">
                                    <GoBack />
                                </div>
                                <p className="author" style={{position: "relative", marginTop: "30px"}}>{lang("photo.author").replace("{0}", thisbackground.author)} <a href='https://www.pexels.com/'>Pexels</a>.</p>
                            </div>
                        </main>
                    );
                } else {
                    return(
                        <main style={{backgroundImage: `url(${staticbackground.path})`, backgroundSize: "cover"}}>
                            <Loader />
                            <p className="author">{lang("photo.author").replace("{0}", staticbackground.author)} <a href='https://www.pexels.com/'>Pexels</a>.</p>
                        </main>
                    );
                }
            }
        } catch(err) {
            return(
                <main style={{backgroundImage: `url(${staticbackground.path})`, backgroundSize: "cover"}}>
                    <NotFound />
                    <p className="author">{lang("photo.author").replace("{0}", background.author)} <a href='https://www.pexels.com/'>Pexels</a>.</p>
                </main>
            );
        }
    }
}

export default Result;
