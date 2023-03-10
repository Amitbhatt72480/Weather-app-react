import React, { useState } from 'react'
import axios from 'axios';


const Body = () => {
	
	const [city, setCity] = useState("");
	const [data, setData] = useState({});

	const handleChange = (e) =>{
		const temp = e.target.value;
		setCity(temp);
	}
		const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city.trimEnd()}&appid=33350a6ea5b4a8ee590a85326e494de1`;

	const handleClick = ()=>{
			axios.get(baseURL).then((response)=>{
				setData(response.data)
			});
			setCity('');
		}
	
	
  return (
	<>
	<div className=" font-custom w-full h-screen bg-gradient-to-r from-blue-300 via-green-200 to-violet-200 text-center ">
		<div className="pt-24 pb-3">
			<h1 className="text-4xl md:text-7xl mb-10">Welcome to the Weather Application</h1>
			<h2 className="mb-3 text-xl font-mono ">Get the Weather by Searching for your city.</h2>
			<input  onChange={handleChange} value={city}  type="text" className='font-custom px-3 py-2 rounded-xl' placeholder='Enter Here' />
			<button onClick={handleClick}  className="inline-block ml-3 mx-auto bg-black text-white py-2 px-5 rounded-xl shadow-xl hover:bg-slate-700 my-3">Submit</button>
		</div>
		{data.main? <h1 className='text-2xl '>The Weather of {data.name}</h1>:null}
		<div className="pb-7">
		{data.main ? <h1 className="text-xl font-bold">{Math.floor((data.main["temp"])-273)} &deg;C</h1>:null}
		{data.main ? <h1>{(data.weather[0]["description"]).toUpperCase()}</h1> :null}
		</div>
		{data.main ? <div className="flex justify-center bg-white mx-3 lg:mx-24 xl:mx-96 rounded-full shadow-2xl px-3 py-4 ">
			<h1 className="px-5 md:px-14"><span className='font-bold text-lg block'>Pressure</span>  {data.main['pressure']+' mbar'}</h1>
			<h1 className="px-5 md:px-14"><span className='font-bold text-lg block'>Wind Speed</span>  {data.wind.speed + "K/H"}</h1>
			<h1 className="px-5 md:px-14"><span className='font-bold text-lg block'>Humidity</span> {data.main['humidity']}%</h1>
		</div>: null}
		
	</div>
	</>
  )
}

export default Body