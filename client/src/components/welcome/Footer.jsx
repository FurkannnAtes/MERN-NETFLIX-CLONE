import { AiOutlineGlobal } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { enChange, trChange } from "../../store/Lang";

const Footer = () => {
  const lang = useSelector((state) => state.lang.lang);
  const dispatch = useDispatch();
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
    <div
      className={`flex flex-col gap-5 bg-black px-5 lg:px-10 max-w-[920px] mx-auto z-10 relative pb-2 py-10`}
    >
      <div className="flex items-center  gap-2 text-gray-400">
        {lang === "en"
          ? "Questions? Call 0850-390-7444"
          : "Sorularınız mı var? 0850-390-7444 numaralı telefonu arayın"}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 items-center  md:flex-row justify-between text-gray-400">
        <div className="flex flex-col gap-2">
          <div className="hover:underline cursor-pointer">
            {lang === "en" ? "FAQ" : "SSS"}
          </div>
          <div className="hover:underline cursor-pointer">
            {lang === "en" ? "Only on Netflix" : "Sadece Netflix'te"}
          </div>
          <div className="hover:underline cursor-pointer">
            {lang === "en" ? "Investor Relations" : "Yatırımcı İlişkileri"}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="hover:underline cursor-pointer">
            {lang === "en" ? "Terms of Use" : "Kullanım Koşulları"}
          </div>
          <div className="hover:underline cursor-pointer">
            {lang === "en" ? "Contact Us" : "Bize Ulaşın"}
          </div>
          <div className="hover:underline cursor-pointer">
            {lang === "en" ? "Help Center" : "Yardım Merkezi"}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="hover:underline cursor-pointer">
            {lang === "en" ? "Jobs" : "İş İmkanları"}
          </div>
          <div className="hover:underline cursor-pointer">
            {lang === "en" ? "Privacy" : "Gizlilik"}
          </div>
          <div className="hover:underline cursor-pointer">
            {lang === "en" ? "Speed Test" : "Hız Testi"}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="hover:underline cursor-pointer">
            {lang === "en" ? "Account" : "Hesap"}
          </div>
          <div className="hover:underline cursor-pointer">
            {lang === "en" ? "Redeem Gift Cards" : "Hediye Kartı Kullan"}
          </div>
          <div className="hover:underline cursor-pointer">
            {lang === "en" ? "Cookie Preferences" : "Çerez Tercihleri"}
          </div>
        </div>
      </div>
      <div>
        <div className="relative">
          <select
            className="text-gray-400 bg-transparent border border-gray-400 rounded-md py-2 p-1 pl-5 relative"
            name="lang"
            value={lang}
            onChange={(e) => changeLang(e)}
            id=""
          >
            <option className="text-gray-400  bg-gray-500" value="tr">
              {lang === "en" ? "Turkish" : "Türkçe"}
            </option>
            <option className="text-gray-400  bg-gray-500" value="en">
              {lang === "en" ? "English" : " İngilizce"}
            </option>
          </select>
          <div className="absolute left-1 bottom-[12px]">
            <AiOutlineGlobal className="text-gray-400  " />
          </div>
        </div>
      </div>
      <div className="text-gray-400 ">
        {lang === "en" ? "Netflix Turkey" : "Netflix Türkiye"}
      </div>
    </div>
  );
};

export default Footer;
