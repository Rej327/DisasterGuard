import React, { useEffect, useState } from "react";
import {
	Anchor,
	Button,
	Card,
	Group,
	Image,
	Modal,
	Select,
	Text,
	UnstyledButton,
	useMantineTheme,
} from "@mantine/core";
import { IconPhone } from "@tabler/icons-react";
import classes from "./FeaturesContact.module.css";
import { useDisclosure } from "@mantine/hooks";
import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "../../_reducers/locationSlice";
import { towns } from "../../data/data";
import { hotlines } from "../../data/hotlines";
import { emergencysection } from "../../assets";

const FeaturesContact = () => {
	const [opened, { open, close }] = useDisclosure(false);
	const [locationHotlines, setLocationHotlines] = useState([]);

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
			<Text fw={500} ta="center" mt={7}>
				Unavailable
			</Text>
		);
	return (
		<>
			<Modal
				opened={opened}
				onClose={close}
				title={<Text fw={700}>Town Hotlines</Text>}
				centered
			>
				<Text ta="center" className={classes.modalTitle}>
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
							<Text className={classes.modalTitle}>
								Emergency Hotlines
							</Text>
						</Group>
						<div className="flex justify-center item-center max-sm:flex-col gap-2">
							{items}
						</div>
					</div>
				</Card>
			</Modal>
			<div
				style={{
					backgroundImage: `url(${emergencysection})`,
					backgroundAttachment: "fixed",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					height: "20rem",
				}}
				className="p-10 flex items-center justify-center"
			>
				<div className="bg-black/40 w-full flex">
					<div className={classes.container}>
						<Text className={classes.title}>
							Contact Emergency Hotline
						</Text>
						<Button onClick={open} variant="filled" color="red">
							<IconPhone />
							Call
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default FeaturesContact;
