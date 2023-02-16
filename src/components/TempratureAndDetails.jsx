import React, { useContext, useState } from 'react'
import { UilTemperatureHalf, UilTear, UilWind, UilSun, UilSunset } from '@iconscout/react-unicons'


const TempratureAndDetails = ({weatherData}) => {
    // const getSunrise=(time)=>{
    //     let unix = 1507473344;
    //     let date = new Date(unix*1000); 
    //     return date;   
    // }
    // console.log("sunrise",getSunrise(1676523384))
    // const sunRise=weatherData.city.sunrise;
    return (
        <div>
            <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
                <p>{weatherData.list[0].weather[0].description}</p>
            </div>
            <div className='flex flex-row items-center justify-between text-white py-3'>
                <img src={`https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@2x.png`} alt="img" className='w-20'/>
                <p className='text-5xl'>{weatherData.list[0].main.temp}°</p>
                <div className="flex flex-col space-y-2">
                    <div className='flex font-light text-sm items-center justify-center'>
                        < UilTemperatureHalf size={18} className="mr-1" /> Real felt:
                        <span className='font-medium ml-1'>{weatherData.list[0].main.feels_like}°</span>
                    </div>
                    <div className='flex font-light text-sm items-center justify-center'>
                        <UilTear size={18} className="mr-1" /> Humidity:
                        <span className='font-medium ml-1'>{weatherData.list[0].main.humidity}%</span>
                    </div>
                    <div className='flex font-light text-sm items-center justify-center'>
                        < UilWind size={18} className="mr-1" /> Wind:
                        <span className='font-medium ml-1'>{weatherData.list[0].wind.speed}km/h</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
                <UilSun />
                <p className='font-light'>Rise: <span className='font-medium ml-1 '>{weatherData.city.sunrise}</span></p>
                <p className='font-light'>|</p>
                <UilSunset />
                <p className='font-light'>Set: <span className='font-medium ml-1 '>{weatherData.city.sunset}</span></p>
                <p className='font-light'>|</p>
                <UilSun />
                <p className='font-light'>Max_temp: <span className='font-medium ml-1 '>{weatherData.list[0].main.temp_max}C°</span></p>
                <p className='font-light'>|</p>
                <UilSun />
                <p className='font-light'>Min_temp: <span className='font-medium ml-1 '>{weatherData.list[0].main.temp_min}C°</span></p>
                <p className='font-light'></p>
            </div>
        </div>

    )

}
export default TempratureAndDetails