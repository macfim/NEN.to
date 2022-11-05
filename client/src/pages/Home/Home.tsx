import { HStack, Button, Container } from "@chakra-ui/react";

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
  return (
    <>
      <Container>
        <HStack justify="space-between" py="1rem">
          {genres.map((genre, i) => (
            <Button key={i} variant="ghost">{genre.title}</Button>
          ))}
        </HStack>
      </Container>
      <Movies />
    </>
  );
};

export default Home;
