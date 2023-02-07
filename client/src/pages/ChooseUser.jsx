import { MdAddCircle } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectUser } from "../store/User";
const ChooseUser = () => {
  const lang = useSelector((state) => state.lang.lang);
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelectUser = async (u) => {
    const createUser = await {
      id: u.id,
      name: u.name,
      image: u.image,
      favorites: u.favorites,
    };
    await dispatch(selectUser(createUser));
    navigate("/home");
  };

  return (
    <div className="bg-black flex items-center justify-center h-screen">
      <div>
        <h1 className="text-white  text-4xl py-4 text-center">
          Who is Whatching ?
        </h1>
        <div className="flex items-center justify-center gap-2">
          {user?.users.map((u, i) => (
            <div
              onClick={() => {
                handleSelectUser(u);
              }}
              key={i}
              className="flex flex-col gap-1 cursor-pointer"
            >
              <img
                className="h-36 w-36"
                src={`/images/${u.image}.jpg`}
                alt=""
              />
              <div className="text-center text-slate-400 font-semibold">
                {u.name}
              </div>
            </div>
          ))}

          <Link to="/addUser" className="flex flex-col gap-1 cursor-pointer ">
            <div>
              <MdAddCircle className="text-gray-300 w-36 h-36" />
            </div>
            <div className="text-center text-slate-300 font-semibold">
              {lang === "en" ? "Add User" : "Kullanıcı Ekle"}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChooseUser;
