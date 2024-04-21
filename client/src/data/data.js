import {
	IconRipple,
	IconTornado,
	IconFlame,
	IconVolcano,
	IconStorm,
	IconWaveSawTool,
} from "@tabler/icons-react";
import {
	e_changewaterlevel,
	e_drop,
	e_foreshock,
	e_groundshaking,
	e_hazard,
	e_open,
	e_protect,
	e_strangesounds,
	e_visualchange,
	earthquakes_photo,
	eruption_photo,
	floods_photo,
	hurricane_photo,
	tornado_photo,
	wildfire_photo,
	sign_earthquake,
	sign_eruption,
	sign_floods,
	sign_hurricane,
	sign_tornado,
	sign_wildfire,
	fs_heavy,
	fs_rising,
	fs_flash,
	fs_blocked,
	fs_soil,
	fd_evac,
	fd_seek,
	fd_limit,
	fd_avoid,
	hs_forecast,
	hs_atmospheric,
	hs_satellite,
	hs_warnings,
	hd_stay,
	hd_listen,
	hd_inform,
	hd_monitor,
	hd_evac,
	vs_seismic,
	vs_deform,
	vs_changes,
	vd_order,
	vd_protect,
	ts_greenish,
	ts_wall,
	ts_funnel,
	ts_dust,
	td_basement,
	td_cover,
	w_increasesmoke,
	w_dry,
	w_animal,
	w_falling,
	w_d_shelter,
	w_d_protect,
	w_d_away,
} from "../assets/index";

export const towns = [
	"Lucena City",
	"Tayabas City",
	"Sariaya",
	"Candelaria",
	"Lucban",
	"Dolores",
	"Tiaong",
	"Pagbilao",
	"Atimonan",
	"Mauban",
	"Padre Burgos",
	"Real",
	"Infanta",
	"General Nakar",
	"Mulanay",
	"Catanauan",
	"General Luna",
	"Macalelon",
	"Pitogo",
	"Unisan",
	"Agdangan",
	"Alabat",
	"Burdeos",
	"Panukulan",
	"Polillo",
	"Jomalig",
	"Guinayangan",
	"Gumaca",
	"Lopez",
	"Calauag",
	"Quezon",
	"Tagkawayan",
];

export const disasterData = [
	{
		title: "Earthquakes",
		link: "/preparedness/earthquakes",
		description:
			"Earthquakes can cause widespread destruction, including collapsing buildings, tsunamis, and landslides. Preparedness involves knowing how to protect oneself during shaking and having plans for evacuation and communication.",
		icon: IconWaveSawTool,
	},
	{
		title: "Hurricanes",
		link: "/preparedness/hurricanes",
		description:
			"Hurricanes are powerful storms with high winds, heavy rainfall, and storm surges. Being prepared means having a hurricane survival kit, securing property, and following evacuation orders.",
		icon: IconStorm,
	},
	{
		title: "Wildfires",
		link: "/preparedness/wildfires",
		description:
			"Wildfires can spread quickly, destroying homes, wildlife habitats, and natural resources. Preparedness involves creating defensible space around properties, having an evacuation plan, and being aware of local fire conditions.",
		icon: IconFlame,
	},
	{
		title: "Floods",
		link: "/preparedness/floods",
		description:
			"Floods can result from heavy rainfall, storm surges, or the overflow of rivers and dams. Preparedness involves understanding flood risks, having an evacuation plan, and protecting property with flood barriers.",
		icon: IconRipple,
	},
	{
		title: "Tornadoes",
		link: "/preparedness/tornadoes",
		description:
			"Tornadoes are violent rotating columns of air that can cause extreme damage to buildings and vehicles. Preparedness involves having a tornado safety plan, identifying safe shelters, and staying informed through weather alerts.",
		icon: IconTornado,
	},
	{
		title: "Volcanic Eruptions",
		link: "/preparedness/eruptions",
		description:
			"Volcanic eruptions can eject ash, lava flows, and pyroclastic flows, causing widespread destruction and disrupting air travel. Preparedness involves understanding volcanic hazards, evacuation planning, and staying informed through volcanic monitoring.",
		icon: IconVolcano,
	},
];

export const learnDisaster = [
	{
		image: earthquakes_photo,
		title: "Earthquakes",
		category: "Nature Disaster",
		link: "/preparedness/earthquakes",
	},
	{
		image: hurricane_photo,
		title: "Hurricanes",
		category: "Nature Disaster",
		link: "/preparedness/hurricanes",
	},
	{
		image: wildfire_photo,
		title: "Wildfires",
		category: "Nature Disaster",
		link: "/preparedness/wildfires",
	},
	{
		image: floods_photo,
		title: "Floods",
		category: "Nature Disaster",
		link: "/preparedness/floods",
	},
	{
		image: tornado_photo,
		title: "Tornadoes",
		category: "Nature Disaster",
		link: "/preparedness/tornadoes",
	},
	{
		image: eruption_photo,
		title: "Volcanic Eruptions",
		category: "Nature Disaster",
		link: "/preparedness/eruptions",
	},
];

