import { useRef, useState } from "react";

//REACT ICONS
import { VscUnmute, VscMute } from "react-icons/vsc";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
      <div className="w-screen h-[500px] lg:h-screen">
        <video
          poster="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/VA50wq7gguuxXVZUoRL9WkqGiY.jpg"
          src="/videos/tv.mp4"
          ref={bannerVideo}
          autoPlay
          muted
          loop
          className="w-screen h-full  object-cover"
        ></video>
      </div>

      <button
        onClick={() => handleMute()}
        className="absolute right-5 md:right-24 bottom-[25%] lg:bottom-56 z-20 text-white  text-4xl"
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
        <img
          className="w-[300px] h-[200px] -ml-5 "
          src="/images/murder.png"
          alt=""
        />
        <div className="hidden lg:flex flex-col gap-2 p-2">
          <div className="text-3xl font-semibold">
            {lang === "en"
              ? "Today's Top 10 TV Series"
              : "Bugünün En İyi 10 TV Dizisi"}
          </div>
          <div className="max-w-[500px] leading-4 ">
            {lang === "en"
              ? "Now private detectives launching their own agency, Nick and Audrey Spitz land at the center of an international investigation when a friend is abducted."
              : "Artık kendi ajanslarını kuran özel dedektifler olan Nick ve Audrey Spitz, bir arkadaşları kaçırılınca uluslararası bir soruşturmanın merkezine düşerler."}
          </div>
        </div>
        <div className="flex gap-3 lg:p-2">
          <Link
            to="/movieWatch/638974"
            className="flex gap-2 items-center justify-center bg-white text-black font-semibold px-4 p-2  text-lg rounded-md"
          >
            <BsFillPlayFill />
            {lang === "en" ? "Play" : "Oynat"}
          </Link>
          <Link
            to="/details/638974"
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
