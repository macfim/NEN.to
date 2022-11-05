import React, { useState, useEffect } from "react";
import {
  useColorMode,
  IconButton,
  Avatar,
  Flex,
  Heading,
  HStack,
  Input,
  Box,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, SearchIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const NavBar = ({
  token,
  userUsername,
}: {
  token: string | null;
  userUsername: string | null;
}) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const { colorMode, toggleColorMode } = useColorMode();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement> | any) => {
    event.preventDefault();

    if (!searchValue) return alert("search bar should not be empty");

    alert(searchValue);
    setSearchValue("");
  };

  return (
    <Box
      w="full"
      position="fixed"
      zIndex="10"
      bg="white"
      _dark={{ bg: "gray.800" }}
      boxShadow="sm"
    >
      <Flex
        as="header"
        align="center"
        maxW="90rem"
        mx="auto"
        px="2rem"
        py="1rem"
      >
        <Box flex="1 auto">
          <Heading as="h1" size="lg">
            <Link to="/">
              <span style={{ textTransform: "uppercase" }}>Ayanokoji</span>.to
            </Link>
          </Heading>
        </Box>

        <HStack as="form" flex="1 auto" onSubmit={handleSubmit}>
          <IconButton aria-label="search button" type="submit">
            <SearchIcon />
          </IconButton>
          <Input
            type="search"
            w="25rem"
            placeholder="Search for a movie"
            value={searchValue}
            onChange={handleChange}
          />
          <IconButton aria-label="toggle color mode" onClick={toggleColorMode}>
            {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
          </IconButton>
        </HStack>

        <Flex flex="1 auto" justify="right">
          {token && userUsername ? (
            <Avatar name={userUsername} size="md" />
          ) : (
            <ButtonGroup>
              <Button variant="ghost">
                <Link to="/login">Login</Link>
              </Button>
              <Button colorScheme="linkedin">
                <Link to="/register">Register</Link>
              </Button>
            </ButtonGroup>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavBar;