export const disasters = [
	{
		earthquakes: {
			title: "Earthquakes",
			description:
				"Earthquakes can cause widespread destruction, including collapsing buildings, tsunamis, and landslides. Preparedness involves knowing how to protect oneself during shaking and having plans for evacuation and communication.",
			ytUrl: "https://www.youtube.com/watch?v=BLEPakj1YTY&t=12s",
			signImg: [
				{
					title: "Ground Shaking",
					img: e_groundshaking,
				},
				{
					title: "Strange Sounds",
					img: e_strangesounds,
				},

				{
					title: "Change in Water Level",
					img: e_changewaterlevel,
				},
				{
					title: "Foreshock",
					img: e_foreshock,
				},
				{
					title: "Visual Change",
					img: e_visualchange,
				},
			],
			duringImg: [
				{
					title: "Drop, Cover, and Hold On",
					img: e_drop,
				},
				{
					title: "Stay Away from Hazards",
					img: e_hazard,
				},
				{
					title: "Protect Your Head and Neck",
					img: e_protect,
				},
				{
					title: "If Outdoors",
					img: e_open,
				},
			],

			sign: [
				{
					title: "Ground Shaking:",
					description:
						"The primary sign of an earthquake is the ground shaking. Even if it starts subtly, it can escalate rapidly.",
				},
				{
					title: "Strange Sounds:",
					description:
						"Some earthquakes are accompanied by strange sounds like rumbling or roaring, often compared to the sound of a freight train.",
				},
				{
					title: "Changes in Water Levels:",
					description:
						"Changes in the level of groundwater or wells can indicate seismic activity.",
				},
				{
					title: "Foreshocks:",
					description:
						"Foreshocks are smaller earthquakes that precede larger ones. While not always present, they can serve as a warning sign.",
				},
				{
					title: "Visual Changes:",
					description:
						"Earthquakes can cause visible changes in the landscape, such as cracks in the ground or changes in slope.",
				},
			],
			prepare: [
				{
					title: "Create an Emergency Plan:",
					description:
						"Establish a family emergency plan detailing evacuation routes, meeting points, and communication methods.",
				},
				{
					title: "Build an Emergency Kit:",
					description:
						"Assemble a disaster supply kit containing essentials like water, non-perishable food, first aid supplies, flashlight, batteries, and important documents.",
				},
				{
					title: "Secure Your Home:",
					description:
						"Anchor heavy furniture, appliances, and tall objects to walls to prevent them from toppling over during shaking.",
				},
				{
					title: "Know Safe Spots:",
					description:
						"Identify safe spots in each room, such as under sturdy tables or desks, away from windows and heavy objects.",
				},
				{
					title: "Practice Drills:",
					description:
						"Regularly conduct earthquake drills with your family or household members to ensure everyone knows what to do in the event of an earthquake.",
				},
			],
			during: [
				{
					title: "Drop, Cover, and Hold On:",
					description:
						"Drop to the ground, take cover under a sturdy piece of furniture, and hold on until the shaking stops.",
				},
				{
					title: "Stay Away from Hazards:",
					description:
						"Keep away from glass, windows, tall furniture, and other objects that could fall or shatter.",
				},
				{
					title: "Protect Your Head and Neck:",
					description:
						"Use your arms to cover your head and neck to protect yourself from falling debris.",
				},
				{
					title: "If Outdoors:",
					description:
						"Move to an open area away from buildings, trees, streetlights, and utility wires.",
				},
			],
			after: [
				{
					title: "Check for Injuries:",
					description:
						"Immediately assess yourself and others for injuries. Administer first aid as needed and seek medical attention for serious injuries.",
				},
				{
					title: "Inspect Your Surroundings:",
					description:
						"Carefully inspect your surroundings for potential hazards. Look for gas leaks, downed power lines, structural damage, and other dangers before entering or re-entering buildings.",
				},
				{
					title: "Listen to Authorities:",
					description:
						"Follow instructions from local authorities and emergency services. Pay attention to evacuation orders, shelter locations, and assistance centers. Cooperate with emergency personnel and volunteers.",
				},
				{
					title: "Communicate and Document:",
					description:
						"Contact loved ones to let them know you're safe and check on their well-being. Document any damage to your property for insurance purposes. Take photos or videos of the damage and keep records of any expenses related to repairs or temporary housing.",
				},
				{
					title: "Stay Informed:",
					description:
						"Stay tuned to local news and radio for updates and instructions from authorities. Follow official social media channels and emergency alerts for the latest information on recovery efforts, road closures, and community resources.",
				},
			],
		},

		floods: {
			title: "Floods",
			description:
				"Floods can result from heavy rainfall, storm surges, or the overflow of rivers and dams. Preparedness involves understanding flood risks, having an evacuation plan, and protecting property with flood barriers.",
			ytUrl: "https://www.youtube.com/watch?v=43M5mZuzHF8",
			signImg: [
				{
					title: "Heavy rainfall",
					img: fs_heavy,
				},
				{
					title: "Rising water levels",
					img: fs_rising,
				},

				{
					title: "Flash flood warnings",
					img: fs_flash,
				},
				{
					title: "Blocked drainage systems",
					img: fs_blocked,
				},
				{
					title: "Soil saturation",
					img: fs_soil,
				},
			],
			duringImg: [
				{
					title: "Evacuate if necessary",
					img: fd_evac,
				},
				{
					title: "Seek higher ground",
					img: fd_seek,
				},
				{
					title: "Listen to authorities",
					img: fd_limit,
				},
				{
					title: "Avoid floodwaters",
					img: fd_avoid,
				},
			],

			sign: [
				{
					title: "Heavy rainfall:",
					description:
						"Persistent or intense rainfall over a short period can lead to rapid flooding, especially in areas with poor drainage or in flood-prone regions.",
				},
				{
					title: "Rising water levels:",
					description:
						"Monitoring water levels in rivers, streams, and other bodies of water is essential. Sudden increases in water levels indicate potential flooding, especially if the water level exceeds the banks.",
				},
				{
					title: "Flash flood warnings:",
					description:
						"Pay attention to weather alerts and warnings issued by meteorological agencies. Flash flood warnings indicate rapidly developing floods that can occur within minutes to hours, often due to heavy rainfall, dam breaks, or ice or debris jams.",
				},
				{
					title: "Blocked drainage systems:",
					description:
						"Blocked storm drains, culverts, and gutters can impede the flow of water and increase the risk of localized flooding, particularly in urban areas. Clearing debris and maintaining drainage systems can help reduce flood risk.",
				},
				{
					title: "Soil saturation:",
					description:
						"Saturated soil from previous rainfall events can increase the likelihood of flooding, as the ground becomes less able to absorb additional water. Be especially vigilant in areas with already saturated soil during periods of heavy rainfall.",
				},
			],
			prepare: [
				{
					title: "Develop an emergency plan:",
					description:
						"Create a family emergency plan that includes evacuation routes, meeting points, and communication methods. Ensure that all family members know what to do in case of a flood and practice the plan regularly.",
				},
				{
					title: "Build an emergency kit:",
					description:
						"Assemble an emergency kit with essential supplies such as non-perishable food, water, medications, first aid supplies, flashlight, batteries, and important documents. Keep the kit in a waterproof container in an easily accessible location.",
				},
				{
					title: "Safeguard your home:",
					description:
						"Take steps to minimize flood damage to your home by elevating electrical appliances, installing flood barriers or sandbags, sealing cracks and gaps in walls and foundations, and securing outdoor items that could become projectiles in floodwaters.",
				},
				{
					title: "Stay informed:",
					description:
						"Stay abreast of weather forecasts, flood warnings, and evacuation orders issued by local authorities. Have multiple means of receiving alerts such as radios, mobile apps, or local news broadcasts.",
				},
			],
			during: [
				{
					title: "Evacuate if necessary:",
					description:
						"If authorities issue evacuation orders or if you feel unsafe in your current location, evacuate to higher ground immediately.",
				},
				{
					title: "Seek higher ground:",
					description:
						"Move to higher ground away from flood-prone areas such as riverbanks, streams, and low-lying areas. If you are unable to evacuate, move to the highest level of your home and avoid basements, as they can quickly flood.",
				},
				{
					title: "Listen to authorities:",
					description:
						"Stay tuned to emergency alerts and updates from local authorities via radio, TV, or mobile apps. Follow their instructions and guidance regarding evacuation, shelter locations, and safety precautions.",
				},
				{
					title: "Avoid floodwaters:",
					description:
						"Avoid contact with floodwaters whenever possible, as they may be contaminated with sewage, chemicals, or debris.",
				},
			],
			after: [
				{
					title: "Return home safely:",
					description:
						"Wait for authorities to give the all-clear before returning home after a flood. Once it's safe to do so, be cautious when re-entering your home and watch for hazards such as structural damage, electrical hazards, and contaminated water.",
				},
				{
					title: "Document damage:",
					description:
						"Take photographs or videos of the damage to your property and belongings for insurance claims and documentation purposes. Make a list of damaged items and their approximate value to assist with the claims process.",
				},
				{
					title: "Clean up safely:",
					description:
						"Wear protective gear such as gloves, boots, and masks when cleaning up floodwater, debris, and mud from your home. Use disinfectants to clean and sanitize affected areas to prevent mold growth and minimize health risks.",
				},
				{
					title: "Seek assistance:",
					description:
						"Reach out to local authorities, relief organizations, and community resources for assistance with cleanup efforts, temporary housing, financial aid, and emotional support.",
				},
			],
		},

		hurricanes: {
			title: "Hurricanes",
			description:
				"Hurricanes are powerful storms with high winds, heavy rainfall, and storm surges. Being prepared means having a hurricane survival kit, securing property, and following evacuation orders.",
			ytUrl: "https://www.youtube.com/watch?v=xHRbnuB9F1I",
			signImg: [
				{
					title: "Weather forecasts",
					img: hs_forecast,
				},
				{
					title: "Hurricane watches and warnings",
					img: hs_warnings,
				},
				{
					title: "Changes in atmospheric pressure",
					img: hs_atmospheric,
				},

				{
					title: "Satellite imagery",
					img: hs_satellite,
				},
			],
			duringImg: [
				{
					title: "Stay indoors",
					img: hd_stay,
				},
				{
					title: "Listen to authorities",
					img: hd_listen,
				},
				{
					title: "Stay informed",
					img: hd_inform,
				},
				{
					title: "Monitor conditions",
					img: hd_monitor,
				},
				{
					title: "Be ready to evacuate",
					img: hd_evac,
				},
			],

			sign: [
				{
					title: "Weather forecasts:",
					description:
						"Pay attention to weather forecasts from trusted sources. Look for indications of tropical cyclone formation, including low-pressure systems, organized thunderstorm activity, and favorable atmospheric conditions.",
				},
				{
					title: "Hurricane watches and warnings:",
					description:
						"Take heed of hurricane watches and warnings issued by authorities. A hurricane watch means that hurricane conditions, including sustained winds of 74 mph (119 km/h) or higher, are possible within the specified area within 48 hours. A hurricane warning indicates that hurricane conditions are expected within the specified area within 36 hours.",
				},
				{
					title: "Changes in atmospheric pressure:",
					description:
						"Keep an eye on changes in atmospheric pressure, as rapid drops in pressure can indicate the approach of a hurricane. Falling pressure is often accompanied by increasing winds and deteriorating weather conditions.",
				},
				{
					title: "Satellite imagery:",
					description:
						"Monitor satellite imagery to track the development and movement of hurricanes. Look for well-defined circulation patterns, spiral bands of clouds, and a well-defined eye at the center of the storm, which are characteristic features of mature hurricanes.",
				},
			],
			prepare: [
				{
					title: "Develop an emergency plan:",
					description:
						"Create a family emergency plan that includes evacuation routes, meeting points, and communication methods. Discuss the plan with all family members and practice it regularly to ensure everyone knows what to do in case of a hurricane.",
				},
				{
					title: "Assemble an emergency kit:",
					description:
						"Prepare an emergency kit with essential supplies such as non-perishable food, water, medications, first aid supplies, flashlight, batteries, and important documents. Include enough supplies to last at least 72 hours.",
				},
				{
					title: "Secure your home:",
					description:
						"Take steps to reinforce your home and minimize damage from high winds and flooding. Install storm shutters or board up windows, reinforce garage doors, trim trees and shrubs, and secure outdoor furniture and objects that could become projectiles in high winds.",
				},
				{
					title: "Stay informed:",
					description:
						"Stay abreast of weather forecasts, hurricane watches, and warnings issued by local authorities and meteorological agencies. Have multiple means of receiving alerts, such as Weather Radio, mobile apps, or local news broadcasts.",
				},
				{
					title: "Evacuate if necessary:",
					description:
						"Follow evacuation orders issued by authorities if you live in a vulnerable area or in the path of the hurricane. Evacuate early to avoid traffic congestion and potential hazards, and seek shelter in designated evacuation centers or with friends or family outside the affected area.",
				},
			],
			during: [
				{
					title: "Stay indoors:",
					description:
						"Seek shelter indoors and stay away from windows, glass doors, and exterior walls. Choose a small, windowless interior room or hallway on the lowest level of your home to ride out the storm.",
				},
				{
					title: "Listen to authorities:",
					description:
						"Stay tuned to weather updates and follow instructions from local authorities and emergency services. Heed evacuation orders if issued, and seek shelter in designated evacuation centers if necessary.",
				},
				{
					title: "Stay informed:",
					description:
						"Keep your mobile phone charged and stay connected with family members and neighbors to ensure everyone's safety.",
				},
				{
					title: "Monitor conditions:",
					description:
						"Keep track of the hurricane's progress using weather updates and radar imagery. Be prepared for strong winds, heavy rainfall, storm surge, and possible tornadoes associated with the hurricane.",
				},
				{
					title: "Be ready to evacuate:",
					description:
						"Be prepared to evacuate quickly if conditions worsen or if instructed to do so by authorities.",
				},
			],
			after: [
				{
					title: "Assess damage:",
					description:
						"Once it's safe to do so, assess the damage to your property and belongings. Check for structural damage, roof leaks, and any hazards such as downed power lines or trees.",
				},
				{
					title: "Contact authorities:",
					description:
						"Report any emergencies, such as injuries, trapped individuals, or gas leaks, to local authorities or emergency services immediately. Follow their instructions and guidance regarding safety precautions and assistance programs.",
				},
				{
					title: "Clean up debris:",
					description:
						"Safely remove debris, fallen trees, and other hazards from your property to prevent further damage and facilitate recovery efforts. Use caution when handling debris, and wear protective gear such as gloves and sturdy shoes.",
				},
				{
					title: "Restore utilities:",
					description:
						"Contact utility companies to report outages or damage and follow their instructions for restoration and safety procedures.",
				},
				{
					title: "Seek assistance:",
					description:
						"Reach out to local authorities, relief organizations, and community resources for assistance with cleanup efforts, temporary housing, financial aid, and emotional support.",
				},
			],
		},

		eruptions: {
			title: "Volcanic Eruptions",
			description:
				"Volcanic eruptions can eject ash, lava flows, and pyroclastic flows, causing widespread destruction and disrupting air travel. Preparedness involves understanding volcanic hazards, evacuation planning, and staying informed through volcanic monitoring.",
			ytUrl: "https://www.youtube.com/watch?v=Z-w_z9yobpE",
			signImg: [
				{
					title: "Increased seismic activity",
					img: vs_seismic,
				},
				{
					title: "Ground deformation:",
					img: vs_deform,
				},

				{
					title: "Changes in volcanic activity",
					img: vs_changes,
				},
			],
			duringImg: [
				{
					title: "Follow evacuation orders",
					img: vd_order,
				},
				{
					title: "Protect yourself from ashfall",
					img: vd_protect,
				},
			],

			sign: [
				{
					title: "Increased seismic activity:",
					description:
						"Unusual earthquakes or tremors can indicate magma movement beneath the surface.",
				},
				{
					title: "Ground deformation:",
					description:
						"Bulging or swelling of the volcano's surface due to magma pressure.",
				},
				{
					title: "Gas emissions:",
					description:
						"Changes in the composition or intensity of gas emissions, particularly sulfur dioxide (SO2).",
				},
				{
					title: "Thermal anomalies:",
					description:
						"Hot spots detected by satellite or ground-based thermal monitoring.",
				},
				{
					title: "Changes in volcanic activity:",
					description:
						"Such as increased steam venting, new fissures, or changes in volcanic crater morphology.",
				},
			],
			prepare: [
				{
					title: "Stay informed:",
					description:
						"Keep yourself updated with information from local authorities, volcanic observatories, and official sources about volcanic activity in your area.",
				},
				{
					title: "Emergency supplies:",
					description:
						"Assemble an emergency kit with essential supplies such as non-perishable food, water, medications, first aid supplies, flashlight, batteries, and important documents.",
				},
				{
					title: "Evacuation plan:",
					description:
						"Develop a family evacuation plan and identify multiple evacuation routes in case roads become blocked.",
				},
				{
					title: "Protective measures:",
					description:
						"Familiarize yourself with protective measures such as sheltering in place during ashfall, wearing long-sleeved clothing and goggles to protect against ash particles, and using masks to filter out volcanic ash.",
				},
				{
					title: "Community readiness:",
					description:
						"Participate in drills and community preparedness initiatives to ensure everyone knows what to do in the event of a volcanic eruption.",
				},
			],
			during: [
				{
					title: "Follow evacuation orders:",
					description:
						"If authorities issue evacuation orders, follow them promptly and evacuate to a safe location outside the danger zone.",
				},
				{
					title: "Protect yourself from ashfall:",
					description:
						"If you cannot evacuate and are indoors during ashfall, close all windows and doors, and seal any gaps to prevent ash from entering.",
				},
				{
					title: "Stay informed:",
					description:
						"Keep abreast of updates and instructions from local authorities and emergency services.",
				},
				{
					title: "Avoid restricted areas:",
					description:
						"Stay away from areas identified as hazardous zones by authorities, including areas close to the volcano, river valleys prone to lahars (volcanic mudflows), and low-lying areas susceptible to pyroclastic flows or volcanic gases.",
				},
				{
					title: "Be prepared for aftershocks:",
					description:
						"Be prepared for additional earthquakes and aftershocks by securing heavy objects, staying away from unstable structures, and following earthquake safety procedures if necessary.",
				},
			],
			after: [
				{
					title: "Await official instructions:",
					description:
						"Wait for authorities to issue updates and guidance on the current situation and any ongoing risks.",
				},
				{
					title: "Assess property damage:",
					description:
						"Evaluate the extent of damage to your property and belongings caused by the eruption, including ashfall, debris, and potential structural damage.",
				},
				{
					title: "Clean up safely:",
					description:
						"Safely remove ash and debris from your property using appropriate protective gear. Follow local guidelines for ash disposal to minimize environmental impact.",
				},
				{
					title: "Monitor health hazards:",
					description:
						"Be aware of potential health hazards associated with volcanic ash, gases, and other pollutants released during the eruption.",
				},
				{
					title: "Support community recovery:",
					description:
						"Participate in community cleanup efforts and support local recovery initiatives to help rebuild affected areas and assist those in need.",
				},
			],
		},

		tornadoes: {
			title: "Tornadoes",
			description:
				"Tornadoes are violent rotating columns of air that can cause extreme damage to buildings and vehicles. Preparedness involves having a tornado safety plan, identifying safe shelters, and staying informed through weather alerts.",
			ytUrl: "https://www.youtube.com/watch?v=h3z50ZX_RMM",
			signImg: [
				{
					title: "Dark, greenish skies",
					img: ts_greenish,
				},
				{
					title: "Rotating wall cloud",
					img: ts_wall,
				},

				{
					title: "Funnel cloud",
					img: ts_funnel,
				},
				{
					title: "Debris cloud or dust swirl",
					img: ts_dust,
				},
			],
			duringImg: [
				{
					title: "Develop a tornado emergency plan",
					img: td_basement,
				},
				{
					title: "Secure your property",
					img: td_cover,
				},
			],

			sign: [
				{
					title: "Dark, greenish skies:",
					description:
						"Tornadoes can be associated with dark, greenish skies due to the presence of hail and rain in the storm clouds. This unusual coloration can indicate the presence of severe weather and the potential for tornado development.",
				},
				{
					title: "Rotating wall cloud:",
					description:
						"A rotating wall cloud is a large, low-hanging cloud formation attached to the base of a thunderstorm. It may appear as a rotating, lowering mass of clouds that extends beneath the storm. Rotating wall clouds are often precursors to tornado formation.",
				},
				{
					title: "Funnel cloud:",
					description:
						"A funnel cloud is a rotating column of air extending from the base of a thunderstorm cloud but not touching the ground. Funnel clouds are typically visible as a cone-shaped cloud formation and can indicate the potential for tornado development.",
				},
				{
					title: "Loud, continuous roar:",
					description:
						"Tornadoes can produce a loud, continuous roar that has been described as similar to a freight train or jet engine. This sound is caused by the high winds and debris swirling within the tornado and may be audible even from a distance.",
				},
				{
					title: "Debris cloud or dust swirl:",
					description:
						"A tornado may kick up dust, debris, and other materials from the ground, creating a visible debris cloud or dust swirl beneath the funnel cloud. This swirling debris is a clear indicator of an active tornado and poses significant danger to anyone in its path.",
				},
			],
			prepare: [
				{
					title: "Develop a tornado emergency plan:",
					description:
						"Create a family emergency plan that includes designated shelter locations in your home, workplace, or school. Identify the safest areas, such as basements, storm cellars, or interior rooms on the lowest level, away from windows.",
				},
				{
					title: "Assemble an emergency kit:",
					description:
						"Prepare an emergency kit with essential supplies such as non-perishable food, water, medications, first aid supplies, flashlight, batteries, and important documents. Include enough supplies to last at least 72 hours.",
				},
				{
					title: "Stay informed:",
					description:
						"Stay abreast of weather forecasts and tornado warnings issued by local authorities and meteorological agencies. Have multiple means of receiving alerts.",
				},
				{
					title: "Practice tornado drills:",
					description:
						"Conduct tornado drills regularly to ensure that everyone in your household knows what to do in the event of a tornado. Practice seeking shelter quickly and safely, and review your emergency plan with family members, coworkers, and classmates.",
				},
				{
					title: "Secure your property:",
					description:
						"Take steps to reinforce your home and minimize damage from high winds and flying debris. Install storm shutters or board up windows, reinforce garage doors, trim trees and shrubs, and secure outdoor furniture and objects that could become projectiles in high winds.",
				},
			],
			during: [
				{
					title: "Seek shelter immediately:",
					description:
						"Move to a designated tornado shelter or the safest area of your home, such as a basement, storm cellar, or interior room on the lowest level, away from windows. If you're outdoors, seek shelter in a sturdy building or lie flat in a low-lying area, covering your head with your hands.",
				},
				{
					title: "Cover your head:",
					description:
						"Protect your head and neck from flying debris by covering them with your arms, a pillow, or a heavy blanket. Wear a helmet if available, as head injuries are common during tornadoes.",
				},
				{
					title: "Monitor weather updates:",
					description:
						"Stay tuned to weather updates and warnings issued by local authorities and meteorological agencies.",
				},
				{
					title: "Listen for warning signs:",
					description:
						"Pay attention to warning signs such as a loud, continuous roar, rotating wall clouds, or the sound of a freight train. Take immediate shelter if you observe these signs, as they indicate the presence of an active tornado.",
				},
				{
					title: "Stay indoors until the threat has passed:",
					description:
						"Remain in your safe shelter until you receive the all-clear signal from authorities or until the tornado warning has expired. Do not attempt to venture outside or assess damage until it's safe to do so, as additional tornadoes may develop.",
				},
			],
			after: [
				{
					title: "Check for injuries:",
					description:
						"Check yourself and your loved ones for injuries and provide first aid as needed. Seek medical attention for any serious injuries and contact emergency services if necessary.",
				},
				{
					title: "Assess damage:",
					description:
						"Once it's safe to do so, assess the damage to your property and belongings. Be cautious of hazards such as downed power lines, gas leaks, and unstable structures.",
				},
				{
					title: "Secure your property:",
					description:
						"Take immediate steps to secure your property and prevent further damage. Cover broken windows with tarps or plywood, remove debris blocking entryways, and turn off utilities if instructed to do so by authorities.",
				},
				{
					title: "Communicate with loved ones:",
					description:
						"Check in with family members, friends, and neighbors to ensure their safety and well-being. Use text messages or social media if phone lines are down or overloaded.",
				},
				{
					title: "Seek assistance:",
					description:
						"Reach out to local authorities, relief organizations, and community resources for assistance with cleanup efforts, temporary housing, financial aid, and emotional support.",
				},
			],
		},

		wildfires: {
			title: "Wildfires",
			description:
				"Wildfires can spread quickly, destroying homes, wildlife habitats, and natural resources. Preparedness involves creating defensible space around properties, having an evacuation plan, and being aware of local fire conditions.",
			ytUrl: "https://www.youtube.com/watch?v=_bNLtjHG9dM",

			signImg: [
				{
					title: "Increased Smoke",
					img: w_increasesmoke,
				},
				{
					title: "Dry, Windy Conditions",
					img: w_dry,
				},
				{
					title: "Unusual Animal Behavior",
					img: w_animal,
				},
				{
					title: "Falling Ash",
					img: w_falling,
				},
			],
			duringImg: [
				{
					title: "Shelter in Place If Necessary",
					img: w_d_shelter,
				},
				{
					title: "Protect Yourself from Smoke",
					img: w_d_protect,
				},

				{
					title: "Stay Away from Fire Zones",
					img: w_d_away,
				},
			],

			sign: [
				{
					title: "Increased Smoke:",
					description:
						"Keep an eye out for an increase in smoke in your area, especially if it's accompanied by a strong, persistent smell of burning. The presence of smoke can indicate a wildfire nearby or in the vicinity.",
				},
				{
					title: "Dry, Windy Conditions:",
					description:
						"Pay attention to weather forecasts and be cautious during periods of hot, dry, and windy weather. These conditions can increase the likelihood of wildfires and cause them to spread rapidly.",
				},
				{
					title: "Unusual Animal Behavior:",
					description:
						"Keep an eye out for signs of distressed or panicked animals, as they can indicate the presence of nearby wildfires. Animals may exhibit unusual behavior in response to the presence of wildfires, such as fleeing the area or gathering near water sources.",
				},
				{
					title: "Falling Ash:",
					description:
						"If you notice falling ash or ember showers in your area, it may be a sign that a wildfire is nearby and spreading. Falling ash can pose health risks and indicate the need to take immediate precautions.",
				},
			],
			prepare: [
				{
					title: "Harden Your Home:",
					description:
						"Harden your home against wildfire by using fire-resistant building materials, such as Class A roofing materials, siding, and windows. Install spark arrestors on chimneys and vents, and consider retrofitting your home with ember-resistant features.",
				},
				{
					title: "Create a Defensible Space:",
					description:
						"Maintain a defensible space around your home by clearing flammable vegetation, debris, and combustible materials from the area within at least 30 feet of your home. Trim trees and shrubs, remove dead vegetation, and keep your lawn well-watered and mowed.",
				},
				{
					title: "Prepare an Emergency Kit:",
					description:
						"Assemble an emergency kit with essential supplies such as non-perishable food, water, medications, first aid supplies, flashlight, batteries, and important documents. Include enough supplies to last at least 72 hours.",
				},
				{
					title: "Develop a Family Evacuation Plan:",
					description:
						"Create a family evacuation plan that includes designated evacuation routes, meeting points, and communication methods. Practice the plan regularly with all family members to ensure everyone knows what to do in case of a wildfire.",
				},
				{
					title: "Stay Informed:",
					description:
						"Stay abreast of weather forecasts, wildfire alerts, and evacuation orders issued by local authorities and emergency services. Have multiple means of receiving alerts, such as mobile apps, or local news broadcasts.",
				},
			],
			during: [
				{
					title: "Stay Informed:",
					description:
						"Monitor weather forecasts, fire behavior, and evacuation routes using reliable sources of information such as local news outlets and official government websites.",
				},
				{
					title: "Evacuate If Instructed:",
					description:
						"If evacuation orders are issued for your area, follow them immediately and evacuate to a safe location as directed. Do not delay evacuation, as wildfires can spread rapidly and pose significant risks to those in their path.",
				},
				{
					title: "Shelter in Place If Necessary:",
					description:
						"If evacuation is not possible or safe, seek shelter indoors in a sturdy building and close all windows and doors to prevent smoke from entering. Use air purifiers, fans, or wet towels to filter and improve indoor air quality, and stay tuned to emergency alerts for updates and instructions.",
				},
				{
					title: "Protect Yourself from Smoke:",
					description:
						"If you are outdoors or in an area affected by smoke, minimize exposure by wearing respirator masks or covering your nose and mouth with damp cloths. Limit outdoor activities, especially strenuous exercise, and seek shelter indoors if possible.",
				},
				{
					title: "Stay Away from Fire Zones:",
					description:
						"Avoid areas affected by wildfires, as they can be extremely dangerous due to fast-moving flames, intense heat, and shifting winds. Do not attempt to approach or cross fire lines, and follow the instructions of firefighters and emergency personnel.",
				},
			],
			after: [
				{
					title: "Check for Hazards:",
					description:
						"Be cautious when returning to your home or property after a wildfire. Watch for hazards such as hot spots, downed power lines, unstable structures, and smoldering debris. Wear protective clothing, including gloves, sturdy shoes, and masks, to minimize exposure to ash and debris.",
				},
				{
					title: "Assess Damage:",
					description:
						"Once it's safe to do so, assess the damage to your property and belongings. Check for structural damage, fire damage, and potential hazards such as fallen trees and ash buildup.",
				},
				{
					title: "Clean Up Debris:",
					description:
						"Safely remove debris, ash, and other hazards from your property to prevent further damage and facilitate recovery efforts. Use caution when handling debris, and wear protective gear such as gloves, masks, and goggles to minimize health risks.",
				},
				{
					title: "Seek Assistance:",
					description:
						"Reach out to local authorities, relief organizations, and community resources for assistance with cleanup efforts, temporary housing, financial aid, and emotional support. Take advantage of available resources to help you navigate the recovery process and rebuild your life after the wildfire.",
				},
			],
		},
	},
];

