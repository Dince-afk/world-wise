import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Spinner from "./Spinner";
import Homepage from "../pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
