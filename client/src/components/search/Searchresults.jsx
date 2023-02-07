import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { AiFillCaretDown, AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login, selectUser } from "../../store/User";
import Skeleton from "../skeleton/Skeleton";

const Searchresults = () => {
  const [movies, setMovies] = useState([]);

  const [tv, setTv] = useState([]);

  const [skeleton, setSkeleton] = useState(false);
  const [search, setSearch] = useState("");

  const lang = useSelector((state) => state.lang.lang);
  const selectedUser = useSelector((state) => state.user.selectedUser);

  const user = useSelector((state) => state.user.user);
  const favAPI = process.env.REACT_APP_ADD_FAV;
  const APIKEY = process.env.REACT_APP_KEY;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (search !== "") {
      getSearchMovies();
      getSearchTv();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);
  //get Search movies
  const getSearchMovies = async () => {
    try {
      setSkeleton(true);
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=en-US&page=1&include_adult=false&query=${search}`
      );

      setMovies(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  //get tv Search
  const getSearchTv = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/tv?api_key=${APIKEY}&language=en-US&page=1&include_adult=false&query=${search}`
      );

      await setTv(res.data.results);

      setSkeleton(false);
    } catch (error) {
      console.log(error);
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
  //handle Seach
  const handleSearch = (e) => {
    if (e.target.value.trimStart() === "") {
      setSearch("spiderman");
    } else {
      setSearch(e.target.value.trimStart());
    }
  };

  return (
    <div className="pt-[80px] w-[85%] mx-auto text-white gap-2 min-h-screen mb-56">
      <div className="w-full h-[40px] text-black my-2">
        <input
          placeholder={lang === "en" ? "Search a name" : "Bir isim ara"}
          className="h-full w-full outline-none p-2"
          type="text"
          onChange={(e) => handleSearch(e)}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2">
        {skeleton === true
          ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7].map((sk, i) => (
              <Skeleton key={i} type="movieCard" />
            ))
          : movies?.map((movie, i) =>
              movie.backdrop_path === null ? null : (
                <div key={i}>
                  {" "}
                  <div className="z-20 relative hover:delay-1000 my-auto w-full group hover:scale-[1.2] hover:z-30  duration-300 ">
                    <Link to={`/details/${movie.id}`}>
                      <LazyLoadImage
                        className="h-[120px]  delay-1000  w-full object-center object-cover  duration-300  bg-contain bg-center bg-black bg-no-repeat"
                        src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`}
                        alt=""
                        style={{ backgroundImage: "url('/images/logo_N.png')" }}
                      />
                    </Link>
                    <div className="h-0 overflow-hidden group-hover:overflow-visible !opacity-0 group-hover:!opacity-100 delay-1000 duration-500  group-hover:h-fit  flex flex-col bg-black text-white absolute z-30 ">
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
                                {selectedUser.favorites?.find(
                                  (i) => i.id === movie.id
                                )
                                  ? lang === "en"
                                    ? "Remove From Favorites"
                                    : "Favorilerden Çıkar"
                                  : lang === "en"
                                  ? "Add Favorites"
                                  : "Favorilere Ekle:"}
                                <AiFillCaretDown className="text-white absolute -bottom-[8px] left-1/2 -translate-x-1/2" />
                              </div>
                            </div>

                            {selectedUser.favorites?.find(
                              (i) => i.id === movie.id
                            ) ? (
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
                </div>
              )
            )}

        {skeleton === true
          ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7].map((sk, i) => (
              <Skeleton key={i} type="movieCard" />
            ))
          : tv?.map((movie, i) =>
              movie.backdrop_path === null ? null : (
                <div key={i}>
                  {" "}
                  <div className="z-20 relative hover:delay-1000 my-auto w-full group hover:scale-[1.2] hover:z-30  duration-300 ">
                    <Link to={`/details/tv/${movie.id}`}>
                      <LazyLoadImage
                        className="h-[120px]  delay-1000  w-full object-center object-cover  duration-300  bg-contain bg-center bg-black bg-no-repeat"
                        src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`}
                        alt=""
                        style={{ backgroundImage: "url('/images/logo_N.png')" }}
                      />
                    </Link>
                    <div className="h-0 overflow-hidden group-hover:overflow-visible !opacity-0 group-hover:!opacity-100 delay-1000 duration-500  group-hover:h-fit  flex flex-col bg-black text-white absolute z-30 ">
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
                                {selectedUser.favorites?.find(
                                  (i) => i.id === movie.id
                                )
                                  ? lang === "en"
                                    ? "Remove From Favorites"
                                    : "Favorilerden Çıkar"
                                  : lang === "en"
                                  ? "Add Favorites"
                                  : "Favorilere Ekle:"}
                                <AiFillCaretDown className="text-white absolute -bottom-[8px] left-1/2 -translate-x-1/2" />
                              </div>
                            </div>

                            {selectedUser.favorites?.find(
                              (i) => i.id === movie.id
                            ) ? (
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
                </div>
              )
            )}
      </div>
    </div>
  );
};

export default Searchresults;
