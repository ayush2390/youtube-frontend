import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Menu from "./components/Menu/Menu";
import Hero from "./components/HomePage/Hero/Hero";
import ChooseUs from "./components/HomePage/ChooseUs/ChooseUs";
import Works from "./components/Works/Works";
import Testimonial from "./components/HomePage/Testimonial/Testimonial";
import FAQ from "./components/HomePage/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import DownloadPage from "./components/DownloadPage";
import Video from "./Video";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className=" pt-[70px]">
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/video" element={<Video />} />
        </Routes>
        <div className="pt-[70px]">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
