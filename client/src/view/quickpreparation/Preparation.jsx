import { Image, Accordion, Grid, Container, Flex, Text } from "@mantine/core";
import classes from "./Preparation.module.css";
import {
	emergencypreparednessgraph,
	quickpreparation,
	quickpreparationbg,
} from "../../assets/index";

const placeholder =
	"It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.";

export default function Preparation() {
	return (
		<div className={classes.wrapper}>
			<Container size="lg">
				<Grid id="faq-grid" gutter={50}>
					<Grid.Col mt={20} span={{ base: 12, md: 6 }}>
						<Image
							src={quickpreparationbg}
							alt="Quick Preparation Image"
						/>
						<Image
							src={emergencypreparednessgraph}
							alt="Quick Preparation Image"
						/>
					</Grid.Col>
					<Grid.Col span={{ base: 12, md: 6 }}>
						<Flex>
							<Text
								variant="gradient"
								gradient={{
									from: "#64AFE1",
									to: "#4182C3",
									deg: 45,
								}}
								fw={900}
								ta="center"
								className={classes.title}
							>
								Quick Preparation For Natural Disaster
							</Text>
						</Flex>

						<Accordion mt={20} variant="separated">
							<Accordion.Item
								className={classes.item}
								value="earthquakes"
							>
								<Accordion.Control>
									<Text className={classes.itemTitle}>
										Earthquakes
									</Text>
								</Accordion.Control>
								<Accordion.Panel>{placeholder}</Accordion.Panel>
							</Accordion.Item>

							<Accordion.Item
								className={classes.item}
								value="floods"
							>
								<Accordion.Control>
									<Text className={classes.itemTitle}>
										Floods
									</Text>
								</Accordion.Control>
								<Accordion.Panel>{placeholder}</Accordion.Panel>
							</Accordion.Item>

							<Accordion.Item
								className={classes.item}
								value="hurricanes"
							>
								<Accordion.Control>
									<Text className={classes.itemTitle}>
										Hurricanes
									</Text>
								</Accordion.Control>
								<Accordion.Panel>{placeholder}</Accordion.Panel>
							</Accordion.Item>

							<Accordion.Item
								className={classes.item}
								value="tornadoes"
							>
								<Accordion.Control>
									<Text className={classes.itemTitle}>
										Tornadoes
									</Text>
								</Accordion.Control>
								<Accordion.Panel>{placeholder}</Accordion.Panel>
							</Accordion.Item>

							<Accordion.Item
								className={classes.item}
								value="wildfires"
							>
								<Accordion.Control>
									<Text className={classes.itemTitle}>
										Wildfires
									</Text>
								</Accordion.Control>
								<Accordion.Panel>{placeholder}</Accordion.Panel>
							</Accordion.Item>

							<Accordion.Item
								className={classes.item}
								value="volcanic-eruptions"
							>
								<Accordion.Control>
									<Text className={classes.itemTitle}>
										Volcanic Eruptions
									</Text>
								</Accordion.Control>
								<Accordion.Panel>{placeholder}</Accordion.Panel>
							</Accordion.Item>
						</Accordion>
					</Grid.Col>
				</Grid>
			</Container>
		</div>
	);
}
