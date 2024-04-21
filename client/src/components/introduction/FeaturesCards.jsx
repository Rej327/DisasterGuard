import {
	Badge,
	Group,
	Title,
	Text,
	Card,
	SimpleGrid,
	Container,
	rem,
	useMantineTheme,
	Button,
	Anchor,
} from "@mantine/core";

import classes from "./FeaturesCards.module.css";
import { disasterData } from "../../data/data";

export function FeaturesCards() {
	const theme = useMantineTheme();
	const features = disasterData.map((feature) => (
		<Card
			key={feature.title}
			shadow="md"
			radius="md"
			className={classes.card}
			padding="xl"
			pos="relative"
		>
			<feature.icon
				style={{ width: rem(50), height: rem(50) }}
				stroke={2}
				color={theme.colors.blue[6]}
			/>

			<Text
				ta="center"
				fz="lg"
				fw={500}
				className={classes.cardTitle}
				mt="md"
			>
				{feature.title}
			</Text>

			<Text ta="center" fz="sm" c="dark" mt="sm">
				{feature.description}
			</Text>
			<Anchor href={feature.link} underline="never">
				<Button
					pos="absolute"
					top="0"
					className={classes.prepareButton}
				>
					Prepare
				</Button>
			</Anchor>
		</Card>
	));

	return (
		<Container size="lg" py="xl">
			<Group justify="center">
				<Badge variant="filled" size="lg">
					DISASTER PREPAREDNESS
				</Badge>
			</Group>

			<Title
				order={2}
				className={classes.title}
				ta="center"
				mt="sm"
				mx="auto"
			>
				Mitigate Risks Across All Disaster Types
			</Title>

			<Text c="dark" className={classes.description} ta="center" mt="md">
				Did you know? Tsunamis can be triggered by underwater
				earthquakes or volcanic eruptions. Being prepared means
				understanding the diverse nature of disasters.
			</Text>

			<SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
				{features}
			</SimpleGrid>
		</Container>
	);
}
