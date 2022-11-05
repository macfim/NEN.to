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

const Movies = () => {
  return (
    <Flex
      as="main"
      my="2rem"
      maxW="90rem"
      flexDirection="row"
      mx="auto"
      px="2rem"
    >
      <Wrap spacing="3rem" justify="center">
        <Box w="12rem" pb=".5rem" px=".1rem">
          <AspectRatio ratio={2 / 3}>
            <Image
              src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/one_21.jpg"
              fallback={<Skeleton />}
              borderRadius="5px"
            />
          </AspectRatio>
          <Heading as="h3" size="md" textAlign="center" py="1rem">
            Spider-man
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
      </Wrap>
    </Flex>
  );
};

export default Movies;
