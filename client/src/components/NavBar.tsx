import React, { useState } from "react";
import {
  useColorMode,
  IconButton,
  Avatar,
  Flex,
  Heading,
  HStack,
  Input,
  Image,
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
  MenuDivider,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, SearchIcon, AddIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

import ModalSearchBar from "./ModalSearchBar";
import AddMovieModel from "./Home/AddMovieModel";

import { useToast } from "../context/toast";

const NavBar = ({
  token,
  userUsername,
  setToken,
  setUserUsername,
}: {
  token: string | null;
  userUsername: string | null;
  setToken: any;
  setUserUsername: any;
}) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [showHeaderShadow, setShowHeaderShadow] = useState<boolean>(false);
  const [isSmallScreen] = useMediaQuery("(max-width: 800px)");

  const toast = useToast();

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

  window.addEventListener("scroll", () => {
    if (window.scrollY < 100) {
      setShowHeaderShadow(false);
    } else {
      !showHeaderShadow ? setShowHeaderShadow(true) : null;
    }
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement> | any) => {
    event.preventDefault();

    if (!searchValue) return alert("search bar should not be empty");

    alert(searchValue);
    setSearchValue("");
  };

  const logout = () => {
    setUserUsername("");
    setToken("");
    toast({
      title: "Logged out.",
      description: `You logged out from your account`,
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "top-left",
    });
  };

  return (
    <Box
      as="header"
      w="full"
      position="fixed"
      zIndex="10"
      bg="white"
      _dark={{ bg: "gray.800" }}
      boxShadow={showHeaderShadow ? "md" : ""}
    >
      <Flex
        as="header"
        align="center"
        maxW="90rem"
        mx="auto"
        px="2rem"
        py="1rem"
      >
        <HStack flex="1 auto">
          <Image src="/favicon-32x32.png" alt="welp" />
          <Link to="/">
            <Heading as="h1" size="lg">
              TMovies
            </Heading>
          </Link>
        </HStack>

        <HStack as="form" flex="0 auto" onSubmit={handleSubmit}>
          {isSmallScreen ? (
            <IconButton
              aria-label="search button"
              onClick={openSearch}
              disabled
            >
              <SearchIcon />
            </IconButton>
          ) : (
            <IconButton aria-label="search button" type="submit" disabled>
              <SearchIcon />
            </IconButton>
          )}
          <Input
            type="search"
            w="25rem"
            placeholder="Search for a movie"
            value={searchValue}
            onChange={handleChange}
            display={{ base: "none", md: "block" }}
            disabled
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
            <IconButton aria-label="add a movie" onClick={openAddMovie}>
              <AddIcon />
            </IconButton>
          ) : null}
        </HStack>

        <Flex flex="1 auto" justify="right">
          {isLogged ? (
            <Menu>
              <MenuButton>
                <Avatar name={userUsername!} size="md" />
              </MenuButton>
              <MenuList>
                <MenuGroup title="Profile">
                  <MenuItem>My Account</MenuItem>
                  <MenuItem>My Movies</MenuItem>
                  <MenuDivider />
                  <MenuItem onClick={logout}>Logout</MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          ) : (
            <ButtonGroup>
              <Link to="/auth/login">
                <Button variant="ghost">Login</Button>
              </Link>

              <Link to="/auth/register">
                <Button colorScheme="linkedin">Register</Button>
              </Link>
            </ButtonGroup>
          )}
        </Flex>
      </Flex>
      <AddMovieModel isOpen={isAddMovieOpen} onClose={closeAddMovie} />
    </Box>
  );
};

export default NavBar;
