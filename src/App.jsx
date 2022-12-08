import React from "react";

import Router from "./Router";
import "./fonts/ParisineRegular.otf";
import "./fonts/ParisineBold.otf";
import "./fonts/ParisineBoldItalic.otf";
import "./App.css";

function App() {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-[url('/src/assets/home-bg.jpg')] bg-cover bg-no-repeat bg-center">
      <Router />
    </div>
  );
}

export default App;
