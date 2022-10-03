import axios from 'axios';
import React, { useState } from 'react';
// import scattered from './pictures/03n.png';
// import clear from './pictures/01d.png';
// import broken from './pictures/04d.png';

import './App.css';




function App() {
  const [data, setData] = useState ({})
  const [icon, setIcon] = useState('')
  const [imgs,setImage] = useState('')
  const [location, setLocation] = useState ('')

const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=ce0f884838e9806107197f56560108b4`

const searchLocation = (event) =>{
  if (event.key === 'Enter') {
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    //   console.log(icon)
    //   if (icon == "01d") {
    //     setImage(clear)
    // }
    // else if(icon=="02d"  || icon=="02n"){
    //     setImage(broken)
    // }
    // else if(icon=="03n"){
    //     setImage(scattered)
    // }
    // else if(icon=="04d" ){
    //     setImage(broken)
    // }
    // else if(icon=="09d" || icon=="09n"){
    //     setImage(rain)
    // }
    // else if(icon=="10d" || icon=="10n"){
    //     setImage(sunnyRain)
    // }
    // else if(icon=="11d" || icon=="11n"){
    //     setImage(thunder)
    // }
    // else if(icon=="50d" || icon=="50n"){
    //     setImage(mist)
    // }

    })
  }


}

  return (
    <div className='app'>

      <div className='main-heading'>
            <center><h1> Weather Checker</h1></center>
      </div>

      <div className="search"><br /><br />
       
        <input 
        value={location} 
        onChange={event => setLocation(event.target.value)}  
        onKeyPress={searchLocation}
        placeholder='Enter Location'
        type='text'/>

      </div>
      
      <div className="container">
      <center> <div className="top">
          <div className="locationed"><br />
           <b> <p>{data.name}</p></b>
          </div>
          <div className='datefd'>
          <p>{data.timezone}</p>
          </div>
          <div className="temperature">
            {data.main ? <h1 className='temperatured'>{data.main.temp.toFixed()}<b className='centi'>&nbsp;°C</b></h1> : null}
          </div>
          <div className="description">
         <i>{data.weather ? <p> {data.weather[0].description}</p> : null}</i> 
         <i>{data.weather ? <p> {data.weather[0].icon}</p> : null}</i>
         <p></p>
          </div>
        </div></center>

        {data.name != undefined &&
 <div className="bottom">
 <div className="feels">
 {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
   <p>Feels Like</p>
 </div>
 <div className="humidity">
 {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
   <p>Humidity</p>
 </div>
 <div className="wind">
 {data.wind ? <p className='bold'>{data.wind.speed}MPH</p> : null}
   <p>Wind</p>
 </div>
</div>
        }

      </div>
    </div>
  );
}

export default App;
