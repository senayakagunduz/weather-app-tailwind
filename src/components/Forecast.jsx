import React, { useEffect, useState } from 'react'


const Forecast = ({weatherData}) => {
    return (
        <div>
            <div className="flex items-center justify-start mt-6">
                <p className='text-white font-medium upper'>Daily Forecast</p>
            </div>
            <hr className='my-2' />
            <div className='flex flex-row items-center justify-between text-white'>

            <div className="flex flex-col items-center justify-center">
                    <p className='font-light text-sm'>04.30 PM</p>
                    {/* <img className='w-12 my-1' src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="" /> */}
                    <p className='font-medium'>{weatherData.list[0].main.temp}°</p>
                </div> 
 
            </div>
        </div>


    )
}

export default Forecast