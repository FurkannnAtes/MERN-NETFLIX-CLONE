import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
//ICONS
import {
  AiFillCaretDown,
  AiFillCaretUp,
  AiOutlineCaretUp,
  AiOutlineQuestionCircle,
  AiOutlineUser,
  AiTwotoneEdit,
} from "react-icons/ai";
import { FaRegBell } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { logout, selectUser } from "../../store/User";

const Navbar = () => {
  const [navShow, setNavShow] = useState(false);

  const navbarRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang.lang);
  const user = useSelector((state) => state.user.user);
  const selectedUser = useSelector((state) => state.user.selectedUser);

  //SCROLL TO TOP
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!user) {
      if (
        location.pathname !== "/" &&
        location.pathname !== "/login" &&
        !location.pathname.includes("register")
      ) {
        navigate("/");
      }
    }
    if (user) {
      if (
        location.pathname === "/" ||
        location.pathname === "/login" ||
        location.pathname.includes("register")
      ) {
        navigate("/chooseUser");
      }
    }
  }, [location.pathname, navigate, user]);

  //NAVBAR CHANGE COLOR
  window.addEventListener("scroll", () => {
    const x = document.documentElement.scrollTop;
    if (x > 80) {
      navbarRef.current.classList.add("lg:bg-black");
      navbarRef.current.classList.remove("lg:bg-transparent");
    } else {
      navbarRef.current.classList.remove("lg:bg-black");
      navbarRef.current.classList.add("lg:bg-transparent");
    }
  });
  const needle = [
    "movieWatch",
    "tvWatch",
    "login",
    "register",
    "chooseUser",
    "addUser",
  ];
  //Select User
  const handleSelectUser = async (u) => {
    const createUser = await {
      id: u.id,
      name: u.name,
      image: u.image,
      favorites: u.favorites,
    };
    await dispatch(selectUser(createUser));
  };

  return (
    <div
      ref={navbarRef}
      className={`${
        needle.some((i) => location.pathname.includes(i)) ? "hidden" : ""
      }
    ${
      location.pathname === "/" ? "hidden" : ""
    } bg-black lg:bg-transparent text-white items-center   select-none fixed top-0 left-0 w-full z-50 `}
    >
      <div
        className={`text-white items-center flex gap-5  select-none mx-auto  w-[85%] z-50 `}
      >
        <Link to="/home">
          <img className="h-[80px]" src="/images/logo_netflix.png" alt="" />
        </Link>
        <div className="relative">
          <div
            className="lg:hidden flex items-center gap-2 cursor-pointer"
            onClick={() => setNavShow(navShow === true ? false : true)}
          >
            <span>{lang === "en" ? "Glance" : "Göz at"}</span>
            <AiFillCaretDown />
          </div>
          <div
            className={`${
              navShow === false ? "hidden" : "flex"
            } lg:flex flex-col text-center p-2 lg:p-0 lg:text-left bg-black lg:bg-transparent w-[200px] lg:w-fit absolute top-[50px] left-3/4 border-t-2 border-white -translate-x-1/2 lg:-translate-x-0 lg:border-none lg:flex-row gap-5 lg:relative lg:top-auto lg:left-auto`}
          >
            <Link to="/home" onClick={() => setNavShow(false)}>
              {lang === "en" ? "Home" : "Ana Sayfa"}
            </Link>
            <Link to="/tv" onClick={() => setNavShow(false)}>
              {lang === "en" ? "Series" : "Diziler"}
            </Link>
            <Link to="/movie" onClick={() => setNavShow(false)}>
              {lang === "en" ? "Movies" : "Filmler"}
            </Link>
            <Link to="/favorites" onClick={() => setNavShow(false)}>
              {lang === "en" ? "My list" : "Listem"}
            </Link>
          </div>
        </div>
        <div className="ml-auto flex gap-5 items-center duration-500">
          <Link
            to="/search"
            className="flex gap-1 items-center -mr-8  cursor-pointer"
          >
            <BsSearch className="text-xl   z-10" />
          </Link>
          <div className="relative group ">
            <FaRegBell className="text-xl cursor-pointer ml-5" />
            <div className="hidden  -right-10 top-[40px] border-t-2 border-white absolute  group-hover:block z-10 bg-black w-[350px]">
              <div className="relative flex flex-col">
                <div className="flex items-center justify-center gap-2 p-2 border-b border-gray-500 h-[100px]">
                  <div className="text-gray-500 text-xl ">
                    {lang === "en"
                      ? "Your Notification Box is Unfortunately Empty"
                      : "Bildirim Kutun Malesef Boş"}
                  </div>
                </div>

                <div className="absolute -top-[27px] right-8">
                  <AiFillCaretUp className="text-4xl " />
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <img
              className="w-[40px] h-[40px] rounded-md cursor-pointer"
              src={`/images/${selectedUser?.image}.jpg`}
              alt=""
            />

            <div className="absolute hidden bg-black top-[125%] -left-[180px] group-hover:block  w-[220px] py-2 ">
              <div className="relative w-full flex flex-col gap-3">
                <div className="absolute bottom-full right-0 flex pr-2 justify-end text-white text-2xl w-full ">
                  <AiOutlineCaretUp />
                </div>
                {user?.users.map((item, i) => (
                  <div
                    onClick={() => handleSelectUser(item)}
                    className="flex items-center gap-2 px-2 cursor-pointer"
                    key={i}
                  >
                    <img
                      className="w-[35px] h-[35px] rounded-md cursor-pointer"
                      src={`/images/${item.image}.jpg`}
                      alt=""
                    />
                    <div>{item.name}</div>
                  </div>
                ))}

                <div className="flex items-center gap-2 px-2">
                  <div className="w-[35px] flex items-center justify-center">
                    <AiTwotoneEdit className="text-gray-400 text-[30px]" />
                  </div>
                  <Link
                    to={`/userSettings/${selectedUser?.name}`}
                    className="text-white hover:underline"
                  >
                    {lang === "en" ? "Profile Settings" : "Profil Yönetimi"}
                  </Link>
                </div>
                <div className="flex items-center gap-2 px-2">
                  <div className="w-[35px] flex items-center justify-center">
                    <AiOutlineUser className="text-gray-400 text-[30px]" />
                  </div>
                  <Link
                    to="/accSettings"
                    className="text-white hover:underline"
                  >
                    {lang === "en" ? "Acc" : "Hesap"}
                  </Link>
                </div>
                <div className="flex items-center gap-2 px-2">
                  <div className="w-[35px] flex items-center justify-center">
                    <AiOutlineQuestionCircle className="text-gray-400 text-[30px]" />
                  </div>
                  <div className="text-white  hover:underline">
                    {lang === "en" ? "Help Center" : "Yardım Merkezi"}
                  </div>
                </div>
                <div
                  onClick={async () => {
                    await dispatch(logout());
                    navigate("/");
                  }}
                  className="border-t border-gray-400 text-white text-center cursor-pointer hover:underline  p-2"
                >
                  {lang === "en"
                    ? " Netflix logout"
                    : " Netflix oturumunu kapat"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
