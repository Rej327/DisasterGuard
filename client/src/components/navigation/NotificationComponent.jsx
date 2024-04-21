import React, { useEffect, useMemo, useState } from "react";
import {
	ActionIcon,
	rem,
	Drawer,
	Button,
	Flex,
	Text,
	Box,
	Divider,
	Indicator,
	Avatar,
	ScrollArea,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconNotification } from "@tabler/icons-react";
import classes from "./NotificationComponent.module.css";
import { useDispatch, useSelector } from "react-redux";
import useSocket from "../../hooks/useSocket";
import { notifications } from "../../_reducers/notificationsSlice";
import { fromNow } from "../../utils/helper";
// import dayjs from "dayjs";
// import relativeTime from "dayjs/plugin/relativeTime";

// const fromNow = (dateUploaded) => {
//   dayjs.extend(relativeTime);
//   return dayjs(dateUploaded).fromNow();
// };

const NotificationComponent = () => {
	const [opened, { open, close }] = useDisclosure(false);

	const [isRead, setRead] = useState(true);
	const { socket } = useSocket();
	const loggedInUser = useSelector((state) => state.user.loggedInUser);
	const notifs = useSelector((state) => state.forum.notifications);

	const dispatch = useDispatch();

	//   const ss = useSelector((state) => state.notifications);

	console.log(
		"ss",
		useSelector((state) => state.forum.notifications)
	);
	useEffect(() => {
		socket.on("recieved_notification", (e) => {
			console.log("recieved_notification", e);
			setRead(false);
			dispatch(notifications(e));
		});
	}, [socket]);

	useEffect(() => {
		setRead(true);
	}, [opened]);

	// filter out the duplicated value cause
	const filteredNotifs = useMemo(() => {
		return notifs.filter(
			(value, index, self) =>
				index === self.findIndex((t) => t.id === value.id)
		);
	}, [notifs, socket]);

	const notifIcon = (
		<Flex gap={5}>
			<Text>Notifications</Text>
		</Flex>
	);

	return (
		<>
			<Drawer
				opened={opened}
				onClose={close}
				position="right"
				zIndex={10000}
				title={notifIcon}
				overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
			>
				<ScrollArea>
					<Divider />
					{useMemo(
						() => (
							<>
								{filteredNotifs
									.map((notif, idx) => (
										<Box
											className={classes.contentContainer}
											mt={10}
											key={idx}
										>
											<Flex
												gap={5}
												align="center"
												justify="space-between"
											>
												<Text
													fw={600}
													className={classes.title}
												>
													{notif.title}
												</Text>
												<Text
													fw={600}
													size="xs"
													c="dimmed"
													className={classes.title}
												>
													{`${notif.level}`}
												</Text>
											</Flex>
											<Flex
												direction="column"
												gap={0}
												ml={5}
											>
												<Text size="md" c="dark">
													{notif.description}
												</Text>

												<Text c="dimmed" size="xs">
													{fromNow(
														notif.dateUploaded
													)}
												</Text>
											</Flex>
											<Divider mt={10} size="xs" />
										</Box>
									))
									.reverse()}
							</>
						),
						[opened]
					)}
					<Divider />
				</ScrollArea>
			</Drawer>

			<>
				{useMemo(
					() =>
						loggedInUser ? (
							<Indicator inline disabled={isRead} size={16}>
								<ActionIcon
									onClick={open}
									size={36}
									variant="default"
									radius="xl"
									aria-label="ActionIcon with size as a number"
									c="blue"
								>
									<IconNotification
										style={{
											width: rem(24),
											height: rem(24),
										}}
									/>
								</ActionIcon>
							</Indicator>
						) : null,
					[isRead]
				)}
			</>
		</>
	);
};

export default NotificationComponent;
