import React, { useEffect, useState } from "react";
import { ecall } from "../../assets";
import { useDisclosure } from "@mantine/hooks";
import {
	Modal,
	Image,
	useMantineTheme,
	Card,
	Text,
	UnstyledButton,
	Group,
	Anchor,
	Select,
} from "@mantine/core";
import classes from "./ButtonEmergency.module.css";
import { useDispatch, useSelector } from "react-redux";
import { hotlines } from "../../data/hotlines";
import { towns } from "../../data/data";
import { setLocation } from "../../_reducers/locationSlice";

const ButtonEmergency = () => {
	const [opened, { open, close }] = useDisclosure(false);
	const [locationHotlines, setLocationHotlines] = useState([]);
	const theme = useMantineTheme();

	const dispatch = useDispatch();
	const getLocation = (value) => {
		dispatch(setLocation(value));
	};

	const selectedLocation = useSelector(
		(state) => state.location.selectedLocation
	);

	useEffect(() => {
		const hotlinesForLocation = hotlines[selectedLocation.toLowerCase()];
		setLocationHotlines(hotlinesForLocation ? hotlinesForLocation : []);
	}, [selectedLocation]);

	const handleCall = (number) => {
		window.location.href = `tel:${number}`;
	};

	const items =
		locationHotlines.length > 0 ? (
			locationHotlines.map((hotline, index) => (
				<Anchor
					key={index}
					w="fit-content"
					h="fit-content"
					onClick={handleCall}
					underline="never"
					component="button"
				>
					<UnstyledButton className={classes.item}>
						<Image mx="auto" src={hotline.img} w={50} />
						<Text fw={500} ta="center" size="xs" mt={7}>
							{hotline.name}
						</Text>
						<Text fw={500} ta="center" size="xs" mt={7}>
							{hotline.number}
						</Text>
					</UnstyledButton>
				</Anchor>
			))
		) : (
			<Text fw={500} className={classes.title} ta="center" mt={7}>
				Unavailable
			</Text>
		);

	return (
		<>
			<Modal
				opened={opened}
				title={<Text fw={700}>Town Hotlines</Text>}
				onClose={close}
				centered
			>
				<Text ta="center" className={classes.title}>
					Select Town
				</Text>
				<Select
					w={300}
					placeholder="Search Location"
					data={towns}
					value={selectedLocation}
					searchable
					onChange={(value) => getLocation(value)}
					my={10}
					mx="auto"
				/>
				<Card withBorder radius="md" className={classes.card}>
					<div className="flex flex-col justify-center items-center">
						<Group justify="space-between">
							<Text className={classes.title}>
								Emergency Hotlines
							</Text>
						</Group>
						<div className="flex justify-center item-center max-sm:flex-col gap-2">
							{items}
						</div>
					</div>
				</Card>
			</Modal>
			<Image
				onClick={open}
				className={classes.buttonEmergency}
				src={ecall}
			/>
			;
		</>
	);
};

export default ButtonEmergency;
