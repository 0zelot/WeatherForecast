import convert from "xml-js";

const getWeather = async (query) => {
    let result;
    await fetch(`http://weather.service.msn.com/find.aspx?src=outlook&weadegreetype=C&culture=en_US&weasearchstr=${query.toString()}`).then(async response => response.text()).then(async body => {
        if(body) {
            try {
                result = convert.xml2json(body, {compact: true, spaces: 2});
            } catch(err) {
                result = '{"error":"Failed to convert data."}';
            }
        } else {
            result = '{"error":"Body is empty."}';
        }
    }).catch(err => {
        result = '{"error":"Failed to fetch."}';
    });
    return result;
}

export default getWeather;