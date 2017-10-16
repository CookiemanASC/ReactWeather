var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=c8e6c321f81249af94ade72af3e84a2e&units=metric';


module.exports = {
    
    getTemp: function (location){

        var encodedLocation = encodeURIComponent(location);
        var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

       return  axios.get(requestURL).then(function(res){

            if(res.data.cod && res.data.message){
                throw new Error(res.data.message);
            }else{
                return res.data.main.temp;
            }

        }, 
        function(res){
            //throw new Error(res.data.message);
            throw new Error('Unable to fetch weather for that location.');
        });
        
    }

}