import React from "react";
import ForumVIew from "../view/forum/ForumView";
import FooterSection from "../view/footer/FooterSection";
import Navigation from "../view/navigation/Navigation";

const Forum = () => {
	return (
		<>
			<Navigation />
			<ForumVIew />
			<FooterSection />
		</>
	);
};

export default Forum;
