import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Spinner from "./components/Spinner";
import AppNav from "./components/AppNav";
import SideBar from "./components/SideBar";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route
          path="app"
          element={
            <AppLayout>
              <SideBar />
            </AppLayout>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
