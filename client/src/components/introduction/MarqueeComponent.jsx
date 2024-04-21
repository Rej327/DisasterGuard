import { Container, Group, Image, Text } from "@mantine/core";
import React from "react";
import Marquee from "react-fast-marquee";
import classes from "./MarqueeComponent.module.css";
import { Link } from "react-router-dom";
import { trackerLinks } from "../../data/data";

const MarqueeComponent = () => {
	return (
		<Container mt={80} className={classes.container}>
			<Group align="center" justify="center">
				<Text className={classes.title}>
					Real-Time Disaster Tracking: Stay Informed, Stay Safe
				</Text>
				<Text c="dark">
					Stay safe with real-time disaster tracking. External links
					provide extra resources for staying informed
				</Text>
			</Group>
			<Marquee
				className={classes.marquee}
				pauseOnClick
				speed={20}
				autoFill={true}
			>
				{trackerLinks.map((data, index) => (
					<Link
						key={index}
						w="fit-content"
						to={data.url}
						target="_blank"
					>
						<Image
							className={classes.trackerLinks}
							src={data.img}
							w={150}
						/>
					</Link>
				))}
			</Marquee>
		</Container>
	);
};

export default MarqueeComponent;
