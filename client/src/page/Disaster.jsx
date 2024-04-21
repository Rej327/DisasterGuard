import React from "react";
import Navigation from "../view/navigation/Navigation";
import FooterSection from "../view/footer/FooterSection";
import DisasterContent from "../view/disaster/DisasterContent";

const Disaster = () => {
	return (
		<>
			<Navigation />
			<DisasterContent />
			<FooterSection />
		</>
	);
};

export default Disaster;
