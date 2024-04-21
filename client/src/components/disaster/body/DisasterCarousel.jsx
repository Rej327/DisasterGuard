import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { Paper, Title, rem, useMantineTheme } from "@mantine/core";
import classes from "./Disaster.module.css";

const DisasterCarousel = ({ dataImg }) => {
	const autoplay = useRef(Autoplay({ delay: 2000 }));

	const theme = useMantineTheme();
	return (
		<Carousel
			slideGap={{ base: rem(2), sm: "xl" }}
			plugins={[autoplay.current]}
			onMouseEnter={autoplay.current.stop}
			onMouseLeave={autoplay.current.reset}
			align="start"
			slidesToScroll={1}
			loop
			dragFree
			withIndicators
			withControls={false}
		>
			{dataImg.map((item, index) => (
				<Carousel.Slide w={80} key={index}>
					<Paper
						m={4}
						shadow="md"
						p="xl"
						radius="md"
						h={400}
						style={{ backgroundImage: `url(${item.img})` }}
						className={classes.carouselCard}
					>
						<Title order={3} className={classes.title}>
							{item.title}
						</Title>
					</Paper>
				</Carousel.Slide>
			))}
		</Carousel>
	);
};

export default DisasterCarousel;
