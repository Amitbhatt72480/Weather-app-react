import React from 'react';
import {TiWeatherCloudy, TiWeatherDownpour, TiWeatherPartlySunny, TiWeatherSunny, TiWeatherSnow} from 'react-icons/ti';

const Navbar = () => {
  return (
	<>
	<div className="font-custom bg-black text-gray-200 flex items-center justify-between py-3">
		<h1 className="text-3xl md:text-5xl p-4 ">Weather App</h1>
		<div className="flex items-center justify-around text-xl md:text-3xl space-x-5 mr-6">
			<TiWeatherCloudy />
			<TiWeatherSunny />
			<TiWeatherDownpour />
			<TiWeatherPartlySunny />
			<TiWeatherSnow />
		</div>
	</div>
	</>
  )
}

export default Navbar