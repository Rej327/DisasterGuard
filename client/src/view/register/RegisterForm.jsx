import {
  Paper,
  TextInput,
  PasswordInput,
  Button,
  Title,
  Text,
  Anchor,
  Image,
  Flex,
  useMantineTheme,
} from "@mantine/core";
import classes from "./RegisterForm.module.css";
import { hero_cover } from "../../assets";
import { IconArrowLeft } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../_reducers/userSlice";
import { useForm } from "@mantine/form";
import { useEffect, useState } from "react";
import NotificationComponent from "./NotificationComponent";
import { useNavigate } from "react-router-dom";

export function RegisterForm() {
  const [showNotification, setShowNotification] = useState(false);
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const dispatch = useDispatch();
  const theme = useMantineTheme();
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedInUser) {
      navigate("/");
    }
  }, [loggedInUser, navigate]);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      fullName: "",
      email: "",
      contactNumber: "",
      password: "",
      confirmPassword: "",
    },
    validate: {
      fullName: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      contactNumber: (value) =>
        /^[0-9]{11}$/.test(value) ? null : "Contact number must be 11 digits",
      password: (value) =>
        value.length >= 6
          ? null
          : "Password must be at least 6 characters long",
      confirmPassword: (value, values) =>
        value === values.password ? null : "Passwords did not match",
    },
  });

  const userId = Date.now();

  const handleSubmit = (values) => {
    dispatch(register(values));
    form.reset();
    setShowNotification(true);
  };

  return (
    <Flex mx="auto" align="center" justify="space-between" fullWidth>
      {showNotification && <NotificationComponent />}
      <Paper mx="auto" className={classes.form} radius={0} p={30}>
        <Anchor href="/" underline="never" w="fit-content">
          <div className="flex gap-2 w-fit">
            <IconArrowLeft width={20} />
            <Text>Back to Home</Text>
          </div>
        </Anchor>
        <form
          onSubmit={form.onSubmit((values) =>
            handleSubmit({
              id: userId,
              fullName: values.fullName,
              email: values.email,
              contactNumber: values.contactNumber,
              password: values.password,
            })
          )}
        >
          <Title
            order={2}
            className={classes.title}
            ta="center"
            mt="md"
            mb={20}
          >
            Register to DisasterGuard!
          </Title>

          <TextInput
            label="Full name"
            placeholder="Stough Nough"
            size="md"
            {...form.getInputProps("fullName")}
          />

          <TextInput
            label="Email address"
            placeholder="hello@gmail.com"
            mt="md"
            size="md"
            {...form.getInputProps("email")}
          />

          <TextInput
            label="Contact Number"
            placeholder="09XXXXXXXXX"
            mt="md"
            size="md"
            {...form.getInputProps("contactNumber")}
          />

          <PasswordInput
            label="Password"
            placeholder="Your password"
            mt="md"
            size="md"
            {...form.getInputProps("password")}
          />
          <PasswordInput
            mt="md"
            size="md"
            label="Confirm password"
            placeholder="Confirm password"
            {...form.getInputProps("confirmPassword")}
          />

          <Button type="submit" bg="green" fullWidth mt="xl" size="md">
            Sign Up
          </Button>
        </form>

        <Text ta="center" mt="md">
          Already have an account?{" "}
          <Anchor href="/login" fw={700}>
            Login
          </Anchor>
        </Text>
      </Paper>
      <Image className={classes.bgImg} w="100vh" h="100vh" src={hero_cover} />
    </Flex>
  );
}
