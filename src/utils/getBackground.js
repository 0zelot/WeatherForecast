import images from "../images.json";

const background = (skytext, temperature) => {
    let rawimages = {};
    let result;
    if(temperature && (skytext !== "GENERAL") && (skytext !== "FLAGS")) {
        for(const i in images) {
            if((i !== "GENERAL") && (i !== "FLAGS")) {
                rawimages[i] = ({path: require(`../assets/images/${i}.jpg`), author: images[i].author});
                if(temperature >= 50) {
                    result = rawimages["desert"];
                } else {
                    result = rawimages[skytext];
                }
            }
        }
    } else {
        for(const i in images.GENERAL) {
            rawimages[i] = ({path: require(`../assets/images/GENERAL/${i}.jpg`), author: images.GENERAL[i].author});
        }
        const random = Math.floor(Math.random() * (Object.keys(rawimages).length)) + 1;
        result = rawimages[random];
    }
    return result;
}

export default background;
