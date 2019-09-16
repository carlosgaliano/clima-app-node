const axios = require('axios');




const getLugarLatLang = async (dir) => {
    const encodeURL = encodeURI(dir);
    //console.log(encodeURL);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        headers: { 'x-rapidapi-key': '2d9563a8a6msh37fb292656f9bc9p184f18jsnbd2edb81a64f' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0){
        throw new Error(`No hay resultados para ${dir}`)
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    // .then(resp => {
    //     console.log(resp.data.Results[0]);
    // }).catch(err => {
    //     throw new Error('No se conecto a la base de datos');
    // });

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLang
}
