import Banner from "../components/details/Banner";
import SimilarMovies from "../components/details/SimilarMovies";

const Details = () => {
  return (
    <div className="min-h-screen  overflow-x-hidden text-white ">
      <Banner />
      <SimilarMovies />
    </div>
  );
};

export default Details;
