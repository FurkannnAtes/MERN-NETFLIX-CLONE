import Banner from "../components/home/Banner";
import MovieMultiSliders from "../components/home/MovieMultiSliders";

const Movies = () => {
  return (
    <div className="bg-black overflow-x-hidden overflow-hidden  pb-48">
      <Banner />
      <MovieMultiSliders />
    </div>
  );
};

export default Movies;
