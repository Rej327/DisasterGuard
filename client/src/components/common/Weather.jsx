import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLocation } from "../../_reducers/locationSlice";
import ReactWeather, {
	useWeatherBit,
} from "react-open-weather";
import { towns } from "../../data/data";
import { Box, Select } from "@mantine/core";
import classes from "./Weather.module.css";

const Weather = ({ color, responsive }) => {
	const [forecast, setForecast] = useState([]);
	const [lonlat, setLonlat] = useState({ lon: "", lat: "" });
	const selectedLocation = useSelector(
		(state) => state.location.selectedLocation
	);

	const dispatch = useDispatch();
	const getLocation = (value) => {
		dispatch(setLocation(value));
	};

	const fetchLocation = async (city) => {
		try {
			const response = await fetch(
				`https://weather.algobook.info/forecast/${city}`
			);
			const data = await response.json();
			setForecast(data.forecast);
			setLonlat({ lon: data.city.lon, lat: data.city.lat });
		} catch (error) {
			console.error("Error fetching weather data:", error);
		}
	};

	useEffect(() => {
		fetchLocation(selectedLocation);
	}, [selectedLocation]);

	const { data, errorMessage } = useWeatherBit({
		key: "0ececec0c8ec421eb32291aa5484139b",
		lat: lonlat.lat ? lonlat.lat : "14.6041667",
		lon: lonlat.lon ? lonlat.lon : "120.9822222",
		lang: "en",
		unit: "M",
	});

	return (
		<Box w="auto" h="fit-content" my={40}>
			<div className={`w-full ${responsive}`}>
				<div>
					<h1 className={`text-${color} text-center text-base`}>
						Choose Location
					</h1>
					<Select
						w={300}
						placeholder="Search Location"
						data={towns}
						value={selectedLocation}
						searchable
						onChange={(value) => getLocation(value)}
						my={10}
						mx="auto"
					/>
					<div className={classes.weatherContainer}>
						<ReactWeather
							isLoading={false}
							errorMessage={errorMessage}
							data={data}
							lang="en"
							locationLabel={selectedLocation}
							unitsLabels={{
								temperature: "C",
								windSpeed: "Km/h",
							}}
							showForecast
						/>
					</div>
				</div>
			</div>
		</Box>
	);
};

export default Weather;
