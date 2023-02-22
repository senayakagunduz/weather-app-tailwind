import React from 'react'

const TimeAndLocation = ({ weatherData }) => {
    const getToday = () => {
        var myDate = new Date();
        let daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let monthsList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Aug', 'Oct', 'Nov', 'Dec'];
        let date = myDate.getDate();
        let month = monthsList[myDate.getMonth()];
        let year = myDate.getFullYear();
        let day = daysList[myDate.getDay()];

        let today = `${date} ${month} ${year}, ${day}`;
        return today;
    }
    const clock=()=>{
        var today = new Date();
        var hour = today.getHours();
        var minute = today.getMinutes();
        var second = today.getSeconds();
        const fullTime= " "+hour+" : "+minute+" : "+second;
        return fullTime;
    }
    return (
        <div>
            <div className='flex items-center justify-center my-6'>
                <p className='text-white text-xl font-extralight'>
                {getToday()} | <span className='my-1 font-semibold'>{clock()}</span>  
                </p>  
            </div>
            <div className="flex items-center justify-center my-3">
                <p className='text-white text-3xl font-medium capitalize'>
                  {weatherData.city.name}/{weatherData.city.country}
                </p>
            </div>
        </div>
    )
}
export default TimeAndLocation