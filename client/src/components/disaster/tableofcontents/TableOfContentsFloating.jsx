import cx from "clsx";
import { useState, useEffect } from "react";
import { Box, Text, Group, rem } from "@mantine/core";
import { IconListSearch } from "@tabler/icons-react";
import classes from "./TableOfContentsFloating.module.css";

export function TableOfContentsFloating({ title }) {
	const [active, setActive] = useState({ title });
	const links = [
		{ label: `About ${title}`, link: "#description", order: 1 },
		{ label: `Understanding ${title} Signs`, link: "#signs", order: 1 },
		{
			label: `How to Prepare for the ${title}`,
			link: "#prepare",
			order: 1,
		},
		{ label: `During the ${title}`, link: "#during", order: 1 },
		{ label: `After the ${title}`, link: "#after", order: 1 },
	];

	useEffect(() => {
		const handleScrollToSection = () => {
			const sections = links.map((link) =>
				document.querySelector(link.link)
			);
			const scrollPosition = window.scrollY + window.innerHeight / 3.5;
			let activeSectionIndex = 0;
			if (scrollPosition > 0) {
				const index = sections.findIndex(
					(section) => section.offsetTop > scrollPosition
				);
				if (index !== -1) {
					activeSectionIndex = index - 1;
				} else {
					activeSectionIndex = sections.length - 1;
				}
			}

			setActive(activeSectionIndex);
		};

		window.addEventListener("scroll", handleScrollToSection);

		return () => {
			window.removeEventListener("scroll", handleScrollToSection);
		};
	}, []);

	const handleItemClick = (event, index) => {
		event.preventDefault();
		if (index === 0) {
			window.scrollTo({ top: 0, behavior: "smooth" });
		} else {
			const targetSection = document.querySelector(links[index].link);
			const targetPosition = targetSection.offsetTop - 80;

			window.scrollTo({
				top: targetPosition,
				behavior: "smooth",
			});
		}
	};

	const items = links.map((item, index) => (
		<Box
			component="a"
			href={item.link}
			onClick={(event) => handleItemClick(event, index)}
			key={item.label}
			className={cx(classes.link, {
				[classes.linkActive]: active === index,
			})}
			style={{
				paddingLeft: `calc(${item.order} * var(--mantine-spacing-md))`,
			}}
		>
			{item.label}
		</Box>
	));

	return (
		<div className={`${classes.root} hidden 2xl:block`}>
			<Group mb="md">
				<IconListSearch
					style={{ width: rem(18), height: rem(18) }}
					stroke={1.5}
				/>
				<Text>Table of contents</Text>
			</Group>
			<div className={classes.links}>
				<div
					className={classes.indicator}
					style={{
						transform: `translateY(calc(${active} * var(--link-height) + var(--indicator-offset)))`,
					}}
				/>
				{items}
			</div>
		</div>
	);
}
