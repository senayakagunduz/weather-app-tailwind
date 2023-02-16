import React from 'react'

function TopBottons() {
    const cities=[
        {
            id:1,
            title:'İstanbul',
        },
        {
            id:2,
            title:'Baku',
        },
        {
            id:3,
            title:'London',
        },
        {
            id:4,
            title:'Toronto',
        },
        {
            id:5,
            title:'Sydney',
        },
    ]
  return (
    <div className='flex items-center justify-around my-6'>
       
      {
        cities.map((city)=><button className=' text-white text-lg font-medium' key={city.id}>{city.title}</button>)
      }
    
    </div>
  )
}

export default TopBottons