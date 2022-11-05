import React, { useState } from "react";
import {
  useColorMode,
  IconButton,
  Avatar,
  Flex,
  Heading,
  HStack,
  Input,
  Box,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, SearchIcon } from "@chakra-ui/icons";

const NavBar = () => {
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
    <Flex as="header" align="center" maxW="90rem" mx="auto" px="2rem" py="1rem">
      <Box flex="1 auto">
        <Heading as="h1" size="lg">
          <span style={{ textTransform: "uppercase" }}>Ayanokoji</span>.to
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
        <Avatar size="md" />
      </Flex>
    </Flex>
  );
};

export default NavBar;
