const argv = require("./config/yargs").argv;
const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");

const getInfo = async(direccion) => {
    try {
        const coordenadas = await lugar.getLugarLatLng(direccion);
        const temperatura = await clima.getClima(coordenadas.lat, coordenadas.lon);
        return `La temperatura de ${direccion} es de ${temperatura} ºC`;

    } catch (error) {
        return `Ha ocurrido un error al tratar de obtener el clima de ${argv.direccion}`;
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);