import { lazy, Suspense } from "react";

const Genres = lazy(() => import("../../components/Home/Genres"));
const Movies = lazy(() => import("../../components/Home/Movies"));

const Home = () => {
  return (
    <>
      <Suspense>
        <Genres />
        <Movies />
      </Suspense>
    </>
  );
};

export default Home;
