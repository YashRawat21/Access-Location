import React, { useState } from 'react'
import { mapsImg } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { updateLoading, updateLocation, updatePostalCode } from '../redux/appSlice';

const PostalCode = () => {
     const dispatch = useDispatch();
     const [postalCode, setPostalCode] = useState('');
     const selectPostalCode = useSelector(state => state.app.postalCode)
     const [loading, setLoading] = useState(false);
    const handleClick = () => {
        dispatch(updatePostalCode(postalCode))
        dispatch(updateLoading(true));
        const fetchLocation = async() => {
            const data = await fetch(`https://api.zippopotam.us/in/${postalCode}`);
            const json = await data.json() ;
            dispatch(updateLocation(json));
            dispatch(updateLoading(false));
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