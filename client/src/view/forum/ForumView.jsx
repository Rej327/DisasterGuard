import React, { useEffect } from "react";
import {
	Textarea,
	Button,
	Container,
	Text,
	Box,
	Avatar,
	Flex,
	Divider,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDispatch, useSelector } from "react-redux";
import { report } from "../../_reducers/reportSlice";
import useSocket from "../../hooks/useSocket";
import { randomId } from "@mantine/hooks";
import { fromNow } from "../../utils/helper";

const ForumVIew = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user.loggedInUser);
	const reports = useSelector((state) => state.report.report);

	const { socket } = useSocket();

	const form = useForm({
		initialValues: {
			report: "",
		},
	});

	const handleSubmit = (values) => {
		const payload = {
			report: values.report,
			name: user.fullName,
			email: user.email,
			dateUploaded: new Date(),
			id: randomId(),
		};

		form.reset();
		socket.emit("report", payload);
	};

	useEffect(() => {
		socket.on("recieved_report", (e) => {
			console.log("report", e);
			dispatch(report(e));
		});
	}, [socket]);

	const fieldMode = () => {
		if (user) {
			return false;
		} else {
			return true;
		}
	};

	return (
		<Container py={80}>
			<Container
				mt={40}
				style={{ border: "1px solid #CED4DA", borderRadius: ".5rem" }}
			>
				<Text my={20} ta="center" fw={900} size="1.5rem">
					Forum Reports
				</Text>
				{reports.length > 0 ? (
					reports
						.filter(
							(value, index, self) =>
								index ===
								self.findIndex((t) => t.id === value.id)
						)
						.map((report, idx) => (
							<Box my={10} key={idx}>
								<Flex align="center" gap={10}>
									<Avatar
										variant="filled"
										radius="xl"
										color="blue"
									/>
									<Box>
										<Text fw={700} size="md">
											{report.name}
										</Text>
										<Text size="sm" c="dimmed" mt="-px">
											{report.email}
										</Text>
									</Box>
								</Flex>
								<Box ml="3rem" my={5}>
									<Text>{report.report}</Text>
									<Text size="sm" c="dimmed">
										{fromNow(report.dateUploaded)}
									</Text>
								</Box>
								<Divider />
							</Box>
						))
						.reverse()
				) : (
					<Text c="dimmed" ta="center" fw={700} my={30}>
						No Report Available
					</Text>
				)}

				<form
					onSubmit={form.onSubmit((values) => handleSubmit(values))}
				>
					<Textarea
						label="Make a Report"
						id="context"
						required
						fullWidth
						autosize
						minRows={2}
						disabled={fieldMode()}
						{...form.getInputProps("report")}
					/>
					<Button
						disabled={fieldMode()}
						my={10}
						type="submit"
						fullWidth
					>
						Post a Report
					</Button>
				</form>
			</Container>
		</Container>
	);
};

export default ForumVIew;