export const trackerLinks = [
	{
		title: "Earthquakes",
		img: sign_earthquake,
		description: "NDRRMOC Tracking Services",
		url: "https://monitoring-dashboard.ndrrmc.gov.ph/page/earthquake",
	},
	{
		title: "Hurricanes",
		img: sign_hurricane,
		description: "NDRRMOC Tracking Services",
		url: "https://monitoring-dashboard.ndrrmc.gov.ph/page/weather",
	},
	{
		title: "Wildfires",
		img: sign_wildfire,
		description: "GREENPEACE: Global Fire Dashboard",
		url: "https://maps.greenpeace.org/fire_dashboard/",
	},
	{
		title: "Torandoes",
		img: sign_tornado,
		description:
			"ARCGIS: This map contains continuously updated U.S. tornado reports, wind storm reports and hail storm reports. You can click on each to receive information about the specific location and read a short description about the issue.",
		url: "https://www.arcgis.com/apps/dashboards/3ca8efb6f5684fc88e9761f6a26e2b5d",
	},
	{
		title: "Floods",
		img: sign_floods,
		description: "NDRRMOC Tracking Services",
		url: "https://monitoring-dashboard.ndrrmc.gov.ph/page/flood_advisory",
	},
	{
		title: "Volcanic Eruptions",
		img: sign_eruption,
		description: "NDRRMOC Tracking Services",
		url: "https://monitoring-dashboard.ndrrmc.gov.ph/page/volcanos",
	},
];

