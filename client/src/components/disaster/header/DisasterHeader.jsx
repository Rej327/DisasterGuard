import React from "react";
import classes from "./DisasterHeader.module.css";
import { IconWaveSawTool } from "@tabler/icons-react";
import { rem, useMantineTheme } from "@mantine/core";

const DisasterHeader = ({ title }) => {
	const theme = useMantineTheme();
	return (
		<div className={classes.header}>
			<div className="flex items-center">
				<IconWaveSawTool
					style={{ width: rem(50), height: rem(50) }}
					stroke={2}
					color={theme.colors.blue[6]}
				/>
				<h1 className={classes.title}>About {title}:</h1>
			</div>
		</div>
	);
};

export default DisasterHeader;
