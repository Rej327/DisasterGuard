import {
	TextInput,
	Textarea,
	SimpleGrid,
	Group,
	Title,
	Button,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import classes from "./GetInTouch.module.css";

export function GetInTouch() {
	const form = useForm({
		initialValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
		},
		validate: {
			name: (value) => value.trim().length < 2,
			email: (value) => !/^\S+@\S+$/.test(value),
			subject: (value) => value.trim().length === 0,
		},
	});

	return (
		<div id="contact-us" className={classes.formContainer}>
			<form onSubmit={form.onSubmit(() => {})}>
				<Title className={classes.title}>Get in touch</Title>

				<SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
					<TextInput
						label="Name"
						placeholder="Your name"
						name="name"
						variant="filled"
						{...form.getInputProps("name")}
					/>
					<TextInput
						label="Email"
						placeholder="Your email"
						name="email"
						variant="filled"
						{...form.getInputProps("email")}
					/>
				</SimpleGrid>

				<TextInput
					label="Subject"
					placeholder="Subject"
					mt="md"
					name="subject"
					variant="filled"
					{...form.getInputProps("subject")}
				/>
				<Textarea
					mt="md"
					label="Message"
					placeholder="Your message"
					maxRows={10}
					minRows={5}
					autosize
					name="message"
					variant="filled"
					{...form.getInputProps("message")}
				/>

				<Group justify="center" mt="xl">
					<Button type="submit" size="md">
						Send message
					</Button>
				</Group>
			</form>
		</div>
	);
}
