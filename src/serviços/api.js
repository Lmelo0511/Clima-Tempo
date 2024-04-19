import axios from "axios"

//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=25ef575f9e153a5836e6ca22640a992d
//25ef575f9e153a5836e6ca22640a992d

const API = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=25ef575f9e153a5836e6ca22640a992d"
});

export default API;
