import {
	Text,
	Container,
	ActionIcon,
	Group,
	rem,
	Flex,
	Image,
	Anchor,
} from "@mantine/core";
import {
	IconBrandTwitter,
	IconBrandYoutube,
	IconBrandInstagram,
} from "@tabler/icons-react";
import classes from "./FooterLinks.module.css";
import { icon } from "../../assets";

const data = [
	{
		title: "Quick Links",
		links: [
			{ label: "Earthquakes", link: "/preparedness/earthquakes" },
			{ label: "Hurricanes", link: "/preparedness/hurricanes" },
			{ label: "Wildfires", link: "/preparedness/wildfires" },
			{ label: "Floods", link: "/preparedness/floods" },
			{ label: "Tornadoes", link: "/preparedness/tornadoes" },
			{ label: "Volcanic Eruptions", link: "/preparedness/eruptions" },
		],
	},
	{
		title: "Navigate",
		links: [
			{ label: "Home", link: "/" },
			{ label: "Preparedness", link: "/preparedness" },
			{ label: "News", link: "/news" },
			{ label: "Forums", link: "/forum" },
		],
	},
	{
		title: "Communicate",
		links: [
			{ label: "Join Discord", link: "#" },
			{ label: "Follow on Twitter", link: "#" },
			{ label: "Email newsletter", link: "#" },
			{ label: "GitHub discussions", link: "#" },
		],
	},
];

export function FooterLinks() {
	const groups = data.map((group) => {
		const links = group.links.map((link, index) => (
			<Anchor key={index} href={link.link} underline="never">
				<Text className={classes.link} component="a" href={link.link}>
					{link.label}
				</Text>
			</Anchor>
		));

		return (
			<div className={classes.wrapper} key={group.title}>
				<Text className={classes.title}>{group.title}</Text>
				{links}
			</div>
		);
	});

	return (
		<footer className={classes.footer}>
			<Container className={classes.inner}>
				<div className={classes.logo}>
					<Flex align="center">
						<Image src={icon} w={50} />
						<Text
							size="xl"
							fw={900}
							variant="gradient"
							gradient={{
								from: "orange",
								to: "indigo",
								deg: 121,
							}}
						>
							DisasterGuard
						</Text>
					</Flex>
					<Text size="xs" c="dimmed" className={classes.description}>
						Being prepared means understanding the diverse nature of
						disasters.
					</Text>
				</div>
				<div className={classes.groups}>{groups}</div>
			</Container>
			<Container className={classes.afterFooter}>
				<Text c="dimmed" size="sm">
					© 2020 DisasterGuard. All rights reserved.
				</Text>

				<Group
					gap={0}
					className={classes.social}
					justify="flex-end"
					wrap="nowrap"
				>
					<ActionIcon size="lg" color="gray" variant="subtle">
						<IconBrandTwitter
							style={{ width: rem(18), height: rem(18) }}
							stroke={1.5}
						/>
					</ActionIcon>
					<ActionIcon size="lg" color="gray" variant="subtle">
						<IconBrandYoutube
							style={{ width: rem(18), height: rem(18) }}
							stroke={1.5}
						/>
					</ActionIcon>
					<ActionIcon size="lg" color="gray" variant="subtle">
						<IconBrandInstagram
							style={{ width: rem(18), height: rem(18) }}
							stroke={1.5}
						/>
					</ActionIcon>
				</Group>
			</Container>
		</footer>
	);
}
