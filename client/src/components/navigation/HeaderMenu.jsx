import {
	Group,
	Button,
	UnstyledButton,
	Text,
	SimpleGrid,
	ThemeIcon,
	Anchor,
	Divider,
	Center,
	Box,
	Burger,
	Drawer,
	Collapse,
	ScrollArea,
	rem,
	useMantineTheme,
	Flex,
	Image,
	Container,
	Menu,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import { icon } from "../../assets";
import { disasterData, trackerLinks } from "../../data/data";
import { UserButton } from "../common/UserButton";
import classes from "./HeaderMegaMenu.module.css";
import NotificationComponent from "./NotificationComponent";
import QuickPreparationModal from "../hero/QuickPreparationModal";

const HeaderMenu = () => {
	const [opened, { open, close }] = useDisclosure(false);
	const [openedMenu, { open: menuOpen, close: menuClose }] =
		useDisclosure(false);
	const [drawerOpened, { toggle: toggleDrawer }] = useDisclosure(false);
	const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
	const [trackOpened, { toggle: trackLinks }] = useDisclosure(false);
	const theme = useMantineTheme();

	const scrollToContactUs = () => {
		const targetSection = document.getElementById("contact-us");
		if (targetSection) {
			const targetPosition = targetSection.offsetTop - 100;
			window.scrollTo({
				top: targetPosition,
			});
		}
	};

	const links = disasterData.map((item, index) => (
		<Anchor href={item.link} c="dark" key={index}>
			<UnstyledButton className={classes.subLink}>
				<Group wrap="nowrap" align="flex-start">
					<ThemeIcon size={34} variant="default" radius="md">
						<item.icon
							style={{ width: rem(22), height: rem(22) }}
							color={theme.colors.blue[6]}
						/>
					</ThemeIcon>
					<div>
						<Text size="sm" fw={500}>
							{item.title}
						</Text>
						<Text truncate="end" maw={200} size="xs" c="dimmed">
							{item.description}
						</Text>
					</div>
				</Group>
			</UnstyledButton>
		</Anchor>
	));

	const track = trackerLinks.map((item, index) => (
		<Anchor href={item.url} target="_blank" c="dark" key={index}>
			<UnstyledButton className={classes.subLink}>
				<Group wrap="nowrap" align="flex-start">
					<ThemeIcon size={34} variant="default" radius="md">
						<Image
							src={item.img}
							style={{ width: rem(22), height: rem(22) }}
						/>
					</ThemeIcon>
					<div>
						<Text size="sm" fw={500}>
							{item.title}
						</Text>
						<Text truncate="end" maw={200} size="xs" c="dimmed">
							{item.description}
						</Text>
					</div>
				</Group>
			</UnstyledButton>
		</Anchor>
	));

	return (
		<Box py={10}>
			<header className={classes.header}>
				<Group justify="space-between" h="100%">
					<Flex align="center">
						<Image src={icon} w={50} />
						<Text
							size="xl"
							fw={900}
							variant="gradient"
							gradient={{
								from: "#1F91DD",
								to: "#17A7C4",
								deg: 121,
							}}
						>
							DisasterGuard
						</Text>
					</Flex>

					<Group h="100%" gap={30} visibleFrom="sm">
						<Anchor
							underline="never"
							href="/"
							className={classes.link}
						>
							Home
						</Anchor>
						<Menu
							width={600}
							position="bottom"
							radius="md"
							shadow="md"
							withinPortal
							withArrow
							closeOnClickOutside
							trigger="click-hover"
							onClose={() => menuClose()}
							opened={openedMenu}
						>
							<Menu.Target>
								<Box onClick={menuOpen}>
									<Box className={classes.link}>
										<Center inline>
											<Box component="span" mr={5}>
												Preparedness
											</Box>
											<IconChevronDown
												style={{
													width: rem(16),
													height: rem(16),
												}}
												color={theme.colors.blue[6]}
											/>
										</Center>
									</Box>
								</Box>
							</Menu.Target>

							<Menu.Dropdown
								pt={10}
								mt={10}
								style={{ overflow: "hidden" }}
							>
								<Group justify="space-between" px="md">
									<Text fw={500}>Preparedness</Text>
									<Anchor href="/preparedness" fz="xs">
										View all
									</Anchor>
								</Group>
								<SimpleGrid cols={2} spacing={0}>
									{links}
								</SimpleGrid>
								<Divider my="sm" />
								<Text fw={500} ml={15}>
									Real-Time Disaster Tracking
								</Text>
								<SimpleGrid cols={2} spacing={0}>
									{track}
								</SimpleGrid>
								<div className={classes.dropdownFooter}>
									<Group justify="space-between">
										<div>
											<Text fw={500} fz="sm">
												Get Prepare
											</Text>
											<Text size="xs" c="dimmed">
												Preparedness is crucial for
												safety and security.
											</Text>
										</div>
										<Button
											variant="default"
											size="awuto"
											radius="sm"
											onClick={() => {
												open();
												menuClose();
											}}
										>
											Quick Preparations
										</Button>
									</Group>
								</div>
							</Menu.Dropdown>
						</Menu>
						<QuickPreparationModal
							menuClose={menuClose}
							opened={opened}
							open={open}
							close={close}
							variant="default"
							size="awuto"
							radius="sm"
							btnVisible={false}
						/>
						<Anchor
							underline="never"
							href="/news"
							className={classes.link}
						>
							News
						</Anchor>
						<Anchor
							underline="never"
							href="/forum"
							className={classes.link}
						>
							Forum
						</Anchor>
						<Anchor
							underline="never"
							onClick={scrollToContactUs}
							className={classes.link}
						>
							Contact Us
						</Anchor>
					</Group>

					<Flex align="center" justify="center" visibleFrom="sm">
						<NotificationComponent />
						<UserButton />
					</Flex>
					<Flex gap={10} align="center" hiddenFrom="sm">
						<NotificationComponent />
						<Burger
							opened={drawerOpened}
							onClick={toggleDrawer}
							hiddenFrom="sm"
						/>
					</Flex>
				</Group>
			</header>

			<Drawer
				opened={drawerOpened}
				withCloseButton={false}
				size="100%"
				padding="md"
				hiddenFrom="md"
				zIndex={10}
			>
				<ScrollArea mt={30} h={`calc(100vh - ${rem(80)})`} mx="-md">
					<Divider my="sm" />
					<Anchor underline="never" href="/" className={classes.link}>
						Home
					</Anchor>
					<UnstyledButton
						className={classes.link}
						onClick={toggleLinks}
					>
						<Flex w="100%" justify="space-between">
							<Text size="sm" mr={5}>
								Preparedness
							</Text>
							<Group>
								<Anchor href="/preparedness" fz="xs">
									View all
								</Anchor>
								<IconChevronDown
									style={{ width: rem(16), height: rem(16) }}
									color={theme.colors.blue[6]}
								/>
							</Group>
						</Flex>
					</UnstyledButton>
					<Collapse in={linksOpened}>
						{links}
						<Container w="100%" className={classes.dropdownFooter}>
							<Group>
								<Box>
									<Text fw={500} fz="sm">
										Get Prepare
									</Text>
									<Text size="xs" c="dimmed">
										Preparedness is crucial for safety and
										security.
									</Text>
								</Box>
								<Button
									variant="default"
									onClick={() => {
										menuClose();
										open();
										toggleDrawer();
									}}
								>
									Quick Preparations
								</Button>
							</Group>
						</Container>
					</Collapse>
					<UnstyledButton
						className={classes.link}
						onClick={trackLinks}
					>
						<Flex w="100%" justify="space-between">
							<Text size="sm" mr={5}>
								Real-Time Disaster Tracking
							</Text>
							<IconChevronDown
								style={{ width: rem(16), height: rem(16) }}
								color={theme.colors.blue[6]}
							/>
						</Flex>
					</UnstyledButton>
					<Collapse in={trackOpened}>{track}</Collapse>
					<Anchor
						underline="never"
						href="/forum"
						className={classes.link}
					>
						Forum
					</Anchor>
					<Anchor
						onClick={toggleDrawer}
						underline="never"
						href="#contact-us"
						className={classes.link}
					>
						Contact Us
					</Anchor>
					<Divider my="sm" />
					<UserButton />
				</ScrollArea>
			</Drawer>
		</Box>
	);
};

export default HeaderMenu;
