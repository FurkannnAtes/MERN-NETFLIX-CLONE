import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
//REACT ICONS
import { VscUnmute, VscMute } from "react-icons/vsc";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Banner = () => {
  const [muted, setMuted] = useState(true);
  const ref = useRef();
  const bannerVideo = ref;

  const lang = useSelector((state) => state.lang.lang);

  // MUTE BANNER VIDEO
  const handleMute = () => {
    if (bannerVideo.current.muted === true) {
      bannerVideo.current.muted = false;
      setMuted(false);
    } else {
      bannerVideo.current.muted = true;
      setMuted(true);
    }
  };
  return (
    <div className="relative mt-[80px] lg:mt-0">
      <div className="w-screen h-[500px] lg:h-screen ">
        <video
          poster="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg"
          src="/videos/marvel.mp4"
          ref={bannerVideo}
          autoPlay
          muted
          loop
          className="w-screen h-full object-fill "
        ></video>
      </div>

      <button
        onClick={() => handleMute()}
        className="absolute right-5 md:right-24 bottom-[31%] lg:bottom-56 z-20 text-white  text-4xl"
      >
        {muted === true ? (
          <div className="border-2 border-white rounded-full  p-2">
            <VscMute />
          </div>
        ) : (
          <div className="border-2 border-white rounded-full  p-2">
            <VscUnmute />
          </div>
        )}
      </button>
      <div className="flex flex-col gap-3 text-white absolute left-5 md:left-24 bottom-1/2 translate-y-1/2 lg:-translate-y-0 lg:bottom-56">
        <img className="w-[300px] " src="/images/avengerslogo.png" alt="" />
        <div className="hidden lg:flex flex-col gap-2 p-2">
          <div className="text-3xl font-semibold">
            {lang === "en" ? "Ageless" : "Eskimeyen"}
          </div>
          <div className="max-w-[500px] leading-4 ">
            {lang === "en"
              ? "TAs the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos."
              : "Yenilmezler ve müttefikleri, dünyayı herhangi bir kahramanın başa çıkamayacağı kadar büyük tehditlerden korumaya devam ederken, kozmik gölgelerden yeni bir tehlike ortaya çıktı: Thanos. "}
          </div>
        </div>
        <div className="flex gap-3 lg:p-2">
          <Link
            to="/movieWatch/299536"
            className="flex gap-2 items-center justify-center bg-white text-black font-semibold px-4 p-2  text-lg rounded-md"
          >
            <BsFillPlayFill />
            {lang === "en" ? "Play" : "Oynat"}
          </Link>
          <Link
            to="/details/299536"
            className="flex text-lg gap-2 items-center justify-center bg-gray-500 font-semibold px-4 p-2 rounded-md"
          >
            <AiOutlineInfoCircle />
            {lang === "en" ? "More Info" : "Daha Fazla Bilgi"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
