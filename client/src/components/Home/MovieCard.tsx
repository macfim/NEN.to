import {
  Box,
  Image,
  Heading,
  Badge,
  SimpleGrid,
  AspectRatio,
  Skeleton,
  GridItem,
} from "@chakra-ui/react";

import { IMovie } from "../../utils/interfaces";

type Props = {
  movie: IMovie;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <GridItem w="full" pb=".5rem" px=".1rem">
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
    </GridItem>
  );
};

export default MovieCard;
