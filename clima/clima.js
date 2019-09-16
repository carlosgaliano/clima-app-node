const axios = require('axios');

const getClima = async (lat, lng) => {
    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=4d4f09d37747bbb10e3f3ac4ba87e89f&units=metric`);
    //console.log(respuesta.data.main);
    return respuesta.data.main.temp;
    
}

module.exports = {
    getClima
}