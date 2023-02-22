import React from 'react'

const Forecast = ({ list}) => {
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className='text-white font-medium upper'>daily forecast</p>
      </div>
      <hr className='my-2' />
      <div className='flex flex-row items-center justify-between text-white'>
        {
          list.map((item, index) => {
            console.log("item,index", item, index)
            return (
              <div className='flex flex-col items-center justify-center text-white'>
                  <p className='font-light text-sm'>{item.day}</p>
                  <img className='w-12 my-1' src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`} alt="" />
                  <p className='font-medium'>{item.maxTemp}°</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
 
}

export default Forecast