import { Routes, Route, BrowserRouter } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getSession } from "./slices/sessionSlice";
import GlobalStyle from "./Globalstyles";
import Loader from "./pages/Loader/Quality";
import Slider from "./pages/Slider/Slider";
import Pagetrans from "./pages/Loader/Pagetra";

import Hero from "./pages/Description/Container";
import Home from "./Routes/Home";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Navbar/Header";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSession());
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Loader />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
