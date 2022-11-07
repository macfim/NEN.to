import { Button, Flex, Spinner, Text, Box, Wrap } from "@chakra-ui/react";

import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getAllGenres } from "../../api/genres";

const Genres = () => {
  const navigate = useNavigate();

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
      <Flex maxW="90rem" mx="auto" pt="5rem" pb=".5rem">
        {isLoading ? (
          <Box py="1rem" mx="auto">
            <Spinner size="md" />
          </Box>
        ) : null}
        {isError ? <Text mx="auto">failed</Text> : null}
        {isSuccess ? (
          <Wrap py="1rem" mx="auto" justify="center">
            <Button variant="ghost" onClick={() => navigate(`/`)}>
              All
            </Button>
            {genres.map((genre) => (
              <Button
                key={genre.id}
                variant="ghost"
                onClick={() => navigate(`/${genre.title}`)}
              >
                {genre.title}
              </Button>
            ))}
          </Wrap>
        ) : null}
      </Flex>
    </>
  );
};

export default Genres;
