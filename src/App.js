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

  const getData=async()=>{
    try {
      setLoading(true);
      const data=await getWeatherData(city);
      setWeatherData(data);
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(()=>{
    getData();   
  },[])
 
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
          <Forecast weatherData={weatherData} />
          </>
          ) :null
        }
        
      </div>
    </div>
  );
}

export default App;
