import { Wrap, Flex } from "@chakra-ui/react";
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
    <Flex
      as="main"
      my="2rem"
      maxW="90rem"
      flexDirection="row"
      mx="auto"
      px="2rem"
    >
      {isLoading ? <div>loading...</div> : null}
      {isError ? <div>failed</div> : null}
      {isSuccess ? (
        <Wrap spacing="3rem" justify="center">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Wrap>
      ) : null}
    </Flex>
  );
};

export default Movies;
