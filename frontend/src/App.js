import { Routes, Route, BrowserRouter } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getSession } from "./slices/sessionSlice";
import GlobalStyle from "./Globalstyles";
import Loader from "./components/HomeComponents/Loader/Quality";

import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSession());
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/home" element={<Loader />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
