import React, { useState, useEffect } from "react";
import { IconCheck } from "@tabler/icons-react";
import { Box, Notification, rem } from "@mantine/core";
import classes from "./RegisterForm.module.css";

const NotificationComponent = () => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		setShow(true);

		const timer = setTimeout(() => {
			setShow(false);
		}, 5000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<Box
			className={`${classes.notification} ${show ? "" : classes.hidden}`}
			pos="absolute"
			w="100%"
			top="10px"
		>
			<Notification
				withCloseButton={false}
				w={350}
				mx="auto"
				className={classes.notifItem}
				icon={<IconCheck style={{ width: rem(20), height: rem(20) }} />}
				color="teal"
				title="Success! You're Registered!"
			>
				You're now registered with us.
			</Notification>
		</Box>
	);
};

export default NotificationComponent;
