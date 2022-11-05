import { useState, ChangeEvent, FormEvent } from "react";
import {
  Box,
  Center,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Divider,
  Text,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import { loginUser } from "../../api/login";

interface ICreds {
  username: string;
  password: string;
}

const DefaultCreds = {
  username: "",
  password: "",
};

const Login = ({ setToken, setUserUsername }: any) => {
  const [creds, setCreds] = useState<ICreds>(DefaultCreds);
  const navigate = useNavigate();

  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: loginUser,
    onSuccess: (response) => {
      setToken(response.token);
      setUserUsername(response.username);
    },
    onError: (err: any) => err,
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { username, password } = creds;

    if (!username || !password)
      return alert("username or/and password are blank");

    mutate({ username, password });

    navigate("/");
    setCreds(DefaultCreds);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setCreds((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Center minH="100vh">
      <form onSubmit={handleSubmit}>
        <Box px="1rem" py="1.5rem" w="23rem">
          <Stack spacing="1rem">
            <Box pb="1rem">
              <Heading as="h2" size="lg">
                Here you can Login
              </Heading>
              <Text>Let's join us</Text>
            </Box>
            <FormControl isRequired>
              <FormLabel>Username</FormLabel>
              <Input
                name="username"
                value={creds.username}
                onChange={handleChange}
                required
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                type="password"
                value={creds.password}
                onChange={handleChange}
                required
              />
            </FormControl>
            <Button
              type="submit"
              colorScheme="linkedin"
              isLoading={isLoading}
              loadingText="logging..."
            >
              LOGIN
            </Button>
            <Divider />
            <Text>
              <span style={{ opacity: "0.5" }}>Don't have an account ?</span>{" "}
              <Button colorScheme="linkedin" variant="link">
                <Link to="/register">Register</Link>
              </Button>
            </Text>
          </Stack>
        </Box>
      </form>
    </Center>
  );
};

export default Login;
