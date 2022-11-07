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
  ButtonGroup,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  Tooltip,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, SearchIcon, AddIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

import ModalSearchBar from "./ModalSearchBar";
import AddMovieModel from "./Home/AddMovieModel";

const NavBar = ({
  token,
  userUsername,
}: {
  token: string | null;
  userUsername: string | null;
}) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [isSmallScreen] = useMediaQuery("(max-width: 800px)");

  const { colorMode, toggleColorMode } = useColorMode();
  const {
    isOpen: isSearchOpen,
    onOpen: openSearch,
    onClose: closeSearch,
  } = useDisclosure();
  const {
    isOpen: isAddMovieOpen,
    onOpen: openAddMovie,
    onClose: closeAddMovie,
  } = useDisclosure();

  const isLogged: boolean = token && userUsername ? true : false;

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
              <span style={{ textTransform: "uppercase" }}>nen</span>.to
            </Link>
          </Heading>
        </Box>

        <HStack as="form" flex="0 auto" onSubmit={handleSubmit}>
          <Tooltip label="search for a movie">
            {isSmallScreen ? (
              <IconButton aria-label="search button" onClick={openSearch}>
                <SearchIcon />
              </IconButton>
            ) : (
              <IconButton aria-label="search button" type="submit">
                <SearchIcon />
              </IconButton>
            )}
          </Tooltip>
          <Input
            type="search"
            w="25rem"
            placeholder="Search for a movie"
            value={searchValue}
            onChange={handleChange}
            display={{ base: "none", md: "block" }}
          />
          <ModalSearchBar
            isOpen={isSearchOpen}
            onClose={closeSearch}
            value={searchValue}
            onChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <Tooltip label="toggle color mode">
            <IconButton
              aria-label="toggle color mode"
              onClick={toggleColorMode}
            >
              {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
            </IconButton>
          </Tooltip>
          {isLogged ? (
            <Tooltip label="add a movie">
              <IconButton aria-label="add a movie" onClick={openAddMovie}>
                <AddIcon />
              </IconButton>
            </Tooltip>
          ) : null}
        </HStack>

        <Flex flex="1 auto" justify="right">
          {isLogged ? (
            <Menu>
              <Tooltip label="Profile">
                <MenuButton>
                  <Avatar name={userUsername!} size="md" />
                </MenuButton>
              </Tooltip>
              <MenuList>
                <MenuGroup title="Profile">
                  <MenuItem>My Account</MenuItem>
                  <MenuItem>My Movies</MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          ) : (
            <ButtonGroup>
              <Button variant="ghost">
                <Link to="/auth/login">Login</Link>
              </Button>
              <Button colorScheme="linkedin">
                <Link to="/auth/register">Register</Link>
              </Button>
            </ButtonGroup>
          )}
        </Flex>
      </Flex>
      <AddMovieModel isOpen={isAddMovieOpen} onClose={closeAddMovie} />
    </Box>
  );
};

export default NavBar;
