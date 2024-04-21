import React from "react";
import Navigation from "../view/navigation/Navigation";
import Hero from "../components/hero/Hero";
import Introduction from "../view/home/Introduction";
import { Container } from "@mantine/core";
import FooterSection from "../view/footer/FooterSection";

const Home = () => {
	return (
		<>
			<Navigation />
			<Hero />
			<Introduction />
			<FooterSection />
		</>
	);
};

export default Home;
