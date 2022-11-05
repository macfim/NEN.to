import {
  Wrap,
  Box,
  Image,
  Heading,
  Badge,
  SimpleGrid,
  AspectRatio,
  Flex,
  Skeleton,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

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
      {isSuccess ? (
        <Wrap spacing="3rem" justify="center">
          {movies.map((movie) => (
            <Box key={movie.id} w="12rem" pb=".5rem" px=".1rem">
              <AspectRatio ratio={2 / 3}>
                <Image
                  src={movie.poster}
                  alt={movie.title}
                  fallback={<Skeleton />}
                  borderRadius="5px"
                />
              </AspectRatio>
              <Heading as="h3" size="md" textAlign="center" py="1rem">
                {movie.title}
              </Heading>
              <SimpleGrid
                px=".5rem"
                columns={2}
                spacing={3}
                alignItems="center"
                textAlign="center"
              >
                <Badge>Fantasie</Badge>
                <Badge>welp</Badge>
                <Badge>sfsdf</Badge>
                <Badge as="button" variant="outline" cursor="pointer">
                  more...
                </Badge>
              </SimpleGrid>
            </Box>
          ))}
        </Wrap>
      ) : null}
    </Flex>
  );
};

export default Movies;
