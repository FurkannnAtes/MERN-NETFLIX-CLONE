import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useSelector } from "react-redux";
const FAQ = () => {
  const lang = useSelector((state) => state.lang.lang);
  const [faq, setFaq] = useState(0);
  return (
    <div className=" border-y-8  border-y-zinc-800 text-white   px-2 lg:px-[70px] py-[45px] select-none">
      <div className="text-center text-4xl lg:text-6xl mb-5">
        {lang === "en" ? "Frequently Asked Questions" : "Sıkça Sorulan Sorular"}
      </div>
      <div className="flex flex-col gap-2 text-white md:w-8/12 mx-auto">
        <div
          className={`${
            faq === 1 ? "h-[175px]" : "h-[49px]"
          } flex flex-col  bg-zinc-700 text-2xl overflow-y-hidden  duration-300`}
        >
          <div
            onClick={() => setFaq(faq === 1 ? 0 : 1)}
            className="flex h-[49px] cursor-pointer justify-between items-center p-2 px-5 border-b border-black"
          >
            <div>{lang === "en" ? "What is Netflix?" : "Netflix nedir?"}</div>
            <div>
              <AiOutlinePlus
                className={`${
                  faq === 1 ? "rotate-45" : "rotate-0"
                } duration-300`}
              />
            </div>
          </div>
          <div className="p-2 px-5">
            {lang === "en"
              ? "Netflix is a streaming service that offers a wide variety ofaward-winning TV shows, movies, anime, documentaries, and more onthousands of internet-connected devices."
              : "Netflix; internet bağlantılı binlerce cihazda ödüllü diziler, filmler, animeler, belgeseller ve daha fazlasını içeren geniş bir arşiv sunan bir streaming hizmetidir. Tek bir reklam olmadan, istediğiniz kadar, istediğiniz zaman ."}
          </div>
        </div>

        <div
          className={`${
            faq === 2 ? "h-[170px]" : "h-[49px]"
          } flex flex-col  bg-zinc-700 text-2xl overflow-y-hidden  duration-300`}
        >
          <div
            onClick={() => setFaq(faq === 2 ? 0 : 2)}
            className="flex h-[49px] cursor-pointer justify-between items-center p-2 px-5 border-b border-black"
          >
            <div>
              {lang === "en"
                ? "How much does Netflix cost?"
                : "Netflix'in maliyeti nedir?"}{" "}
            </div>
            <div>
              <AiOutlinePlus
                className={`${
                  faq === 2 ? "rotate-45" : "rotate-0"
                } duration-300`}
              />
            </div>
          </div>
          <div className="p-2 px-5">
            {lang === "en"
              ? "Watch Netflix on your smartphone, tablet, Smart TV, laptop, orstreaming device, all for one fixed monthly fee. Plans range from 63.99 TL to 130.99 TL a month. No extra costs, no contracts."
              : "Netflix'i akıllı telefonunuz, tabletiniz, Akıllı TV'niz, dizüstü bilgisayarınız veya yayın cihazınızda sabit bir aylık ücretle izleyin. Aylık plan ücretleri 63,99 TL ile 130,99 TL arasında değişmektedir. Ekstra maliyet yok, sözleşme yok."}
          </div>
        </div>

        <div
          className={`${
            faq === 3 ? "h-[200px]" : "h-[49px]"
          } flex flex-col  bg-zinc-700 text-2xl overflow-y-hidden  duration-300`}
        >
          <div
            onClick={() => setFaq(faq === 3 ? 0 : 3)}
            className="flex h-[49px] cursor-pointer justify-between items-center p-2 px-5 border-b border-black"
          >
            <div>
              {lang === "en" ? "Where can I watch?" : "Nerede izleyebilirim?"}
            </div>
            <div>
              <AiOutlinePlus
                className={`${
                  faq === 3 ? "rotate-45" : "rotate-0"
                } duration-300`}
              />
            </div>
          </div>
          <div className="p-2 px-5">
            {lang === "en"
              ? " Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app,  including smart TVs, smartphones, tablets, streaming media players and game consoles."
              : "İstediğiniz yerde, istediğiniz zaman izleyin. Bilgisayarınızda netflix.com adresinden veya akıllı TV'ler, akıllı telefonlar, tabletler, medya oynatıcılar ve oyun konsolları dahil Netflix uygulamasını sunan, internet bağlantılı herhangi bir cihazda anında izlemek için Netflix hesabınızla oturum açın. "}
          </div>
        </div>

        <div
          className={`${
            faq === 4 ? "h-[170px]" : "h-[49px]"
          } flex flex-col  bg-zinc-700 text-2xl overflow-y-hidden  duration-300`}
        >
          <div
            onClick={() => setFaq(faq === 4 ? 0 : 4)}
            className="flex h-[49px] cursor-pointer justify-between items-center p-2 px-5 border-b border-black"
          >
            <div>
              {lang === "en" ? "How do I cancel?" : "Nasıl iptal ederim?"}
            </div>
            <div>
              <AiOutlinePlus
                className={`${
                  faq === 4 ? "rotate-45" : "rotate-0"
                } duration-300`}
              />
            </div>
          </div>
          <div className="p-2 px-5">
            {lang === "en"
              ? "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
              : "Netflix esnektir. Sinir bozucu hiçbir sözleşme ve taahhüt yoktur. Hesabınızı çevrimiçi olarak iki tıklamayla kolayca iptal edebilirsiniz. İptal ücreti yoktur - hesabınızı istediğiniz zaman başlatın veya durdurun."}
          </div>
        </div>

        <div
          className={`${
            faq === 5 ? "h-[170px]" : "h-[49px]"
          } flex flex-col  bg-zinc-700 text-2xl overflow-y-hidden  duration-300`}
        >
          <div
            onClick={() => setFaq(faq === 5 ? 0 : 5)}
            className="flex h-[49px] cursor-pointer justify-between items-center p-2 px-5 border-b border-black"
          >
            <div>
              {lang === "en"
                ? "What can I watch on Netflix?"
                : "Netflix'te ne izleyebilirim?"}
            </div>
            <div>
              <AiOutlinePlus
                className={`${
                  faq === 5 ? "rotate-45" : "rotate-0"
                } duration-300`}
              />
            </div>
          </div>
          <div className="p-2 px-5">
            {lang === "en"
              ? " Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
              : "Netflix, uzun metrajlı filmler, belgeseller, diziler ve programlar, anime, ödüllü Netflix orijinal içerikleri ve daha fazlasından oluşan kapsamlı bir kütüphaneye sahiptir."}
          </div>
        </div>

        <div
          className={`${
            faq === 6 ? "h-[270px]" : "h-[49px]"
          } flex flex-col  bg-zinc-700 text-2xl overflow-y-hidden  duration-300`}
        >
          <div
            onClick={() => setFaq(faq === 6 ? 0 : 6)}
            className="flex h-[49px] cursor-pointer justify-between items-center p-2 px-5 border-b border-black"
          >
            <div>
              {lang === "en"
                ? "Is Netflix good for kids?"
                : "Netflix çocuklar için uygun mudur?"}
            </div>
            <div>
              <AiOutlinePlus
                className={`${
                  faq === 6 ? "rotate-45" : "rotate-0"
                } duration-300`}
              />
            </div>
          </div>
          <div className="p-2 px-5">
            <p className="mb-2">
              {" "}
              {lang === "en"
                ? "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space."
                : "Üyeliğinize dâhil olan Netflix Çocuk deneyimi, çocukların ailece izlenebilecek dizi ve filmleri kendilerine özel bir alanda izlemelerini sağlarken kontrolü ebeveynlere verir."}
            </p>
            <p>
              {" "}
              {lang === "en"
                ? "Kids profiles come with PIN-protected parental controls that letyou restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
                : "Çocuk profillerinde bulunan PIN korumalı ebeveyn kontrolleri sayesinde, çocukların izleyebileceği içeriklerin yetişkinlik düzeylerini kısıtlayabilir ve onların görmesini istemediğiniz belirli içerikleri engelleyebilirsiniz."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
