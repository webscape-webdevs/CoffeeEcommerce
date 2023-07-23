import { Routes, Route, BrowserRouter } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useCallback, useEffect } from "react";
import { getSession } from "./slices/sessionSlice";
import GlobalStyle from "./Globalstyles";
import Loader from "./components/HomeComponents/Loader/Quality";
 import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
 import Container from './components/HomeComponents/Description/Container';
 import Coffeeinfo from './components/HomeComponents/Infosection/Coffeeinfo';

 import gsap from "gsap";
 import ScrollTrigger from "gsap/ScrollTrigger";
function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
 
    dispatch(getSession());

  }, []);

   
  return (
    <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/home" element={<Loader />} />
      </Routes>
 
    </BrowserRouter>
  );
}

export default App;
