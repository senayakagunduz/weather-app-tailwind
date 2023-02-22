import React from 'react'

const FiveDaysData = ({list}) => {
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className='text-white font-medium upper'>Daily Forecast</p>
      </div>
      <hr className='my-2' />
      <div className='flex flex-row items-center justify-between text-white'>

        <div className="flex flex-col items-center justify-center">
          {
            list.map((item, index) => {
              const{icon,day,temp_max}=item;
              return (
                <div key={index}>
                  <p className='font-light text-sm'>{day}</p>
                  <img className='w-12 my-1' src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
                  <p className='font-medium'>{temp_max}°</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default FiveDaysData