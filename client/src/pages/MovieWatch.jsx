import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

import { Link, useParams } from "react-router-dom";

//icons
import { IoMdArrowRoundBack } from "react-icons/io";
const MovieWatch = () => {
  const [video, setVideo] = useState([]);

  const params = useParams();
  useEffect(() => {
    getVideo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getVideo = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=e6d3b8a014913c3803dbd7b39824a56b&language=en-US`
      );
      setVideo(res.data.results[0].key);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-screen w-screen relative overflow-x-hidden">
      <Link to="/home">
        <IoMdArrowRoundBack className="font-semibold text-gray-400 absolute text-4xl top-16 left-5 cursor-pointer" />
      </Link>
      <iframe
        className="w-screen h-screen"
        src={`https://www.youtube.com/embed/${video}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="autoplay"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MovieWatch;
