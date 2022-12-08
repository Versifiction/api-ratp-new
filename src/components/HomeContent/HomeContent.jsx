import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex justify-center items-center bg-white p-20">
      <div className="max-w-xl">
        <h1 className="text-6xl font-bold text-center mb-8 text-[#00AA91]">
          Accueil
        </h1>
        <Link>Voir l'état du trafic</Link>
      </div>
    </div>
  );
}
