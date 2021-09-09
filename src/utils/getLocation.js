const locationOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};
  
const getLocation = async () => {
    const {geolocation} = navigator;
    if(!geolocation) return "not_supported";
    try {
        const result = await getPosition(locationOptions);
        return result.coords.latitude + "," + result.coords.longitude;
    } catch(err) {
        return "denied";
    }
}
  
const getPosition = (options) => {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
}

export default getLocation;