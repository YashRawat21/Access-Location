import React, { useEffect, useState } from 'react'
import useFetchLocation from '../hooks/useFetchLocation';
import { mapsImg } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { updateLocation } from '../redux/appSlice';

const PostalCode = () => {
     const [postalCode , setPostalCode]  = useState("");
     const dispatch = useDispatch();
     
    const handleClick = () => {
        const fetchLocation = async() => {
            const data = await fetch(`https://api.zippopotam.us/in/${postalCode}`);
            const json = await data.json() ;
            setPostalCode("")
            dispatch(updateLocation(json));
           }
           fetchLocation();
        }
    
  return (
    <>
    <div className='absolute'>
      <img  src = {mapsImg}  alt = "mapsImg"className='w-screen' />
    </div>
    <div className='flex justify-center relative'>
     <input placeholder='Enter Postal Code' className='w-3/12 items-center p-2 my-32 mx-2 bg-black outline-none text-white ' onChange={(e) => setPostalCode(e.target.value)}/>
      <button className='bg-black text-white p-2 m-2 rounded-lg my-32 mx-2' onClick={handleClick}>Submit</button>
    </div>

    </>
  )
}

export default PostalCode;