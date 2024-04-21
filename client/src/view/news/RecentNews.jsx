import { Anchor, Box, Loader, Paper, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";
import classes from "./RecentNews.module.css";

const formatDate = (dateString) => {
	const date = new Date(dateString);
	const options = { month: "long", day: "numeric", year: "numeric" };
	return date.toLocaleDateString("en-US", options);
};

const RecentNews = () => {
	const [weatherData, setWeatherData] = useState(null);
	const [globalWeatherData, setGlobalWeatherData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchDataInPH = async () => {
			try {
				const response = await fetch(
					"https://api.reliefweb.int/v1/disasters?appname=disasterguard&query[value]=Philippines&sort[]=date:desc"
				);
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data = await response.json();
				setWeatherData(data.data);
				setLoading(false);
			} catch (error) {
				setError(error);
				setLoading(false);
			}
		};
		const fetchDataInGlobal = async () => {
			try {
				const response = await fetch(
					"https://eonet.gsfc.nasa.gov/api/v2.1/events?api_key=PtmONi68gnvAuyIfIkk6iXXSbiKrF9vv3EPD5iFB&status=open&limit=10&sort=date,desc"
				);
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data = await response.json();
				console.log("data", data.events);
				setGlobalWeatherData(data.events);
				setLoading(false);
			} catch (error) {
				setError(error);
				setLoading(false);
			}
		};

		fetchDataInPH();
		fetchDataInGlobal();
	}, []);

	if (loading)
		return <Loader color="blue" type="bars" className={classes.loader} />;

	if (error) return <div>Error: {error.message}</div>;
	return (
		<Box mt={90}>
			<Box>
				<Text className={classes.title}>
					Recent Disaster History in the Philippines
				</Text>
				<Box className={classes.itemContainer}>
					{weatherData.map((data, index) => (
						<Paper
							maw={250}
							p={10}
							shadow="md"
							key={index}
							className={classes.list}
						>
							<Text key={index} className={classes.list}>
								{data.fields.name}
							</Text>
						</Paper>
					))}
				</Box>
			</Box>
			<Box mt={60}>
				<Text className={classes.title}>
					Recent Disaster History in the World
				</Text>

				<Box className={classes.itemContainer}>
					{globalWeatherData?.map((data, index) => (
						<Anchor
							c="dark"
							underline="never"
							href={data.sources[0].url}
							target="_blank"
							key={index}
						>
							<Paper
								maw={300}
								p={10}
								shadow="md"
								className={classes.list}
							>
								<Text c="dimmed">
									{formatDate(data.geometries[0].date)}
								</Text>
								<Text className={classes.globalTitle}>
									{data.title}
								</Text>
							</Paper>
						</Anchor>
					))}
				</Box>
			</Box>
		</Box>
	);
};

export default RecentNews;
