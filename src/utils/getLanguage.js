import language from "../config.json";

const lang = (msg) => {
    let message;
    const detected = navigator.languages;
    if(!detected) return;
    let l = detected[0];
    if(l.includes("-")) l = l.split("-")[0];
    
    if(language.translates[l]) {
        message = language.translates[l][msg];
        if(!msg) message = l;

        l = detected[1];
        if(language.translates[l]) {
            message = language.translates[l][msg];
            if(!msg) message = l;

            message = language.translates.en[msg];
            if(!msg) message = "default";
        }
    }
    return message;
}

export default lang;
