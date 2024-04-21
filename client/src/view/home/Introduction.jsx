import React from "react";
import { FeaturesCards } from "../../components/introduction/FeaturesCards";
import Weather from "../../components/common/Weather";
import { Container } from "@mantine/core";
import MarqueeComponent from "../../components/introduction/MarqueeComponent";

const Introduction = () => {
	return (
		<>
			<Weather responsive="hidden max-xl:block" color="black" />
			<MarqueeComponent />
			<Container mx="auto" size="md" p={4}>
				<FeaturesCards />
			</Container>
		</>
	);
};

export default Introduction;
