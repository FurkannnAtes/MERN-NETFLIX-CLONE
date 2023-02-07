import React from "react";
import Banner from "../components/tv/Banner";
import TvMultiSliders from "../components/tv/TvMultiSliders";

const Tv = () => {
  return (
    <div className="bg-black overflow-x-hidden overflow-hidden  pb-48">
      <Banner />
      <TvMultiSliders />
    </div>
  );
};

export default Tv;
