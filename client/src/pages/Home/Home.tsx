import {
  ButtonGroup,
  Button,
  Flex,
  Spinner,
  Text,
  Box,
} from "@chakra-ui/react";

import { useQuery } from "@tanstack/react-query";
import { getAllGenres } from "../../api/genres";

import Movies from "../../components/Home/Movies";

const genres = [
  { title: "anime" },
  { title: "notanime" },
  { title: "anime" },
  { title: "notanime" },
  { title: "anime" },
  { title: "notanime" },
];

const Home = () => {
  const {
    data: genres,
    isError,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["genres"],
    queryFn: getAllGenres,
  });

  return (
    <>
      <Flex maxW="90rem" mx="auto" pt="5rem">
        {isLoading ? (
          <Box py="1rem" mx="auto">
            <Spinner size="md" />
          </Box>
        ) : null}
        {isError ? <Text mx="auto">failed</Text> : null}
        {isSuccess ? (
          <ButtonGroup py="1rem" mx="auto">
            {genres
              .map((genre) => ({ genre, sort: Math.random() }))
              .sort((a, b) => a.sort - b.sort)
              .map(({ genre }) => (
                <Button
                  key={genre.id}
                  variant="ghost"
                  textTransform="lowercase"
                >
                  {genre.title}
                </Button>
              ))}
          </ButtonGroup>
        ) : null}
      </Flex>
      <Movies />
    </>
  );
};

export default Home;
