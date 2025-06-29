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
import Detail from "./pages/find_detail.jsx";

function App() {
  /*const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setDataList(data);
  }, []);
  */

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
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
