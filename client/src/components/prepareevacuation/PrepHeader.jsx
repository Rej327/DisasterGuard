import React from "react";
import { evacuate } from "../../assets";
import "./PrepHeader.css";
import { Text } from "@mantine/core";

const PrepHeader = () => {
	return (
		<div>
			<div
				className="relative parallax-background"
				style={{ backgroundImage: `url(${evacuate})` }}
			>
				<div className="absolute bottom-[10rem] max-w-[70rem]">
					<Text className="header-text rounded-r-full">
						How Will I Prepare?
					</Text>
				</div>
			</div>
		</div>
	);
};

export default PrepHeader;
