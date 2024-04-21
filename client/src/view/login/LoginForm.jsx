import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  Box,
} from "@mantine/core";
import classes from "./LoginForm.module.css";
import { IconArrowLeft, IconX } from "@tabler/icons-react";
import { hero_cover } from "../../assets";
import { login } from "../../_reducers/userSlice";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  const navigate = useNavigate();

  useEffect(() => {
    if (loggedInUser) {
      navigate("/");
    }
  }, [loggedInUser, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
    if (!loggedInUser) {
      setErrorMessage("Incorrect Credentials!");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrorMessage("");
  };

  if (loggedInUser) {
    navigate("/");
  }

  return (
    <Flex mx="auto" align="center" justify="space-between" fullWidth>
      <Paper mx="auto" className={classes.form} radius={0} p={30}>
        <Anchor href="/" underline="never" w="fit-content">
          <div className="flex gap-2 w-fit">
            <IconArrowLeft width={20} />
            <Text>Back to Home</Text>
          </div>
        </Anchor>
        <form onSubmit={handleSubmit}>
          <Title
            order={2}
            className={classes.title}
            ta="center"
            mt="md"
            mb={20}
          >
            Login to DisasterGuard!
          </Title>
          {errorMessage && (
            <Box className={classes.errorContainer}>
              <IconX className={classes.errorIcon} />
              <Text className={classes.errorMessage}>{errorMessage}</Text>
            </Box>
          )}
          <TextInput
            label="Email address"
            placeholder="hello@gmail.com"
            size="md"
            value={email}
            onChange={handleEmailChange}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            mt="md"
            size="md"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button fullWidth mt="xl" size="md" type="submit">
            Login
          </Button>
        </form>
        <Text ta="center" mt="md">
          Don't have an account?{" "}
          <Anchor href="/register" fw={700}>
            Sign Up
          </Anchor>
        </Text>
      </Paper>
      <Image className={classes.bgImg} w="100vh" h="100vh" src={hero_cover} />
    </Flex>
  );
}
