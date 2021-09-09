import convert from "xml-js";

const getWeather = async (query) => {
    const data = await fetch(`https://weather.service.msn.com/find.aspx?src=outlook&weadegreetype=C&culture=en_US&weasearchstr=${query.toString()}`);
    const body = await data.text();
    if(!body) return {error: "Body is empty."};
    try {
        return convert.xml2json(body, {compact: true, spaces: 2});
    } catch(err) {
        return {error: "Failed to convert data."};
    }
}

export default getWeather;