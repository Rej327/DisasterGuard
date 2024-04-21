import { Box, Text } from "@mantine/core";
import React from "react";

const DisasterDescription = ({description}) => {
	return (
		<Box id="description" px={10}>
			<Text c="dark" mt={20}>
				{description}
			</Text>
		</Box>
	);
};

export default DisasterDescription;
