import { Box, Container } from "@mantine/core";
import React, { useMemo } from "react";
import DisasterHeader from "../../components/disaster/header/DisasterHeader";
import { disasters } from "../../data/data";
import { useParams } from "react-router-dom";
import DisasterDescription from "../../components/disaster/body/DisasterDescription";
import DisasterSigns from "../../components/disaster/body/DisasterSigns";
import DisasterPreparation from "../../components/disaster/body/DisasterPreparation";
import DisasterDuring from "../../components/disaster/body/DisasterDuring";
import DisasterCarousel from "../../components/disaster/body/DisasterCarousel";
import DisasterAfter from "../../components/disaster/body/DisasterAfter";
import { TableOfContentsFloating } from "../../components/disaster/tableofcontents/TableOfContentsFloating";
import DisasterVideo from "../../components/disaster/header/DisasterVideo";

const DisasterContent = () => {
	const params = useParams();
	const disasterType = params.any;
	const dataInfo = useMemo(() => {
		return disasters.find((disaster) => disaster[disasterType]);
	}, [disasterType]);

	const data = dataInfo[disasterType];

	const dataTitle = data.title;
	const dataDescription = data.description;
	const dataVideoUrl = data.ytUrl;
	const dataSignItem = data.sign;
	const dataPrepareItem = data.prepare;
	const dataDuringItem = data.during;
	const dataAfterItem = data.after;
	const dataSignImg = data.signImg;
	const dataDuringImg = data.duringImg;

	return (
		<>
			<TableOfContentsFloating title={dataTitle} />
			<Container mx="auto" size="md" p={4}>
				<DisasterHeader title={dataTitle} />
				<DisasterDescription description={dataDescription} />
				<DisasterVideo ytUrl={dataVideoUrl} />

				<Box my={30}>
					<div className="flex justify-between max-sm:justify-center max-sm:flex-col">
						<div>
							<DisasterSigns
								title={dataTitle}
								data={dataSignItem}
							/>
						</div>
						<Box my="auto" className="md:w-[50%]">
							<DisasterCarousel dataImg={dataSignImg} />
						</Box>
					</div>
				</Box>
			</Container>
			<div className="bg-[#F8F9FA]">
				<DisasterPreparation title={dataTitle} data={dataPrepareItem} />
			</div>
			<Container mx="auto" size="md" p={4}>
				<Box my={30}>
					<div className="flex justify-between max-sm:justify-center max-sm:flex-col-reverse">
						<Box my="auto" className="md:w-[50%]">
							<DisasterCarousel dataImg={dataDuringImg} />
						</Box>
						<div>
							<DisasterDuring
								title={dataTitle}
								data={dataDuringItem}
							/>
						</div>
					</div>
				</Box>
			</Container>
			<div className="bg-[#F8F9FA]">
				<DisasterAfter title={dataTitle} data={dataAfterItem} />
			</div>
		</>
	);
};

export default DisasterContent;
