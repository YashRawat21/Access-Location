import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader';

const LocationOutput = () => {
  const data = useSelector((state) => state.app.location);
  const selectPostalCode = useSelector((state) => state.app.postalCode)
  const loading = useSelector(state => state.app.loading);
  const dispatch = useDispatch();
 

   if(loading) {
    <div className='flex w-10 h-10  items-center justify-center mx-auto absolute z-[99]'>
        <Loader />
    </div>
   }

  return (
    <>
    {
      data ? (
        <div className='relative z-[99] text-center text-2xl'>
           <p className='text-3xl font-semibold'>{data.country}</p>
      <div >
        {
          data?.places?.map((place, index) => {
            return (
              <ul key={index}>
                <li>Place Name - {place["place name"]}</li>
                <li>Longiute - {place.longitude}</li>
                <li>State - {place.state}</li>
              </ul>
            )
          })
        }
      </div>
     
        </div>
      ) : <p className='text-3xl text-black relative z-50'>This postal code doesn't exist.</p>
     
    }
    </>
  )
}

export default LocationOutput;
