import { useEffect, useState } from "react";
import Inputs from "./components/Inputs";
import TopBottons from "./components/TopBottons";
import TimeAndLocation from "./components/TimeAndLocation";
import TempratureAndDetails from "./components/TempratureAndDetails";
import Forecast from "./components/Forecast";
import getWeatherData from "./services/weatherService";


function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  const getData=async()=>{
    try {
      setLoading(true);
      const data=await getWeatherData(city);
      setWeatherData(data);
      setLoading(false);
      setFiveDays();
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(()=>{
    getData();   
  },[])

  function getWeekDays(locale) {
    var baseDate = new Date();
    var weekDays = [];
    for (let i = 0; i < 7; i++) {
      weekDays.push(baseDate.toLocaleDateString(locale, { weekday: "long" }));
      baseDate.setDate(baseDate.getDate() + 1);
    }
    return weekDays;
  }

  function setFiveDays(){
    setList([]);
    var weekDays = getWeekDays("en-US");
  
    for (let i = 1; i <= 6; i++) {
      let obj = {};
      obj.day = weekDays[i];
      obj.minTemp = weatherData.list[i].main.temp_min;
      obj.maxTemp = weatherData.list[i].main.temp_max;
      obj.desc = weatherData.list[i].weather[0].main;
      obj.icon = weatherData.list[i].weather[0].icon;
  
      setList((list) => [...list, obj]);
    }
    console.log("All list=>", list)
  }
 
 
  return (
    <div className="App">
      <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
        <TopBottons />
        <Inputs city={city} setCity={setCity} getData={getData} />
        {
          weatherData !==null ? (
          <>
          <TimeAndLocation city={city} weatherData={weatherData}/>
          <TempratureAndDetails weatherData={weatherData}/>
          <Forecast weatherData={weatherData} list={list}/>
         
          </>
          ) :null
        }
        
      </div>
    </div>
  );
}

export default App;
