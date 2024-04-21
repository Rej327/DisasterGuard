import { Box, List } from "@mantine/core";
import React from "react";
import classes from "./Disaster.module.css";

const DisasterSigns = ({ title, data }) => {
	return (
		<Box id="signs" p={10} mx={5} maw="500px">
			<h2>Understanding {title} Signs:</h2>
			<List spacing="md" c="dark" type="ordered">
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

export default DisasterSigns;
