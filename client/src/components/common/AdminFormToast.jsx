import React, { useState, useEffect } from "react";
import { IconCheck } from "@tabler/icons-react";
import { Box, Notification, rem } from "@mantine/core";
import classes from "./AdminForm.module.css";

const AdminFormToast = ({ showNotification, setShowNotification }) => {
	useEffect(() => {
		let timer;
		if (showNotification) {
			timer = setTimeout(() => {
				setShowNotification(false);
			}, 2000);
		}

		return () => clearTimeout(timer);
	}, [showNotification, setShowNotification]);

	return (
		<Box
			className={`${classes.notification} ${
				showNotification ? "" : classes.hidden
			}`}
			w="100%"
		>
			<Notification
				withCloseButton={false}
				w={350}
				mx="auto"
				className={classes.notifItem}
				icon={<IconCheck style={{ width: rem(20), height: rem(20) }} />}
				color="teal"
				title="Success!"
			>
				Messages Sent!
			</Notification>
		</Box>
	);
};

export default AdminFormToast;
