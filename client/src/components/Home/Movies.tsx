import { Flex, Spinner, Text, Grid } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import MovieCard from "./MovieCard";

import { getAllMovies } from "../../api/movies";
import { IMovie } from "../../utils/interfaces";

const Movies = () => {
  const genre = useParams().genre;
  let movies: IMovie[];

  const { data, isSuccess, isLoading, isError } = useQuery({
    queryKey: ["movies"],
    queryFn: getAllMovies,
  });

  if (genre && isSuccess) {
    movies = data.slice(0).filter((movie) => {
      const genres = movie.genres.map((genre) => genre.title);

      if (genres.includes(genre)) return true;

      return false;
    });
  } else movies = data!;

  return (
    <Flex as="main" my="2rem" maxW="90rem" mx="auto" px="2rem">
      {isLoading ? <Spinner size="xl" mx="auto" /> : null}
      {isError ? <Text mx="auto">failed</Text> : null}
      {isSuccess && movies ? (
        <Grid
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          gridAutoRows="auto"
          w="full"
          rowGap="3rem"
          columnGap="1rem"
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Grid>
      ) : null}
    </Flex>
  );
};

export default Movies;
