import React, { useContext, useEffect, useState } from 'react'
import { UilSearch, UilLocationPinAlt } from '@iconscout/react-unicons'

const Inputs = ({city,setCity,getData,getDaysData}) => {
  
 const handleChange=(e)=>{
    setCity(e.target.value);
 }
 const handleClick=(e)=>{
  e.preventDefault();
  getData();
  
 } 
 const handleSubmit=(e)=>{
  e.preventDefault();
  getData();
  
 }
  return (
    <form className='flex flex-row justify-center my-6' onSubmit={handleSubmit}>
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4 text-white">
        <input type="text"
          onChange={handleChange}
          value={city}
          placeholder="search for city..."
          className='text-xl text-blue-900 p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase' />
        <UilSearch onClick={handleClick} size={25} className="cursor-pointer transition ease-out hover:scale-125" />
        <UilLocationPinAlt size={25} className="cursor-pointer transition ease-out hover:scale-125" />
      </div>

    </form>
  )
}

export default Inputs