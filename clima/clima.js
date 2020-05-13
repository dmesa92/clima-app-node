const axios = require('axios');

const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=2d7e5e83dbde71c3c2c0d4ff9e348619`);
    const temperatura = resp.data.main.temp;
    return temperatura;
}

module.exports = {
    getClima
}