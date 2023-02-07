import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//icons
import { AiOutlineGlobal, AiOutlineRight } from "react-icons/ai";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { enChange, trChange } from "../../store/Lang";

const Banner = () => {
  const [email, setEmail] = useState("");
  const emailLabelRef = useRef(null);
  const emailInputRef = useRef(null);
  const navigate = useNavigate();

  const lang = useSelector((state) => state.lang.lang);
  const dispatch = useDispatch();

  //LABEL ANIMATION
  const labelAnimationOut = (e) => {
    if (e.target.value === "") {
      emailLabelRef.current.classList.remove("!top-3");
      emailLabelRef.current.classList.remove("!-left-1");
      emailLabelRef.current.classList.remove("!scale-75");
    }
  };
  //LABEL ANIMATION
  const labelAnimationIn = (e) => {
    emailLabelRef.current.classList.add("!top-3");
    emailLabelRef.current.classList.add("!-left-1");
    emailLabelRef.current.classList.add("!scale-75");
  };
  //NAVIGATE REGISTER
  const navigateRegister = (e) => {
    e.preventDefault();
    navigate(`/register/${email}`);
  };
  //EMAIL VALUE CALC
  const emailValue = (e) => {
    e.target.value = e.target.value.trimStart();
    setEmail(e.target.value);
  };
  //LANG CHANGE
  const changeLang = (e) => {
    if (e.target.value === "en") {
      localStorage.setItem("lang", "en");
      dispatch(enChange());
    } else {
      dispatch(trChange());
      localStorage.setItem("lang", "tr");
    }
  };
  return (
    <>
      <div className="absolute z-10 top-0 left-0 w-full h-[692px]  bg-gradient-to-t to-[rgb(0,0,0,0.6)] from-[rgb(0,0,0,0.6)] via-transparent "></div>
      <div className="flex flex-col z-20 relative h-full">
        <div className="flex justify-between px-1 md:px-5 lg:px-10 items-center relative">
          <div>
            <img
              className="h-full w-[150px]"
              src="/images/logo_netflix.png"
              alt=""
            />
          </div>
          <div className="flex gap-2 items-center">
            <div className="relative">
              <select
                className="text-white  bg-transparent border border-white rounded-md py-2 p-1 pl-5 relative"
                name="lang"
                value={lang}
                onChange={(e) => changeLang(e)}
              >
                <option className="text-gray-400  bg-gray-500" value="tr">
                  {lang === "en" ? "Turkish" : "Türkçe"}
                </option>
                <option className="text-gray-400  bg-gray-500" value="en">
                  {lang === "en" ? "English" : " İngilizce"}
                </option>
              </select>
              <div className="absolute left-1 bottom-[12px]">
                <AiOutlineGlobal className="text-white " />
              </div>
            </div>
            <Link
              to="/login"
              className="bg-red-600 text-white px-4 py-2 rounded-md"
            >
              {lang === "en" ? "Sing In" : "Oturum Aç"}
            </Link>
          </div>
        </div>
        <div className=" my-auto flex flex-col gap-2 w-fit mx-auto text-white">
          <div className="text-2xl md:text-4xl lg:text-5xl font-semibold text-center">
            {lang === "en" ? (
              <div>
                Unlimited movies, TV <br />
                shows, and more.
              </div>
            ) : (
              <div>
                Sınırsız film, dizi ve çok .<br />
                daha fazlası
              </div>
            )}
          </div>
          <div className="text-xl md:text-2xl lg:text-3xl text-center">
            {lang === "en"
              ? "Watch anywhere. Cancel anytime."
              : "İstediğiniz yerde izleyin. İstediğiniz zaman iptal edin."}
          </div>
          <div className="font-semibold text-xl text-center">
            {lang === "en"
              ? "Ready to watch? Enter your email to create or restart your membership."
              : "İzlemeye hazır mısınız? Üyelik oluşturmak veya üyeliğinize erişmek için e‑posta adresinizi girin"}
          </div>
          <div>
            <form onSubmit={(e) => navigateRegister(e)} action="">
              <label
                htmlFor="hotamailWelcome"
                className="flex w-11/12 mx-auto lg:w-[800px] mt-2 relative overflow-hidden rounded-sm "
              >
                <label
                  ref={emailLabelRef}
                  className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 font-semibold  duration-300 "
                >
                  {lang === "en" ? "Email address" : "E-posta adresi"}
                </label>
                <input
                  ref={emailInputRef}
                  onChange={(e) => emailValue(e)}
                  value={email}
                  onFocus={(e) => labelAnimationIn(e)}
                  onBlur={(e) => labelAnimationOut(e)}
                  id="hotamailWelcome"
                  className="outline-none border-none w-8/12 h-[60px] text-black pl-2"
                  type="email"
                  required
                />
                <button className="flex items-center justify-center gap-1  w-4/12 bg-red-600 text-center lg:text-2xl font-semibold">
                  {lang === "en" ? "Get Started" : "Başlayın"}{" "}
                  <AiOutlineRight className="mt-1" />
                </button>
              </label>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
