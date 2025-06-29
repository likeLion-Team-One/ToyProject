import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import Search from "./pages/Search.jsx";
import Scrap from "./pages/Scrap.jsx";
import First from "./pages/First.jsx";
import Post from "./pages/Post.jsx";
import Temp from "./pages/Temp.jsx";
import Find from "./pages/FindTeam.jsx";
import Detail from "./pages/Find_detail.jsx";
import LogIn from "./pages/LogIn";
import SignUp_agree from "./pages/SignUp_agree";
import SignUp from "./pages/SignUp";
import SignUp_complete from "./pages/SignUp_complete";
import Profile from "./pages/profile";
import Profile_edit from "./pages/Profile_edit";
import Project from "./pages/Project/Project";
import Group from "./pages/Group/Group";

function App() {
  /*const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setDataList(data);
  }, []);
  */

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup_agree" element={<SignUp_agree />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup_complete" element={<SignUp_complete />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile_edit" element={<Profile_edit />} />
        <Route path="/project" element={<Project />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/search" element={<Search />} />
        <Route path="/scrap" element={<Scrap />} />
        <Route path="/first" element={<First />} />
        <Route path="/post" element={<Post />} />
        <Route path="/temp" element={<Temp />} />
        <Route path="/find" element={<Find />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
