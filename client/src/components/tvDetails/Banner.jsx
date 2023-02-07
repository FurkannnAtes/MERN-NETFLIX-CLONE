import React, { useEffect, useState } from "react";

//icons
import { BsFillStarFill } from "react-icons/bs";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const Banner = () => {
  const [details, setDetails] = useState([]);
  const [credits, setCredits] = useState([]);
  const params = useParams();

  const lang = useSelector((state) => state.lang.lang);
  const APIKEY = process.env.REACT_APP_KEY;

  useEffect(() => {
    getMovie();
    getCredits();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  //GET MOVIE
  const getMovie = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/tv/${params.id}?api_key=${APIKEY}&language=en-US`
      );
      setDetails(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  //GET CREDITS
  const getCredits = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/tv/${params.id}/credits?api_key=${APIKEY}&language=en-US`
      );
      setCredits(res.data.cast);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-[900px] bg-center bg-cover bg-no-repeat relative flex flex-col w-[85%] gap-5 bg-black pt-[90px] lg:pt-[80px] mx-auto mb-20">
      <div className="flex flex-col lg:flex-row">
        <div className="z-20 relative w-full  lg:p-0 lg:w-4/12">
          <img
            className=" w-full rounded-xl"
            src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${details.poster_path}`}
            alt=""
          />
        </div>
        <div className="h-full   flex flex-col gap-4 w-full p-3  lg:w-8/12  z-20 relative">
          <div className="flex justify-between items-center ">
            <div className="text-3xl md:text-4xl lg:text-6xl font-semibold">
              {details.name}
            </div>
            <div className="flex items-center gap-2 text-4xl">
              <div className="text-yellow-200">
                <BsFillStarFill />
              </div>
              <div>{details.vote_average}</div>
            </div>
          </div>
          <div className="text-gray-500 text-xl">{details.release_date}</div>
          <div className="text-2xl font-semibold border-b-4 border-red-700 w-fit pb-1">
            {lang === "en" ? "Genres" : "Tür"}
          </div>
          <div className="flex gap-2 flex-wrap">
            {details.genres?.map((genre, i) => (
              <div key={i} className="text-xl border-2 rounded-full p-2">
                {genre.name}
              </div>
            ))}
          </div>
          <div className="text-2xl font-semibold border-b-4 border-red-700 w-fit pb-1">
            {lang === "en" ? "OverView" : "Genel Bakış"}
          </div>
          <div className="text-xl ">{details.overview}</div>
        </div>
      </div>
      <div className="text-2xl font-semibold border-b-4 border-red-700 w-fit pb-1">
        {lang === "en" ? "Top Billed Cast" : "En Çok Kazanan Oyuncular"}
      </div>

      <Swiper
        spaceBetween={10}
        breakpoints={{
          0: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="select-none w-full  detailsCastSwiper h-fit  "
      >
        {credits?.map((cast, index) =>
          cast.profile_path != null ? (
            <SwiperSlide key={index}>
              <img
                src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${cast.profile_path}`}
                alt=""
              />
            </SwiperSlide>
          ) : null
        )}
      </Swiper>
    </div>
  );
};

export default Banner;
