import { IconChevronRight, IconLogout } from "@tabler/icons-react";
import {
	Avatar,
	Text,
	UnstyledButton,
	Popover,
	Flex,
	Box,
	Anchor,
	Button,
	Container,
} from "@mantine/core";
import classes from "./UserButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../_reducers/userSlice";

export const UserButton = () => {
	const dispatch = useDispatch();
	const loggedInUser = useSelector((state) => state.user.loggedInUser);
	const handleLogout = () => {
		dispatch(logout(null));
		window.location.reload();
	};

	if (loggedInUser) {
		return (
			<Popover width={200} position="bottom" withArrow shadow="md">
				<Popover.Target>
					<UnstyledButton
						style={{
							padding: "var(--mantine-spacing-md)",
							color: "var(--mantine-color-text)",
							borderRadius: "var(--mantine-radius-sm)",
						}}
					>
						<Flex gap={5} align="center">
							<Avatar
								variant="filled"
								radius="xl"
								color="blue"
								src={loggedInUser.image}
							/>
							<Box>
								<Text size="sm" fw={500}>
									{loggedInUser.fullName}
								</Text>
								<Text c="auto" size="xs">
									{loggedInUser.email}
								</Text>
							</Box>
							<IconChevronRight size="1rem" />
						</Flex>
					</UnstyledButton>
				</Popover.Target>
				<Popover.Dropdown w={150} p={4}>
					<Flex
						onClick={handleLogout}
						gap={5}
						align="center"
						className={classes.dropdown}
					>
						<IconLogout width={20} color="red" />
						<Text fw={500} size="sm" c="red">
							Logout
						</Text>
					</Flex>
				</Popover.Dropdown>
			</Popover>
		);
	} else {
		return (
			<Container className={classes.authButton}>
				<Anchor href="/login">
					<Button className={classes.userButton} variant="default">
						Log in
					</Button>
				</Anchor>
				<Anchor href="/register">
					<Button className={classes.userButton}>Sign Up</Button>
				</Anchor>
			</Container>
		);
	}
};
