import React from 'react'

function WeatherDisplay({data}) {

  return (
    <div className='weather-info'>
        {data.name}
       <p>{data.main?.temp}</p>
       <p>{data.weather?.[0]?.description}</p>
       <p>{data.weather?.[0]?.icon}</p>
    </div>
  )
}

export default WeatherDisplay