import Banner from "../components/welcome/Banner";
import FAQ from "../components/welcome/FAQ";
import Footer from "../components/welcome/Footer";
//icons
import { AiOutlineArrowDown } from "react-icons/ai";
//Redux
import { useSelector } from "react-redux";

const Welcome = () => {
  const lang = useSelector((state) => state.lang.lang);

  return (
    <div
      className="h-[692px] w-full bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/welcome-bg.jpg')" }}
    >
      <Banner />
      <div className=" border-y-8  border-y-zinc-800 text-white px-2 lg:px-[70px] py-[45px]">
        <div className="flex flex-col lg:flex-row justify-between items-center px-2 lg:px-20 gap-2">
          <div className="flex flex-col gap-2 lg:w-1/2 text-center lg:text-start">
            <div className="text-5xl font-semibold">
              {lang === "en"
                ? "Enjoy on your TV."
                : "Televizyonunuzda izleyebilirsiniz."}
            </div>
            <div className="text-2xl">
              {lang === "en"
                ? "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,Blu-ray players, and more."
                : "Akıllı TV, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray oynatıcılar ve daha fazlasında seyredin."}
            </div>
          </div>
          <div className="lg:w-1/2 ">
            <div className="relative">
              <img className="relative z-20 " src="/images/tv.png" alt="" />
              <video
                src="/videos/welcome1.mp4"
                autoPlay
                muted
                loop
                className="w-[75%] mx-auto absolute -top-2 left-[13%] h-full z-10"
              ></video>
            </div>
          </div>
        </div>
      </div>
      <div className=" border-y-8  border-y-zinc-800 text-white px-2 lg:px-[70px] py-[45px]">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center px-2 lg:px-20 gap-2">
          <div className="lg:w-1/2  flex flex-col gap-2">
            <div className="relative ">
              <img
                className="relative  w-[500px] lg:w-[300px] h-full z-20 "
                src="/images/welcome2.jpg"
                alt=""
              />
              <div className="-mt-10 relative h-[100px] border-2 border-gray-500 rounded-lg flex justify-between items-center p-3 z-30 w-[300px] mx-auto lg:mx-0 bg-black">
                <div className="flex gap-2 items-center">
                  <img className="h-[80px]" src="/images/boxshot.png" alt="" />
                  <div className="flex flex-col  font-semibold">
                    <div className="text-lg">
                      {lang === "en" ? "Stranger Things" : "Stranger Things"}
                    </div>
                    <div className="text-blue-700">
                      {" "}
                      {lang === "en" ? "Downloading..." : "Downloading..."}
                    </div>
                  </div>
                </div>
                <div className="animate-bounce text-2xl mr-5 text-blue-700">
                  <AiOutlineArrowDown />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 lg:w-1/2 text-center lg:text-start">
            <div className="text-5xl font-semibold">
              {lang === "en"
                ? "Download your shows to watch offline."
                : "Çevrimdışı izlemek için içerikleri indirin."}
            </div>
            <div className="text-2xl">
              {lang === "en"
                ? "Save your favorites easily and always have something to watch."
                : "En sevdiğiniz içerikleri kolayca kaydedin ve her zaman izleyecek bir şeyleriniz olsun."}
            </div>
          </div>
        </div>
      </div>
      <div className=" border-y-8  border-y-zinc-800 text-white px-2 lg:px-[70px] py-[45px]">
        <div className="flex flex-col lg:flex-row justify-between items-center px-2 lg:px-20 gap-2">
          <div className="flex flex-col gap-2 lg:w-1/2 text-center lg:text-start">
            <div className="text-5xl font-semibold">
              {lang === "en"
                ? "Watch everywhere."
                : "İstediğiniz her yerde izleyin."}
            </div>
            <div className="text-2xl">
              {lang === "en"
                ? "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
                : "Ekstra ücret ödemeden telefonda, tablette, bilgisayarda, televizyonda sınırsız film ve dizi izleyin."}
            </div>
          </div>
          <div className="lg:w-1/2 ">
            <div className="relative">
              <img
                className="relative z-20 "
                src="/images/device-pile.png"
                alt=""
              />
              <video
                src="/videos/video-devices.mp4"
                autoPlay
                muted
                loop
                className="w-[60%] mx-auto absolute -top-20 left-[20%] h-full z-10"
              ></video>
            </div>
          </div>
        </div>
      </div>
      <div className=" border-y-8  border-y-zinc-800 text-white px-2 lg:px-[70px] py-[45px]">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center px-2 lg:px-20 gap-2">
          <div className="lg:w-1/2  flex flex-col gap-2">
            <div className="relative ">
              <div className="flex gap-2 items-center">
                <img className="h-full" src="/images/welcome3.png" alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 lg:w-1/2 text-center lg:text-start">
            <div className="text-5xl font-semibold">
              {lang === "en"
                ? "Create profiles for kids."
                : "Çocuklarınız için profiller oluşturun."}
            </div>
            <div className="text-2xl">
              {lang === "en"
                ? "Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
                : "Üyeliğinize dâhil olan bu ücretsiz deneyim sayesinde çocuklarınız, sadece onlara özel bir alanda en sevdikleri karakterlerle maceralara atılabilir."}
            </div>
          </div>
        </div>
      </div>
      <FAQ />
      <Footer />
    </div>
  );
};

export default Welcome;
