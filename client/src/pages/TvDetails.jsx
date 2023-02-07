import React from "react";
import Banner from "../components/tvDetails/Banner";

import SimilarTv from "../components/tvDetails/SimilarTv";

const TvDetails = () => {
  return (
    <div className="min-h-screen  overflow-x-hidden text-white ">
      <Banner />
      <SimilarTv />
    </div>
  );
};

export default TvDetails;
