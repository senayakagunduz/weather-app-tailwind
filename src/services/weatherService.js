import axios from "axios";

//const BASE_URL="https://api.openweathermap.org/data/2.5/weather?";
const BASE_URL="https://api.openweathermap.org/data/2.5/forecast?"
const API_KEY="8d77b32eb4f1c45e3eeef2366fa6af74";

const getWeatherData= async(cityName)=>{
 try {
  const {data}=await axios.get(BASE_URL + `q=${cityName}&appid=${API_KEY}&units=metric&lang=en`)
  return data;
 } catch (error) {
   throw error;
 }
}
 export default getWeatherData;


