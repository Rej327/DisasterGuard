import React from "react";
import { Container, Text } from "@mantine/core";
import classes from "./PrepareEvacCarousel.module.css";
import { FeaturesInformation } from "./FeaturesInformation";

const PrepareEvacCarousel = () => {
	return (
		<div className={classes.container}>
			<Container mx="auto" size="xl" p={20}>
				<h1 className={classes.title}>Nature Disasters</h1>
				<Text my={30} c="dimmed" ta="center">
					Get to know about different types of nature disasters
					through our carousel.
				</Text>
				<FeaturesInformation />
			</Container>
		</div>
	);
};

export default PrepareEvacCarousel;
