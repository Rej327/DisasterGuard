/* eslint-disable react/prop-types */
import { Button, Modal, Text, rem } from "@mantine/core";
import React, { useEffect, useState } from "react";
import classes from "./Hero.module.css";
import { useDisclosure } from "@mantine/hooks";

import {
	Card,
	SimpleGrid,
	UnstyledButton,
	useMantineTheme,
} from "@mantine/core";
import QuickPrepare from "../quickprepare/QuickPrepare";
import { disasterData } from "../../data/data";

function ActionsGrid(props) {
	const theme = useMantineTheme();

	const items = disasterData.map((item) => (
		<UnstyledButton
			key={item.title}
			className={classes.item}
			onClick={() => {
				props.setPreparationData(item.title);
				props.quickPrepareOpen();
				props.close();
			}}
		>
			<item.icon
				icon
				style={{ width: rem(30), height: rem(30), marginTop: 10 }}
				stroke={2}
				color={theme.colors.blue[6]}
			/>

			<Text size="xs" fw={600} my={10}>
				{item.title}
			</Text>
		</UnstyledButton>
	));

	return (
		<Card withBorder radius="md" className={classes.card}>
			<SimpleGrid cols={3} mt="md">
				{items}
			</SimpleGrid>
		</Card>
	);
}

const QuickPreparationModal = ({
	variant,
	size,
	radius,
	opened,
	open,
	close,
	menuClose,
	btnVisible = true,
}) => {
	const [
		quickPreparedOpened,
		{ open: quickPrepareOpen, close: quickPrepareClose },
	] = useDisclosure(false);
	const [preparationData, setPreparationData] = useState("");

	useEffect(() => {
		if (!quickPreparedOpened) {
			setPreparationData("");
		}
	}, [opened, quickPreparedOpened]);

	return (
		<>
			{btnVisible && (
				<Button
					variant={variant}
					size={size}
					radius={radius}
					mt={30}
					className={classes.control}
					onClick={() => {
						open();
						menuClose();
					}}
				>
					Quick Preparations
				</Button>
			)}

			<Modal
				centered
				opened={opened}
				onClose={close}
				title={<Text fw={700}>Quick Preparations</Text>}
				size={700}
			>
				<ActionsGrid
					setPreparationData={setPreparationData}
					close={close}
					quickPrepareOpen={quickPrepareOpen}
				/>
			</Modal>

			{/* SecondaryModal */}
			{!!Object.values(preparationData).length && (
				<QuickPrepare
					opened={quickPreparedOpened}
					close={quickPrepareClose}
					open={quickPrepareOpen}
					preparationData={preparationData}
				/>
			)}
		</>
	);
};

export default QuickPreparationModal;
