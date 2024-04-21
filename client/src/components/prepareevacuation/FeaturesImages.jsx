import { Image, Text, Container, Title, SimpleGrid } from "@mantine/core";
import { inform, kit, plan, risk } from "../../assets";
import classes from "./FeaturesImages.module.css";

const data = [
	{
		image: risk,
		title: "Assess Your Risks",
		description:
			"Understand potential hazards like earthquakes, floods, or wildfires in your area and their impact on your operations",
	},
	{
		image: plan,
		title: "Create a Plan",
		description:
			"Develop an emergency plan, including procedures for evacuation, communication, and safeguarding resources",
	},
	{
		image: kit,
		title: "Build an Emergency Kit",
		description:
			"Stock up on essential supplies such as first aid items, backup power sources, and emergency contact information",
	},
	{
		image: inform,
		title: "Stay Informed",
		description:
			"Stay constantly updated on crucial emergency alerts and instructions to ensure immediate safety measures",
	},
];

export function FeaturesImages() {
	const items = data.map((item) => (
		<div className={classes.item} key={item.image}>
			<div className={classes.itemIcon}>
				<Image src={item.image} />
			</div>
			<div>
				<Text fz="lg" fw={500} size="lg" className={classes.itemTitle}>
					{item.title}
				</Text>
				<Text fz="sm" c="dimmed" mt="sm">
					{item.description}
				</Text>
			</div>
		</div>
	));

	return (
		<Container size="lg" className={classes.wrapper}>
			<Text className={classes.supTitle}>DISASTER PREPAREDNESS</Text>

			<Title order={2} className={classes.title}>
				Planning for Safety,
				<span className={classes.highlight}>Not</span> Just Survival
			</Title>

			<Container p={0} mt={30}>
				<Text c="dimmed">
					Take proactive steps to ensure not only survival but also
					safety in the face of adversity. This includes assessing
					risks, creating comprehensive plans, and building emergency
					kits to protect yourself and your loved ones.
				</Text>
			</Container>

			<SimpleGrid cols={{ xs: 1, sm: 2 }} spacing={20} mt={30}>
				{items}
			</SimpleGrid>
		</Container>
	);
}
