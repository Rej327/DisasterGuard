import React from "react";
import { Container } from "@mantine/core";
import { FeaturesImages } from "../../components/prepareevacuation/FeaturesImages";
import FeaturesContact from "../../components/prepareevacuation/FeaturesContact";
import PrepareEvacCarousel from "../../components/prepareevacuation/PrepareEvacCarousel";
import PrepHeader from "../../components/prepareevacuation/PrepHeader";

const Peparedness = () => {
	
	return (
		<>
			<PrepHeader />
			<Container mx="auto" size="md" p={4}>
				<FeaturesImages />
			</Container>
			<FeaturesContact />
			<PrepareEvacCarousel />
		</>
	);
};

export default Peparedness;
