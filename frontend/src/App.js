import { Routes, Route, BrowserRouter } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getSession } from "./slices/sessionSlice";
import Home from "./pages/Home/Home";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSession());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
