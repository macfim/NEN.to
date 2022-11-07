import {
  Spinner,
  Text,
  Grid,
  Heading,
  Box,
  Divider,
  Flex,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import MovieCard from "./MovieCard";

import { getAllMovies } from "../../api/movies";
import { IMovie } from "../../utils/interfaces";
import { AnimatePresence, motion } from "framer-motion";

const Movies = () => {
  const genre = useParams().genre;
  let movies: IMovie[];

  const { data, isSuccess, isLoading, isError } = useQuery({
    queryKey: ["movies"],
    queryFn: getAllMovies,
    refetchOnReconnect: "always",
  });

  if (genre && isSuccess) {
    movies = data.slice(0).filter((movie) => {
      const genres = movie.genres.map((genre) => genre.title);

      if (genres.includes(genre)) return true;

      return false;
    });
  } else movies = data!;

  return (
    <Box mb="2rem" maxW="90rem" mx="auto" px="2rem">
      <Heading as="h2" size="lg">
        Movies
      </Heading>
      <Divider my="1rem" />
      {isLoading ? (
        <Flex w="full" justify="center">
          <Spinner size="xl" />
        </Flex>
      ) : null}
      {isError ? <Text mx="auto">failed</Text> : null}
      {isSuccess && movies ? (
        <AnimatePresence>
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
        </AnimatePresence>
      ) : null}
      <Divider as={motion.hr} layout my="1rem" />
    </Box>
  );
};

export default Movies;
