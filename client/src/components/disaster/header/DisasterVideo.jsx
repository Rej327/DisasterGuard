import { Box } from "@mantine/core";
import React from "react";
import ReactPlayer from "react-player";

const DisasterVideo = ({ ytUrl }) => {
	return (
		<Box mx="auto" maw="640px" my="40">
			<ReactPlayer width="auto" loop controls={true} muted url={ytUrl} />
		</Box>
	);
};

export default DisasterVideo;
