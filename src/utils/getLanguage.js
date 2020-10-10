import language from "../config.json";

const lang = (msg) => {
    let message;
    const detected = navigator.languages;
    if(detected) {
        let l = detected[0];
        if(l.includes("-")) {
            l = l.split("-");
            l = l[0];
        }
        if(language.translates[l]) {
            message = language.translates[l][msg];
            if(!msg) {
                message = l;
            }
        } else {
            l = detected[1];
            if(language.translates[l]) {
                message = language.translates[l][msg];
                if(!msg) {
                    message = l;
                }
            } else {
                message = language.translates.en[msg];
                if(!msg) {
                    message = "default";
                }
            }
        }
    }
    return message;
}

export default lang;
