import axios from "axios";
import React, { useEffect, useState } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

//icons
import { AiFillCaretDown, AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import Skeleton from "../skeleton/Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../../store/User";

//Layz Load Images
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const SimilarTv = () => {
  const [similar, setSimilar] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  const lang = useSelector((state) => state.lang.lang);

  const user = useSelector((state) => state.user.user);
  const selectedUser = useSelector((state) => state.user.selectedUser);
  const favAPI = process.env.REACT_APP_ADD_FAV;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const APIKEY = process.env.REACT_APP_KEY;

  useEffect(() => {
    getSimilarMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);
  const getSimilarMovies = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`
            https://api.themoviedb.org/3/tv/${params.id}/similar?api_key=${APIKEY}&language${lang}-US&page=1`);

      setSimilar(res.data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //ADD FAV
  const addMyList = async (movie) => {
    try {
      const res = await axios.put(`${favAPI}${user._id}`, {
        userId: selectedUser.id,
        movie: movie,
      });
      dispatch(login(res.data));
      const selectedUserUpdate = await res.data.users.find(
        (i) => selectedUser.id === i.id
      );
      dispatch(selectUser(selectedUserUpdate));
      navigate("/favorites");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mb-56">
      <div className="text-3xl font-semibold w-[85%] mx-auto my-5">
        {lang === "en" ? "Similar" : "Benzer"}
      </div>
      {loading === true ? (
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2 h-[120px] overflow-hidden w-[85%] mx-auto ">
          {[1, 2, 3, 4, 5, 6].map((sk, i) => (
            <Skeleton key={i} type="movieCard" />
          ))}
        </div>
      ) : (
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
          className="select-none w-[85%] mx-auto  multiMovieSwiper !overflow-visible h-fit  "
        >
          {similar?.map((movie, i) =>
            movie.backdrop_path !== null ? (
              <SwiperSlide key={i}>
                <div className="swiper-card  z-20 relative  hover:delay-1000 my-auto w-full group hover:scale-[1.5] hover:z-30  duration-300 hover:absolute">
                  <Link to={`/details/tv/${movie.id}`}>
                    <LazyLoadImage
                      className="h-[120px]  delay-1000  w-full  object-center object-cover  duration-300  bg-contain bg-center bg-black bg-no-repeat"
                      src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`}
                      alt=""
                      style={{ backgroundImage: "url('/images/logo_N.png')" }}
                    />
                  </Link>
                  <div className="h-0 overflow-hidden group-hover:overflow-visible !opacity-0 group-hover:!opacity-100 group-hover:delay-1000 duration-500 -mt-2  group-hover:h-fit  flex flex-col bg-black text-white relative ">
                    <div className="p-2">
                      <div className="flex items-center gap-2">
                        <Link
                          to={`/tvWatch/${movie.id}`}
                          className="border bg-white border-white rounded-full p-2 cursor-pointer"
                        >
                          {" "}
                          <BsFillPlayFill className="text-black " />
                        </Link>
                        <div
                          onClick={() => addMyList(movie)}
                          className="border hover:border-gray-400  border-white rounded-full p-2 relative  group/tool"
                        >
                          <div className="absolute w-[130px] rounded-sm hidden group-hover/tool:block  -translate-x-1/2 -top-7 left-1/2 bg-white text-black ">
                            <div className="relative text-center rounded-lg text-xs font-semibold">
                              {JSON.parse(
                                localStorage.getItem("SelectedUser")
                              ).favorites?.find((i) => i.id === movie.id)
                                ? lang === "en"
                                  ? "Remove From Favorites"
                                  : "Favorilerden Çıkar"
                                : lang === "en"
                                ? "Add Favorites"
                                : "Favorilere Ekle:"}
                              <AiFillCaretDown className="text-white absolute -bottom-[8px] left-1/2 -translate-x-1/2" />
                            </div>
                          </div>
                          {JSON.parse(
                            localStorage.getItem("SelectedUser")
                          ).favorites?.find((i) => i.id === movie.id) ? (
                            <AiOutlineCheck />
                          ) : (
                            <AiOutlinePlus />
                          )}
                        </div>

                        <div className="flex items-center gap-1 ml-auto">
                          <span className="flex">
                            <span
                              className=" bg-emerald-400 !min-w-[35px] !min-h-[35px]
              rounded-full
              text-white
              font-semibold
              p-1 flex items-center justify-center"
                            >
                              {movie.vote_average.toFixed(1)}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 text-xs p-2">
                      <div>
                        <span className="text-emerald-400  font-semibold ">
                          {lang === "en" ? "Name:" : "İsim:"}
                        </span>{" "}
                        {movie.name}
                      </div>
                      <p className="line-clamp-3">
                        {" "}
                        <span className="text-emerald-400  font-semibold ">
                          {lang === "en" ? "Description:" : "Açıklama:"}
                        </span>{" "}
                        {movie.overview}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ) : null
          )}
        </Swiper>
      )}
    </div>
  );
};

export default SimilarTv;
