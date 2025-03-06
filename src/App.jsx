import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

import HomeServices from "./components/HomeServices";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomeServices />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}