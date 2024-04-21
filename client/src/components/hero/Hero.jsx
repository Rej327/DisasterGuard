import React from "react";

import { hero_cover } from "../../assets/index";
import { Button, Title, Container, Text, Flex, Anchor } from "@mantine/core";
import classes from "./Hero.module.css";
import Weather from "../common/Weather";
import QuickPreparationModal from "./QuickPreparationModal";
import QuickPrepare from "../quickprepare/QuickPrepare";
import { useDisclosure } from "@mantine/hooks";

const Hero = () => {
	const [opened, { open, close }] = useDisclosure(false);

	return (
		<div
			className="bg-cover bg-top h-[80vh] "
			style={{ backgroundImage: `url(${hero_cover})` }}
		>
			<div className="bg-black bg-opacity-30 w-full h-[80vh] flex items-center justify-center">
				<Flex
					mt={210}
					direction="column"
					align="center"
					justify="center"
				>
					<Container className={classes.container} size="md">
						<Title className={classes.title}>
							Empowering Disaster Preparedness
						</Title>
						<Text className={classes.description} size="xl" mt="xl">
							DisasterGuard is your all-in-one solution for
							disaster preparedness. With real-time updates,
							alerts, and guidance. DisasterGuard are Committed to
							providing comprehensive resources and support to
							help communities prepare for, respond to, and
							recover from natural disasters
						</Text>
						<QuickPreparationModal
							opened={opened}
							open={open}
							close={close}
							variant="gradient"
							size="xl"
							radius="xl"
						/>
					</Container>
				</Flex>
				<div className="w-[500px] hidden md:block">
					<Weather color="white" />
				</div>
			</div>
		</div>
	);
};

export default Hero;
