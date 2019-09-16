
const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')



const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;
// argv.direccion

// lugar.getLugarLatLang(argv.direccion).then(resp => {
//     console.log(resp);
// });

// let resl = clima.getClima(40.750000, -74.000000);
// resl.then(console.log)
//     .catch(console.log)

// salida
// El clima de XXX es de XXX
// No se pudo determinar el clima de XXX

let getInfo = async (direccion) => {



    let datoLugar = await lugar.getLugarLatLang(direccion);
    let datoClima = await clima.getClima(datoLugar.lat, datoLugar.lng);


    return {
        nomber: datoLugar.direccion,
        clima: datoClima

    }

}



getInfo(argv.direccion).then((result) => {
    //console.log(result);
    console.log(`El clima de ${result.nomber} es de ${result.clima} grados`);


}).catch((err) => {
    throw new Error(`No se pudo determinar el clima de ${result.nomber}`)
});
