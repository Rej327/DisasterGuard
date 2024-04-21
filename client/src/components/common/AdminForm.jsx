import { useDispatch } from "react-redux";
import { notifications } from "../../_reducers/notificationsSlice";
import { useForm } from "@mantine/form";
import AdminFormToast from "./AdminFormToast";
import { Button, Select, Textarea } from "@mantine/core";
import { towns } from "../../data/data";
import { useState } from "react";
import useSocket from "../../hooks/useSocket";
import { randomId } from "@mantine/hooks";

const categoryDisaster = [
	{ value: "Earthquake", label: "Earthquake" },
	{ value: "Floods", label: "Floods" },
	{ value: "Hurricane", label: "Hurricane" },
	{ value: "Tornado", label: "Tornado" },
	{ value: "Volcanic eruption", label: "Volcanic Eruption" },
	{ value: "Wildfires", label: "Wildfires" },
];

const categoryLevel = [
	{ value: "Low Risk", label: "Low" },
	{ value: "Mid Risk", label: "Mid" },
	{ value: "High Risk", label: "High" },
	{ value: "Severe Risk", label: "Severe Risk" },
];

const AdminForm = (props) => {
	const [showNotification, setShowNotification] = useState(false);
	const dispatch = useDispatch();
	const { socket } = useSocket();
	const form = useForm({
		initialValues: {
			disaster: "",
			level: "",
			location: "",
			description:
				"Stay Safe, Prepare, Follow Local Guidance, Prioritize Safety",
		},
		validate: {
			disaster: (value) => value.trim() == "",
			level: (value) => value.trim() == "",
			location: (value) => value.trim() == "",
			description: (value) => value.trim() == "",
		},
	});

	const handleSubmit = (values) => {
		dispatch(notifications(values));
		setShowNotification(true);
		form.resetTouched();
		socket.emit("notification", values);
		props.close();
	};

	return (
		<>
			<form
				onSubmit={form.onSubmit((values) =>
					handleSubmit({
						title: `${values.disaster} Hit ${values.location}`,
						level: `(${values.level})`,
						description: values.description,
						id: randomId(),
						dateUploaded: new Date(),
					})
				)}
			>
				<Select
					{...form.getInputProps("disaster")}
					label="Disaster"
					data={categoryDisaster}
					placeholder="Select disaster"
				/>
				<Select
					mt={10}
					{...form.getInputProps("level")}
					label="Level"
					data={categoryLevel}
					placeholder="Select level"
				/>
				<Select
					mt={10}
					{...form.getInputProps("location")}
					label="Location"
					data={towns.map((town) => ({ value: town, label: town }))}
					placeholder="Select location"
					searchable
				/>
				<Textarea
					mt={10}
					{...form.getInputProps("description")}
					label="Disaster Description"
					placeholder="Describe the disaster"
					withAsterisk
					autosize
					minRows={2}
				/>

				{showNotification && (
					<AdminFormToast
						setShowNotification={setShowNotification}
						showNotification={showNotification}
					/>
				)}
				<Button w="100%" mt={10} type="submit">
					Send
				</Button>
			</form>
		</>
	);
};

export default AdminForm;
