import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
	Paper,
	Text,
	Title,
	Button,
	useMantineTheme,
	rem,
} from "@mantine/core";
import classes from "./FeaturesInformation.module.css";
import { learnDisaster } from "../../data/data";
import { Link } from "react-router-dom";

function Card({ image, title, category, link }) {
	return (
		<Paper
			shadow="md"
			p="xl"
			radius="md"
			style={{ backgroundImage: `url(${image})` }}
			className={classes.card}
		>
			<div>
				<Text className={classes.category} size="xs">
					{category}
				</Text>
				<Title order={3} className={classes.title}>
					{title}
				</Title>
			</div>
			<Link to={link}>
				<Button variant="white" color="dark">
					Learn
				</Button>
			</Link>
		</Paper>
	);
}

export function FeaturesInformation() {
	const theme = useMantineTheme();
	const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.xl})`);
	const slides = learnDisaster.map((item) => (
		<Carousel.Slide key={item.title}>
			<Card {...item} />
		</Carousel.Slide>
	));

	return (
		<Carousel
			slideSize={{ base: "100%", sm: "50%", md: "25%" }}
			slideGap={{ base: rem(2), sm: "xl" }}
			align="start"
			slidesToScroll={1}
			loop
			dragFree
			withIndicators
		>
			{slides}
		</Carousel>
	);
}
