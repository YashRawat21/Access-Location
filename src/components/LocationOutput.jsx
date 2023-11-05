import React from 'react'
import { useSelector } from 'react-redux'
import Loader from './Loader';

const LocationOutput = () => {
  const data = useSelector((state) => state.app.location);
 
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
      ) : <Loader />
     
    }
    </>
  )
}

export default LocationOutput;
