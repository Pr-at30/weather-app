import React from 'react'
import style from './Display.module.css'

const Display = (props) => {
  console.log(props)
  let celtemp = (props.weatherData?.main?.temp - 273.15).toFixed(2);
  let feelike = (props.weatherData?.main?.feels_like - 273.15).toFixed(2);
  return (
    <div className={style.widget}>

      {props.error === true ?
        
        <h1>Nothing to show</h1> :
        <>
          <div className={style.panel}>
            <div className={style.date}>
              {new Date().toLocaleDateString()}
            </div>
            <div className={style.city}>
              {props.weatherData?.name}, {props.weatherData?.sys?.country}
            </div>
            <div className={style.temp}>
              Temp : {celtemp}&deg;C
            </div>
            <div className={style.temp}>
              Feels like : {feelike}&deg;C
            </div>
            <div className={style.temp}>
            Desc : {props.weatherData?.weather[0].description}
            </div>
          </div>

          
        </>
      }

    </div>
  )
}

export default Display

//  <div className={style.panel}>
//           <div className={style.date}>
//             Monday, 20 Aug 2018
//           </div>
//           <div className={style.city}>
//             Mumbai
//           </div>
//           <div className={style.temp}>
//             27&deg;
//           </div>
//         </div> 