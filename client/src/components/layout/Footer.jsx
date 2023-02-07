import { useLocation } from "react-router-dom";
//ICONS
import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { useSelector } from "react-redux";

const Footer = () => {
  const location = useLocation();
  const needle = [
    "movieWatch",
    "tvWatch",
    "login",
    "register",
    "chooseUser",
    "addUser",
  ];
  const lang = useSelector((state) => state.lang.lang);
  return (
    <div
      className={`${
        needle.some((i) => location.pathname.includes(i)) ? "hidden" : ""
      }
      ${
        location.pathname === "/" ? "hidden" : ""
      } flex flex-col gap-5 bg-black px-5 lg:px-10 max-w-[920px] mx-auto z-10 relative pb-2 `}
    >
      <div className="flex items-center  gap-2 text-white text-4xl">
        <AiFillFacebook className="cursor-pointer" />
        <AiOutlineInstagram className="cursor-pointer" />
        <AiFillYoutube className="cursor-pointer" />
        <AiOutlineTwitter className="cursor-pointer" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 items-center  md:flex-row justify-between text-gray-400">
        <div className="flex flex-col gap-2">
          <div className="hover:underline cursor-pointer">
            {lang === "en" ? "Audio Description" : "Sesli Betimleme"}
          </div>
          <div className="hover:underline cursor-pointer">
            {lang === "en" ? "Investor Relations" : "Yatırımcı İlişkileri"}
          </div>
          <div className="hover:underline cursor-pointer">
            {lang === "en" ? "Legal Provisions" : "Yasal Hükümler"}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="hover:underline cursor-pointer">
            {lang === "en" ? "Help center" : "Yardım Merkezi"}
          </div>
          <div className="hover:underline cursor-pointer">
            {lang === "en" ? "Job oppurtunities" : "İş İmkanları"}
          </div>
          <div className="hover:underline cursor-pointer">
            {lang === "en" ? "Cookie Preferences" : "Çerez Tercihleri"}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="hover:underline cursor-pointer">
            {lang === "en" ? "Gift Cards" : "Hediye Kartları"}
          </div>
          <div className="hover:underline cursor-pointer">
            {lang === "en" ? "Terms of Use" : "Kullanım Koşulları"}
          </div>
          <div className="hover:underline cursor-pointer">
            {lang === "en" ? "Corporate Information" : "Kurumsal Bilgiler"}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="hover:underline cursor-pointer">
            {lang === "en" ? "Media Center" : "Medya Merkezi"}
          </div>
          <div className="hover:underline cursor-pointer">
            {lang === "en" ? "Security" : "Gizlilik"}Gizlilik
          </div>
          <div className="hover:underline cursor-pointer">
            {lang === "en" ? "Contact us" : "Bize Ulaşın"}
          </div>
        </div>
      </div>
      <div>
        <button className="border border-gray-500 text-gray-400 hover:text-white p-2">
          {lang === "en" ? "Service Code" : "Hizmet Kodu"}
        </button>
      </div>
    </div>
  );
};

export default Footer;
