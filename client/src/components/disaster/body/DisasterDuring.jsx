import { Box, List } from "@mantine/core";
import React from "react";
import classes from "./Disaster.module.css";

const DisasterDuring = ({ title, data }) => {
	return (
		<Box id="during" p={10} mx={5} maw="500px">
			<h2>During an {title}</h2>
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

export default DisasterDuring;
