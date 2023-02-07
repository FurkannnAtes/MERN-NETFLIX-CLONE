import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import AccSettings from "./pages/AccSettings";
import AddUser from "./pages/AddUser";
import ChooseUser from "./pages/ChooseUser";
import Details from "./pages/Details";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Movies from "./pages/Movies";
import MovieWatch from "./pages/MovieWatch";
import Register from "./pages/Register";
import SearchPage from "./pages/SearchPage";
import Tv from "./pages/Tv";
import TvDetails from "./pages/TvDetails";
import TvWatch from "./pages/TvWatch";
import UserSettings from "./pages/UserSettings";
import Welcome from "./pages/Welcome";

function App() {
  useEffect(() => {
    if (localStorage.getItem("lang") === null) {
      localStorage.setItem("lang", "en");
    }
  }, []);
  const resetPage = () => {
    window.location.reload(false);
  };
  window.onresize = function () {
    resetPage();
  };
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/details/tv/:id" element={<TvDetails />} />
        <Route path="/movieWatch/:id" element={<MovieWatch />} />
        <Route path="/tvWatch/:id" element={<TvWatch />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/userSettings/:name" element={<UserSettings />} />
        <Route path="/accSettings" element={<AccSettings />} />
        <Route path="/search" element={<SearchPage />} />

        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register/:email" element={<Register />} />
        <Route path="/chooseUser" element={<ChooseUser />} />
        <Route path="/addUser" element={<AddUser />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
