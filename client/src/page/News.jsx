import React from "react";
import RecentNews from "../view/news/RecentNews";
import Navigation from "../view/navigation/Navigation";
import FooterSection from "../view/footer/FooterSection";
import { Container } from "@mantine/core";

const News = () => {
	return (
		<>
			<Navigation />
			<Container mx="auto" size="md" p={4}>
				<RecentNews />
			</Container>
			<FooterSection />
		</>
	);
};

export default News;
