import React, { useEffect, useState } from 'react'
import './Header.css'
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts'
export const Header = () => {

   let apiKey = "f63edd2f6cf30072b228c7a9ad2a0797";
   const [city, setCity] = useState("Punjab");
   const [Data, setData] = useState("")


   const fetchData = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f63edd2f6cf30072b228c7a9ad2a0797`
      const apiData = await fetch(url).then((response) => response.json()).then(data => setData({
         cityName: data.name,
         temp: data.main.temp,
         tempMax: data.main.temp_max,
         tempMin: data.main.temp_min
      }))
   }
   console.log();


   function getDate() {
      const today = new Date();
      return `${today.toDateString()} / ${today.toLocaleTimeString()}`;
   }
   const [currentDate, setCurrentDate] = useState(getDate());

   useEffect(() => {
      setCurrentDate(currentDate)
   }, [])

   const data = [

      {
         "name": "0 hour",
      "Temp": 0 ,
      "Time": 0,
},
      {
         "name": "1 hours",
      "Temp": 10,
      "Time": 10,
},
      {
         "name": "2 hours",
      "Temp": 5,
      "Time": 15,
},
      {
         "name": "3 hours",
      "Temp": 15,
      "Time":  20,

},
      {
         "name": "4 hours",
      "Temp": 20,
      "Time": 25,
},
      {
         "name": "5 hours",
      "Temp": 25,
      "Time": 30,
},
      {
         "name": "6 hours",
      "Temp": 30,
      "Time": 35,
}
      ]


   return (
      <>
         <section id='#wrapper'>
            <div className='nav-bar'>
               <div className='nav-logo'><i className="fa-regular fa-snowflake "></i>
                  <span className='nav-name'>VisUaLs</span>
               </div>

               <div className='nav-links'>
                  <a href='#' className='link'>Home</a>
                  <a href='#' className='link'>About</a>
                  <a href='#' className='link'>Contact</a>
               </div>
            </div>



            <div className='hero-sec'>

               <div className='hero-sec-left'>
                  <input
                     type='search'
                     placeholder='search'
                     className='input-field'
                     value={city}
                     onChange={(event) => {
                        setCity(event.target.value)
                     }} >
                  </input>
                  <button className='button' onClick={fetchData}>Get Data</button>
                  <div>
                     <h1 className='heading'>{Data.cityName}</h1>
                     <p className='heading'>{Data.temp}</p>
                     <p className='heading1'>Min : {Data.tempMin} | Max:{Data.tempMax}</p>
                  </div>


                  <div className='heading1'>{currentDate}</div>
               </div>



               <div className='hero-sec-right'>
                  <LineChart width={900} height={500} data={data}
                     margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                     <CartesianGrid strokeDasharray="3 3" />
                     <XAxis dataKey="name" />
                     <YAxis />
                     <Tooltip />
                     <Legend />
                     <Line type="monotone" dataKey="Time" stroke="#8884d8" />
                     <Line type="monotone" dataKey="Temp" stroke="#82ca9d" />
                  </LineChart>
               </div>
            </div>


         </section>
      </>
   )
}
