import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { useEffect, useState } from "react";

//import icons
import { BsFillPlayFill } from "react-icons/bs";
import { AiFillCaretDown, AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";
import Skeleton from "../skeleton/Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../../store/User";

//Layz Load Images
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const MovieMultiSliders = () => {
  const [data, setData] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [movies3, setMovies3] = useState([]);
  const [movies4, setMovies4] = useState([]);
  const [movies5, setMovies5] = useState([]);
  const [movies6, setMovies6] = useState([]);
  const [movies7, setMovies7] = useState([]);
  const [movies8, setMovies8] = useState([]);
  const [movies9, setMovies9] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [loading3, setLoading3] = useState(true);
  const [loading4, setLoading4] = useState(true);
  const [loading5, setLoading5] = useState(true);
  const [loading6, setLoading6] = useState(true);
  const [loading7, setLoading7] = useState(true);
  const [loading8, setLoading8] = useState(true);
  const [loading9, setLoading9] = useState(true);

  const lang = useSelector((state) => state.lang.lang);
  const user = useSelector((state) => state.user.user);
  const selectedUser = useSelector((state) => state.user.selectedUser);
  const favAPI = process.env.REACT_APP_ADD_FAV;
  const APIKEY = process.env.REACT_APP_KEY;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getMovies();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //GET MOVIES
  const getMovies = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=${lang}-US&page=1`
      );
      setData(res.data.results);
      getTopRated();

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //Top Rated Movies
  const getTopRated = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=${lang}-US&page=1`
      );
      setTopRated(res.data.results);

      getMovies3();

      setLoading2(false);
    } catch (error) {
      console.log(error);
      setLoading2(false);
    }
  };

  //GET MOVIES
  const getMovies3 = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=${lang}-US&page=3`
      );
      setMovies3(res.data.results);

      getMovies4();

      setLoading3(false);
    } catch (error) {
      console.log(error);
      setLoading3(false);
    }
  };
  //GET MOVIES
  const getMovies4 = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=${lang}-US&page=4`
      );
      setMovies4(res.data.results);

      getMovies5();

      setLoading4(false);
    } catch (error) {
      console.log(error);
      setLoading4(false);
    }
  };
  //GET MOVIES
  const getMovies5 = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=${lang}-US&page=5`
      );
      setMovies5(res.data.results);

      getMovies6();

      setLoading5(false);
    } catch (error) {
      setLoading5(false);
      console.log(error);
    }
  };
  //GET MOVIES
  const getMovies6 = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=${lang}-US&page=6`
      );
      setMovies6(res.data.results);

      getMovies7();

      setLoading6(false);
    } catch (error) {
      console.log(error);
      setLoading6(false);
    }
  };
  //GET MOVIES
  const getMovies7 = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=${lang}-US&page=7`
      );
      setMovies7(res.data.results);

      getMovies8();

      setLoading7(false);
    } catch (error) {
      console.log(error);
      setLoading7(false);
    }
  };
  //GET MOVIES
  const getMovies8 = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=${lang}-US&page=8`
      );
      setMovies8(res.data.results);

      getMovies9();

      setLoading8(false);
    } catch (error) {
      console.log(error);
      setLoading8(false);
    }
  };
  //GET MOVIES
  const getMovies9 = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=${lang}-US&page=9`
      );
      setMovies9(res.data.results);

      setLoading9(false);
    } catch (error) {
      console.log(error);
      setLoading9(false);
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
    <div className="flex flex-col gap-10 py-5 select-none lg:-mt-48 mb-10 relative  ">
      <div className="flex flex-col gap-3 relative z-[29]">
        <div className="w-[85%] mx-auto text-lg font-semibold text-white">
          {lang === "en" ? "Popular" : "Populer"}
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
                slidesPerView: 2,
              },
              500: {
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
            {data?.map((movie, i) =>
              movie.backdrop_path !== null ? (
                <SwiperSlide key={i}>
                  <div className="swiper-card  z-20 relative  hover:delay-1000 my-auto w-full group hover:scale-[1.5] hover:z-30  duration-300 hover:absolute">
                    <Link to={`/details/${movie.id}`}>
                      <LazyLoadImage
                        className="h-[120px]  delay-1000  w-full object-center object-cover  duration-300  bg-contain bg-center bg-black bg-no-repeat"
                        src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`}
                        alt=""
                        style={{ backgroundImage: "url('/images/logo_N.png')" }}
                      />
                    </Link>
                    <div className="h-0 overflow-hidden group-hover:overflow-visible !opacity-0 group-hover:!opacity-100 group-hover:delay-1000 duration-500 -mt-2  group-hover:h-fit  flex flex-col bg-black text-white relative z-30 ">
                      <div className="p-2">
                        <div className="flex items-center gap-2">
                          <Link
                            to={`/movieWatch/${movie.id}`}
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
                          {movie.title}
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
      <div className="flex flex-col gap-3 relative z-[28]">
        <div className="w-[85%] mx-auto text-lg font-semibold  text-white">
          {lang === "en" ? "Top Rated" : "En çok oy Alanlar"}
        </div>
        {loading2 === true ? (
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
                slidesPerView: 2,
              },
              500: {
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
            className="select-none w-[85%] mx-auto  multiMovieSwiper !overflow-visible h-fit"
          >
            {topRated?.map((movie, i) =>
              movie.backdrop_path !== null ? (
                <SwiperSlide key={i}>
                  <div className="swiper-card  z-20 relative  hover:delay-1000 my-auto w-full group hover:scale-[1.5] hover:z-30  duration-300 hover:absolute">
                    <Link to={`/details/${movie.id}`}>
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
                            to={`/movieWatch/${movie.id}`}
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
                          {movie.title}
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
      <div className="flex flex-col gap-3 relative z-[27]  ">
        <div className="w-[85%] mx-auto text-lg font-semibold text-white">
          {lang === "en" ? "Horror" : "Korku"}
        </div>
        {loading3 === true ? (
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
                slidesPerView: 2,
              },
              500: {
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
            className="select-none w-[85%] mx-auto  multiMovieSwiper !overflow-visible h-fit "
          >
            {movies3?.map((movie, i) =>
              movie.backdrop_path !== null ? (
                <SwiperSlide key={i}>
                  <div className="swiper-card  z-20 relative  hover:delay-1000 my-auto w-full group hover:scale-[1.5] hover:z-30  duration-300 hover:absolute">
                    <Link to={`/details/${movie.id}`}>
                      <LazyLoadImage
                        className="h-[120px]  delay-1000  w-full object-center object-cover  duration-300  bg-contain bg-center bg-black bg-no-repeat"
                        src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`}
                        alt=""
                        style={{ backgroundImage: "url('/images/logo_N.png')" }}
                      />
                    </Link>
                    <div className="h-0 overflow-hidden group-hover:overflow-visible !opacity-0 group-hover:!opacity-100 group-hover:delay-1000 duration-500 -mt-2  group-hover:h-fit  flex flex-col bg-black text-white relative ">
                      <div className="p-2">
                        <div className="flex items-center gap-2">
                          <Link
                            to={`/movieWatch/${movie.id}`}
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
                          {movie.title}
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
      <div className="flex flex-col gap-3 relative z-[26]">
        <div className="w-[85%] mx-auto text-lg font-semibold text-white">
          {lang === "en" ? "Action" : "Aksiyon"}
        </div>
        {loading4 === true ? (
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
                slidesPerView: 2,
              },
              500: {
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
            className="select-none w-[85%] mx-auto  multiMovieSwiper !overflow-visible h-fit "
          >
            {movies4?.map((movie, i) =>
              movie.backdrop_path !== null ? (
                <SwiperSlide key={i}>
                  <div className="swiper-card  z-20 relative  hover:delay-1000 my-auto w-full group hover:scale-[1.5] hover:z-30  duration-300 hover:absolute">
                    <Link to={`/details/${movie.id}`}>
                      <LazyLoadImage
                        className="h-[120px]  delay-1000  w-full object-center object-cover  duration-300  bg-contain bg-center bg-black bg-no-repeat"
                        src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`}
                        alt=""
                        style={{ backgroundImage: "url('/images/logo_N.png')" }}
                      />
                    </Link>
                    <div className="h-0 overflow-hidden group-hover:overflow-visible !opacity-0 group-hover:!opacity-100 group-hover:delay-1000 duration-500 -mt-2  group-hover:h-fit  flex flex-col bg-black text-white relative ">
                      <div className="p-2">
                        <div className="flex items-center gap-2">
                          <Link
                            to={`/movieWatch/${movie.id}`}
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
                          {movie.title}
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
      <div className="flex flex-col gap-3 relative z-[25]">
        <div className="w-[85%] mx-auto text-lg font-semibold text-white">
          {lang === "en" ? "Science fiction" : "  Bilim Kurgu"}
        </div>
        {loading5 === true ? (
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
                slidesPerView: 2,
              },
              500: {
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
            className="select-none w-[85%] mx-auto  multiMovieSwiper !overflow-visible h-fit "
          >
            {movies5?.map((movie, i) =>
              movie.backdrop_path !== null ? (
                <SwiperSlide key={i}>
                  <div className="swiper-card  z-20 relative  hover:delay-1000 my-auto w-full group hover:scale-[1.5] hover:z-30  duration-300 hover:absolute">
                    <Link to={`/details/${movie.id}`}>
                      <LazyLoadImage
                        className="h-[120px]  delay-1000  w-full object-center object-cover  duration-300  bg-contain bg-center bg-black bg-no-repeat"
                        src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`}
                        alt=""
                        style={{ backgroundImage: "url('/images/logo_N.png')" }}
                      />
                    </Link>
                    <div className="h-0 overflow-hidden group-hover:overflow-visible !opacity-0 group-hover:!opacity-100 group-hover:delay-1000 duration-500 -mt-2  group-hover:h-fit  flex flex-col bg-black text-white relative ">
                      <div className="p-2">
                        <div className="flex items-center gap-2">
                          <Link
                            to={`/movieWatch/${movie.id}`}
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
                          {movie.title}
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
      <div className="flex flex-col gap-3 relative z-[24]">
        <div className="w-[85%] mx-auto text-lg font-semibold text-white">
          {lang === "en" ? "Love" : " Aşk "}
        </div>
        {loading6 === true ? (
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
                slidesPerView: 2,
              },
              500: {
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
            className="select-none w-[85%] mx-auto  multiMovieSwiper !overflow-visible h-fit "
          >
            {movies6?.map((movie, i) =>
              movie.backdrop_path !== null ? (
                <SwiperSlide key={i}>
                  <div className="swiper-card  z-20 relative  hover:delay-1000 my-auto w-full group hover:scale-[1.5] hover:z-30  duration-300 hover:absolute">
                    <Link to={`/details/${movie.id}`}>
                      <LazyLoadImage
                        className="h-[120px]  delay-1000  w-full object-center object-cover  duration-300  bg-contain bg-center bg-black bg-no-repeat"
                        src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`}
                        alt=""
                        style={{ backgroundImage: "url('/images/logo_N.png')" }}
                      />
                    </Link>
                    <div className="h-0 overflow-hidden group-hover:overflow-visible !opacity-0 group-hover:!opacity-100 group-hover:delay-1000 duration-500 -mt-2  group-hover:h-fit  flex flex-col bg-black text-white relative ">
                      <div className="p-2">
                        <div className="flex items-center gap-2">
                          <Link
                            to={`/movieWatch/${movie.id}`}
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
                          {movie.title}
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
      <div className="flex flex-col gap-3 relative z-[23]">
        <div className="w-[85%] mx-auto text-lg font-semibold text-white">
          {lang === "en" ? "Comedy" : "Komedi"}
        </div>
        {loading7 === true ? (
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
                slidesPerView: 2,
              },
              500: {
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
            className="select-none w-[85%] mx-auto  multiMovieSwiper !overflow-visible h-fit "
          >
            {movies7?.map((movie, i) =>
              movie.backdrop_path !== null ? (
                <SwiperSlide key={i}>
                  <div className="swiper-card  z-20 relative  hover:delay-1000 my-auto w-full group hover:scale-[1.5] hover:z-30  duration-300 hover:absolute">
                    <Link to={`/details/${movie.id}`}>
                      <LazyLoadImage
                        className="h-[120px]  delay-1000  w-full object-center object-cover  duration-300  bg-contain bg-center bg-black bg-no-repeat"
                        src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`}
                        alt=""
                        style={{ backgroundImage: "url('/images/logo_N.png')" }}
                      />
                    </Link>
                    <div className="h-0 overflow-hidden group-hover:overflow-visible !opacity-0 group-hover:!opacity-100 group-hover:delay-1000 duration-500 -mt-2  group-hover:h-fit  flex flex-col bg-black text-white relative ">
                      <div className="p-2">
                        <div className="flex items-center gap-2">
                          <Link
                            to={`/movieWatch/${movie.id}`}
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
                          {movie.title}
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
      <div className="flex flex-col gap-3 relative z-[22]">
        <div className="w-[85%] mx-auto text-lg font-semibold text-white">
          {lang === "en" ? "Income" : "Gerilim"}
        </div>
        {loading8 === true ? (
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
                slidesPerView: 2,
              },
              500: {
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
            className="select-none w-[85%] mx-auto  multiMovieSwiper !overflow-visible h-fit "
          >
            {movies8?.map((movie, i) =>
              movie.backdrop_path !== null ? (
                <SwiperSlide key={i}>
                  <div className="swiper-card  z-20 relative  hover:delay-1000 my-auto w-full group hover:scale-[1.5] hover:z-30  duration-300 hover:absolute">
                    <Link to={`/details/${movie.id}`}>
                      <LazyLoadImage
                        className="h-[120px]  delay-1000  w-full object-center object-cover  duration-300  bg-contain bg-center bg-black bg-no-repeat"
                        src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`}
                        alt=""
                        style={{ backgroundImage: "url('/images/logo_N.png')" }}
                      />
                    </Link>
                    <div className="h-0 overflow-hidden group-hover:overflow-visible !opacity-0 group-hover:!opacity-100 group-hover:delay-1000 duration-500 -mt-2  group-hover:h-fit  flex flex-col bg-black text-white relative ">
                      <div className="p-2">
                        <div className="flex items-center gap-2">
                          <Link
                            to={`/movieWatch/${movie.id}`}
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
                          {movie.title}
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
      <div className="flex flex-col gap-3 relative z-[21]">
        <div className="w-[85%] mx-auto text-lg font-semibold text-white">
          {lang === "en" ? "Family" : "Aile"}
        </div>
        {loading9 === true ? (
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
                slidesPerView: 2,
              },
              500: {
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
            className="select-none w-[85%] mx-auto  multiMovieSwiper !overflow-visible h-fit "
          >
            {movies9?.map((movie, i) =>
              movie.backdrop_path !== null ? (
                <SwiperSlide key={i}>
                  <div className="swiper-card  z-20 relative  hover:delay-1000 my-auto w-full group hover:scale-[1.5] hover:z-30  duration-300 hover:absolute">
                    <Link to={`/details/${movie.id}`}>
                      <LazyLoadImage
                        className="h-[120px]  delay-1000  w-full object-center object-cover  duration-300  bg-contain bg-center bg-black bg-no-repeat"
                        src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`}
                        alt=""
                        style={{ backgroundImage: "url('/images/logo_N.png')" }}
                      />
                    </Link>
                    <div className="h-0 overflow-hidden group-hover:overflow-visible !opacity-0 group-hover:!opacity-100 group-hover:delay-1000 duration-500 -mt-2  group-hover:h-fit  flex flex-col bg-black text-white relative ">
                      <div className="p-2">
                        <div className="flex items-center gap-2">
                          <Link
                            to={`/movieWatch/${movie.id}`}
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
                          {movie.title}
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
    </div>
  );
};

export default MovieMultiSliders;
