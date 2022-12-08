import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Loading from "./components/Loading/Loading";
const Home = lazy(() => import("./pages/Home/Home"));
const Trafic = lazy(() => import("./pages/Trafic/Trafic"));
const Error = lazy(() => import("./pages/Error/Error"));

export default function Router() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Home />} />
          <Route path="/trafic" element={<Trafic />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