export const EARTHQUAKE = "Earthquakes";
export const HURRICANES = "Hurricanes";
export const WILDFIRES = "Wildfires";
export const FLOODS = "Floods";
export const TORNADOES = "Tornadoes";
export const VOLCANIC_ERUPTIONS = "Volcanic Eruptions";
export const INSTRUCTIONS = "Instructions";
export const TOOLS = "Tools";
export const EVACUATION_LOCATION = "Evacuation Location";

export const quickPreparationData = {
	[EARTHQUAKE]: {
		instruction: [
			{
				title: "Create an Emergency Plan:",
				description:
					"Establish a family emergency plan detailing evacuation routes, meeting points, and communication methods.",
			},
			{
				title: "Build an Emergency Kit:",
				description:
					"Assemble a disaster supply kit containing essentials like water, non-perishable food, first aid supplies, flashlight, batteries, and important documents.",
			},
			{
				title: "Secure Your Home:",
				description:
					"Anchor heavy furniture, appliances, and tall objects to walls to prevent them from toppling over during shaking.",
			},
			{
				title: "Know Safe Spots:",
				description:
					"Identify safe spots in each room, such as under sturdy tables or desks, away from windows and heavy objects.",
			},
			{
				title: "Practice Drills:",
				description:
					"Regularly conduct earthquake drills with your family or household members to ensure everyone knows what to do in the event of an earthquake.",
			},
		],
		tools: [
			{
				label: "Emergency kit",
				checked: false,
				key: "Emergency kit",
			},
			{
				label: "First aid kit",
				checked: false,
				key: "First aid kit",
			},
			{
				label: "Adjustable wrench (for turning off utilities)",
				checked: false,
				key: "Adjustable wrench",
			},
			{
				label: "Work gloves",
				checked: false,
				key: "Work gloves",
			},
			{
				label: "Pry bar (for removing debris)",
				checked: false,
				key: "Pry bar",
			},
			{
				label: "Fire extinguisher",
				checked: false,
				key: "Fire extinguisher",
			},
			{
				label: "Battery-powered or hand-crank radio",
				checked: false,
				key: "Battery-powered or hand-crank radio",
			},
			{
				label: "List of important contacts",
				checked: false,
				key: "List of important contacts",
			},
			{
				label: "Sturdy shoes or boots",
				checked: false,
				key: "Sturdy shoes or boots",
			},
			{
				label: "Warm clothing",
				checked: false,
				key: "Warm clothing",
			},
			{
				label: "Blankets",
				checked: false,
				key: "Blankets",
			},
			{
				label: "Personal hygiene items",
				checked: false,
				key: "Personal hygiene items",
			},
			{
				label: "Cash",
				checked: false,
				key: "Cash",
			},
			{
				label: "Important documents in waterproof container",
				checked: false,
				key: "Important documents in waterproof container",
			},
			{
				label: "Extra batteries",
				checked: false,
				key: "Extra batteries",
			},
			{
				label: "Matches",
				checked: false,
				key: "Matches",
			},
			{
				label: "Candles",
				checked: false,
				key: "Candles",
			},
			{
				label: "Fuel for generators (if applicable)",
				checked: false,
				key: "Fuel for generators",
			},
			{
				label: "Baby formula (if needed)",
				checked: false,
				key: "Baby formula",
			},
			{
				label: "Diapers (if needed)",
				checked: false,
				key: "Diapers",
			},
			{
				label: "Prescription medications",
				checked: false,
				key: "Prescription medications",
			},
		],
		evacuation: ["https://www.youtube.com/watch?v=BLEPakj1YTY&t=12s"],
	},
	[HURRICANES]: {
		instruction: [
			{
				title: "Develop an emergency plan:",
				description:
					"Create a family emergency plan that includes evacuation routes, meeting points, and communication methods. Discuss the plan with all family members and practice it regularly to ensure everyone knows what to do in case of a hurricane.",
			},
			{
				title: "Assemble an emergency kit:",
				description:
					"Prepare an emergency kit with essential supplies such as non-perishable food, water, medications, first aid supplies, flashlight, batteries, and important documents. Include enough supplies to last at least 72 hours.",
			},
			{
				title: "Secure your home:",
				description:
					"Take steps to reinforce your home and minimize damage from high winds and flooding. Install storm shutters or board up windows, reinforce garage doors, trim trees and shrubs, and secure outdoor furniture and objects that could become projectiles in high winds.",
			},
			{
				title: "Stay informed:",
				description:
					"Stay abreast of weather forecasts, hurricane watches, and warnings issued by local authorities and meteorological agencies. Have multiple means of receiving alerts, such as Weather Radio, mobile apps, or local news broadcasts.",
			},
			{
				title: "Evacuate if necessary:",
				description:
					"Follow evacuation orders issued by authorities if you live in a vulnerable area or in the path of the hurricane. Evacuate early to avoid traffic congestion and potential hazards, and seek shelter in designated evacuation centers or with friends or family outside the affected area.",
			},
		],
		tools: [
			{
				label: "Water",
				checked: false,
				key: "Water",
			},
			{
				label: "Non-perishable food",
				checked: false,
				key: "Non-perishable food",
			},
			{
				label: "First aid kit",
				checked: false,
				key: "First aid kit",
			},
			{
				label: "Flashlight and batteries",
				checked: false,
				key: "Flashlight and batteries",
			},
			{
				label: "Emergency plan",
				checked: false,
				key: "Emergency plan",
			},
			{
				label: "Emergency contacts",
				checked: false,
				key: "Emergency contacts",
			},
			{
				label: "Tools (hammer, nails, saw, etc.)",
				checked: false,
				key: "Tools",
			},
			{
				label: "Tarp or plastic sheeting",
				checked: false,
				key: "Tarp or plastic sheeting",
			},
			{
				label: "Generator",
				checked: false,
				key: "Generator",
			},
			{
				label: "Fuel for generator",
				checked: false,
				key: "Fuel for generator",
			},
			{
				label: "Duct tape",
				checked: false,
				key: "Duct tape",
			},
			{
				label: "Portable radio",
				checked: false,
				key: "Portable radio",
			},
			{
				label: "Charged power banks",
				checked: false,
				key: "Charged power banks",
			},
			{
				label: "Fire extinguisher",
				checked: false,
				key: "Fire extinguisher",
			},
			{
				label: "Manual can opener",
				checked: false,
				key: "Manual can opener",
			},
			{
				label: "Whistle",
				checked: false,
				key: "Whistle",
			},
			{
				label: "Garbage bags",
				checked: false,
				key: "Garbage bags",
			},
			{
				label: "Matches",
				checked: false,
				key: "Matches",
			},
			{
				label: "Personal hygiene items",
				checked: false,
				key: "Personal hygiene items",
			},
			{
				label: "Cash",
				checked: false,
				key: "Cash",
			},
			{
				label: "Entertainment (books, games, etc.)",
				checked: false,
				key: "Entertainment",
			},
		],
		evacuation: ["https://www.youtube.com/watch?v=xHRbnuB9F1I"],
	},
	[FLOODS]: {
		instruction: [
			{
				title: "Develop an emergency plan:",
				description:
					"Create a family emergency plan that includes evacuation routes, meeting points, and communication methods. Ensure that all family members know what to do in case of a flood and practice the plan regularly.",
			},
			{
				title: "Build an emergency kit:",
				description:
					"Assemble an emergency kit with essential supplies such as non-perishable food, water, medications, first aid supplies, flashlight, batteries, and important documents. Keep the kit in a waterproof container in an easily accessible location.",
			},
			{
				title: "Safeguard your home:",
				description:
					"Take steps to minimize flood damage to your home by elevating electrical appliances, installing flood barriers or sandbags, sealing cracks and gaps in walls and foundations, and securing outdoor items that could become projectiles in floodwaters.",
			},
			{
				title: "Stay informed:",
				description:
					"Stay abreast of weather forecasts, flood warnings, and evacuation orders issued by local authorities. Have multiple means of receiving alerts such as radios, mobile apps, or local news broadcasts.",
			},
		],
		tools: [
			{
				label: "Emergency evacuation kit",
				checked: false,
				key: "Emergency evacuation kit",
			},
			{
				label: "Waterproof containers",
				checked: false,
				key: "Waterproof containers",
			},
			{
				label: "Sandbags",
				checked: false,
				key: "Sandbags",
			},
			{
				label: "Shovel",
				checked: false,
				key: "Shovel",
			},
			{
				label: "Rubber boots",
				checked: false,
				key: "Rubber boots",
			},
			{
				label: "Life jackets",
				checked: false,
				key: "Life jackets",
			},
			{
				label: "Emergency raft or inflatable boat",
				checked: false,
				key: "Emergency raft or inflatable boat",
			},
			{
				label: "Portable radio",
				checked: false,
				key: "Portable radio",
			},
			{
				label: "Charged power banks",
				checked: false,
				key: "Charged power banks",
			},
			{
				label: "Whistle",
				checked: false,
				key: "Whistle",
			},
			{
				label: "Flashlight and batteries",
				checked: false,
				key: "Flashlight and batteries",
			},
			{
				label: "First aid kit",
				checked: false,
				key: "First aid kit",
			},
			{
				label: "Emergency food and water",
				checked: false,
				key: "Emergency food and water",
			},
			{
				label: "Emergency blankets",
				checked: false,
				key: "Emergency blankets",
			},
			{
				label: "Personal hygiene items",
				checked: false,
				key: "Personal hygiene items",
			},
			{
				label: "Cash",
				checked: false,
				key: "Cash",
			},
			{
				label: "Important documents in waterproof container",
				checked: false,
				key: "Important documents in waterproof container",
			},
		],
		evacuation: ["https://www.youtube.com/watch?v=43M5mZuzHF8"],
	},
	[TORNADOES]: {
		instruction: [
			{
				title: "Develop a tornado emergency plan",
				description:
					"Create a family emergency plan that includes designated shelter locations in your home, workplace, or school. Identify the safest areas, such as basements, storm cellars, or interior rooms on the lowest level, away from windows.",
			},
			{
				title: "Assemble an emergency kit",
				description:
					"Prepare an emergency kit with essential supplies such as non-perishable food, water, medications, first aid supplies, flashlight, batteries, and important documents. Include enough supplies to last at least 72 hours.",
			},
			{
				title: "Stay informed",
				description:
					"Stay abreast of weather forecasts and tornado warnings issued by local authorities and meteorological agencies. Have multiple means of receiving alerts.",
			},
			{
				title: "Practice tornado drills",
				description:
					"Conduct tornado drills regularly to ensure that everyone in your household knows what to do in the event of a tornado. Practice seeking shelter quickly and safely, and review your emergency plan with family members, coworkers, and classmates.",
			},
			{
				title: "Secure your property",
				description:
					"Take steps to reinforce your home and minimize damage from high winds and flying debris. Install storm shutters or board up windows, reinforce garage doors, trim trees and shrubs, and secure outdoor furniture and objects that could become projectiles in high winds.",
			},
		],
		tools: [
			{
				label: "Emergency tornado kit",
				checked: false,
				key: "Emergency tornado kit",
			},
			{
				label: "Weather radio or NOAA radio",
				checked: false,
				key: "Weather radio or NOAA radio",
			},
			{
				label: "Whistle",
				checked: false,
				key: "Whistle",
			},
			{
				label: "Flashlight and batteries",
				checked: false,
				key: "Flashlight and batteries",
			},
			{
				label: "First aid kit",
				checked: false,
				key: "First aid kit",
			},
			{
				label: "Emergency food and water",
				checked: false,
				key: "Emergency food and water",
			},
			{
				label: "Emergency blankets",
				checked: false,
				key: "Emergency blankets",
			},
			{
				label: "Portable battery-powered charger",
				checked: false,
				key: "Portable battery-powered charger",
			},
			{
				label: "Durable shoes or boots",
				checked: false,
				key: "Durable shoes or boots",
			},
			{
				label: "Helmet",
				checked: false,
				key: "Helmet",
			},
			{
				label: "Personal identification",
				checked: false,
				key: "Personal identification",
			},
			{
				label: "Cash",
				checked: false,
				key: "Cash",
			},
			{
				label: "Important documents in waterproof container",
				checked: false,
				key: "Important documents in waterproof container",
			},
			{
				label: "Multi-tool or pocket knife",
				checked: false,
				key: "Multi-tool or pocket knife",
			},
			{
				label: "Hand-crank or solar-powered flashlight",
				checked: false,
				key: "Hand-crank or solar-powered flashlight",
			},
			{
				label: "Emergency contact list",
				checked: false,
				key: "Emergency contact list",
			},
		],
		evacuation: ["https://www.youtube.com/watch?v=h3z50ZX_RMM"],
	},
	[VOLCANIC_ERUPTIONS]: {
		instruction: [
			{
				title: "Stay informed:",
				description:
					"Keep yourself updated with information from local authorities, volcanic observatories, and official sources about volcanic activity in your area.",
			},
			{
				title: "Emergency supplies:",
				description:
					"Assemble an emergency kit with essential supplies such as non-perishable food, water, medications, first aid supplies, flashlight, batteries, and important documents.",
			},
			{
				title: "Evacuation plan:",
				description:
					"Develop a family evacuation plan and identify multiple evacuation routes in case roads become blocked.",
			},
			{
				title: "Protective measures:",
				description:
					"Familiarize yourself with protective measures such as sheltering in place during ashfall, wearing long-sleeved clothing and goggles to protect against ash particles, and using masks to filter out volcanic ash.",
			},
			{
				title: "Community readiness:",
				description:
					"Participate in drills and community preparedness initiatives to ensure everyone knows what to do in the event of a volcanic eruption.",
			},
		],
		tools: [
			{
				label: "Emergency evacuation kit",
				checked: false,
				key: "Emergency evacuation kit",
			},
			{
				label: "Respiratory protection (N95 masks)",
				checked: false,
				key: "Respiratory protection (N95 masks)",
			},
			{
				label: "Goggles or eye protection",
				checked: false,
				key: "Goggles or eye protection",
			},
			{
				label: "Long-sleeved clothing and long pants",
				checked: false,
				key: "Long-sleeved clothing and long pants",
			},
			{
				label: "Gloves",
				checked: false,
				key: "Gloves",
			},
			{
				label: "Hard hat or helmet",
				checked: false,
				key: "Hard hat or helmet",
			},
			{
				label: "First aid kit",
				checked: false,
				key: "First aid kit",
			},
			{
				label: "Emergency food and water",
				checked: false,
				key: "Emergency food and water",
			},
			{
				label: "Portable battery-powered charger",
				checked: false,
				key: "Portable battery-powered charger",
			},
			{
				label: "Waterproof and dustproof bags for important documents",
				checked: false,
				key: "Waterproof and dustproof bags for important documents",
			},
			{
				label: "Emergency contact list",
				checked: false,
				key: "Emergency contact list",
			},
			{
				label: "Maps",
				checked: false,
				key: "Maps",
			},
			{
				label: "Radio for emergency alerts",
				checked: false,
				key: "Radio for emergency alerts",
			},
			{
				label: "Tarp or plastic sheeting",
				checked: false,
				key: "Tarp or plastic sheeting",
			},
			{
				label: "Hand-crank or solar-powered flashlight",
				checked: false,
				key: "Hand-crank or solar-powered flashlight",
			},
			{
				label: "Cash",
				checked: false,
				key: "Cash",
			},
			{
				label: "Durable shoes or boots",
				checked: false,
				key: "Durable shoes or boots",
			},
		],
		evacuation: ["https://www.youtube.com/watch?v=Z-w_z9yobpE"],
	},
	[WILDFIRES]: {
		instruction: [
			{
				title: "Harden Your Home:",
				description:
					"Harden your home against wildfire by using fire-resistant building materials, such as Class A roofing materials, siding, and windows. Install spark arrestors on chimneys and vents, and consider retrofitting your home with ember-resistant features.",
			},
			{
				title: "Create a Defensible Space:",
				description:
					"Maintain a defensible space around your home by clearing flammable vegetation, debris, and combustible materials from the area within at least 30 feet of your home. Trim trees and shrubs, remove dead vegetation, and keep your lawn well-watered and mowed.",
			},
			{
				title: "Prepare an Emergency Kit:",
				description:
					"Assemble an emergency kit with essential supplies such as non-perishable food, water, medications, first aid supplies, flashlight, batteries, and important documents. Include enough supplies to last at least 72 hours.",
			},
			{
				title: "Develop a Family Evacuation Plan:",
				description:
					"Create a family evacuation plan that includes designated evacuation routes, meeting points, and communication methods. Practice the plan regularly with all family members to ensure everyone knows what to do in case of a wildfire.",
			},
			{
				title: "Stay Informed:",
				description:
					"Stay abreast of weather forecasts, wildfire alerts, and evacuation orders issued by local authorities and emergency services. Have multiple means of receiving alerts, such as mobile apps, or local news broadcasts.",
			},
		],
		tools: [
			{
				label: "Emergency evacuation kit",
				checked: false,
				key: "Emergency evacuation kit",
			},
			{
				label: "N95 masks or respirators",
				checked: false,
				key: "N95 masks or respirators",
			},
			{
				label: "Goggles or eye protection",
				checked: false,
				key: "Goggles or eye protection",
			},
			{
				label: "Gloves",
				checked: false,
				key: "Gloves",
			},
			{
				label: "Hand tools (shovel, rake, axe)",
				checked: false,
				key: "Hand tools",
			},
			{
				label: "Garden hose or buckets of water",
				checked: false,
				key: "Garden hose or buckets of water",
			},
			{
				label: "Portable fire extinguisher",
				checked: false,
				key: "Portable fire extinguisher",
			},
			{
				label: "Emergency food and water",
				checked: false,
				key: "Emergency food and water",
			},
			{
				label: "Portable battery-powered charger",
				checked: false,
				key: "Portable battery-powered charger",
			},
			{
				label: "Maps",
				checked: false,
				key: "Maps",
			},
			{
				label: "Emergency contact list",
				checked: false,
				key: "Emergency contact list",
			},
			{
				label: "Radio for emergency alerts",
				checked: false,
				key: "Radio for emergency alerts",
			},
			{
				label: "Protective clothing (long sleeves, long pants)",
				checked: false,
				key: "Protective clothing",
			},
			{
				label: "Cash",
				checked: false,
				key: "Cash",
			},
			{
				label: "Important documents in waterproof container",
				checked: false,
				key: "Important documents in waterproof container",
			},
			{
				label: "Tarp or plastic sheeting",
				checked: false,
				key: "Tarp or plastic sheeting",
			},
		],
		evacuation: ["https://www.youtube.com/watch?v=_bNLtjHG9dM"],
	},
};
