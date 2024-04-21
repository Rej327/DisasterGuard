import { Box, List, ThemeIcon, rem } from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons-react";
import React from "react";
import classes from "./Disaster.module.css";

const DisasterAfter = ({ title, data }) => {
	return (
		<Box id="after" maw={960} mx="auto" py={30} px={10}>
			<h2>After an {title}</h2>
			<List
				c="dark"
				spacing="md"
				icon={
					<ThemeIcon color="teal" size={24} radius="xl">
						<IconCircleCheck
							style={{ width: rem(16), height: rem(16) }}
						/>
					</ThemeIcon>
				}
			>
				{data.map((item, index) => (
					<List.Item key={index}>
						<span className={classes.span}>{item.title} </span>
						{item.description}
					</List.Item>
				))}
			</List>
		</Box>
	);
};

export default DisasterAfter;
