import { Wrap, Flex, Spinner, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

import MovieCard from "./MovieCard";

import { getAllMovies } from "../../api/movies";

const Movies = () => {
  const {
    data: movies,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["movies"],
    queryFn: getAllMovies,
  });

  return (
    <Flex as="main" my="2rem" maxW="90rem" mx="auto" px="2rem">
      {isLoading ? <Spinner size="xl" mx="auto" /> : null}
      {isError ? <Text mx="auto">failed</Text> : null}
      {isSuccess ? (
        <Wrap spacing="3rem" justify="center" mx="auto">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Wrap>
      ) : null}
    </Flex>
  );
};

export default Movies;
