import axios from "axios"

//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

const API = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/weather?"
});

export default API;