import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import Search from "./pages/Search.jsx";
import Scrap from "./pages/Scrap.jsx";
import "./styles/fonts.css";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
