import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

import useAxios from "../../hooks/useAxios";
import getImageByKey from "../../utils/getImageByKey";
import trafic from "../../datas/trafic";

export default function TraficContent() {
  const [data, setData] = useState([]);

  const { response, loading, error } = useAxios({
    url: "/traffic",
    method: "get",
  });

  useEffect(() => {
    if (response !== null) {
      // setData(response.result);
      setData(trafic);
      console.log(response.result);
    }
  }, [response]);

  if (loading) {
    return <p>Chargement...</p>;
  }

  if (error) {
    return <p>Erreur !</p>;
  }
  return (
    <div className="flex justify-center items-center bg-white p-20">
      <div className="max-w-xl">
        <Link to="/" path="/">
          Revenir à l'accueil
        </Link>
        <h1 className="text-6xl font-bold text-center mb-8 text-[#00AA91]">
          Trafic
        </h1>
        <div className="flex flex-wrap mb-4">
          {data?.metros?.map((metro) => (
            <div
              className={classNames(
                "mr-4 mb-4 w-16 h-16 rounded-md border-4 flex justify-center items-center relative",
                {
                  "border-green-500/75":
                    metro.slug === "normal" || metro.slug === "normal_trav",
                  "border-red-500/75": metro.slug === "alerte",
                }
              )}
              key={metro.line}
            >
              <img
                className="w-12 h-12"
                src={getImageByKey(`metro${metro.line}`)}
              />
              {metro.slug === "normal_trav" && (
                <img
                  className="w-6 h-6 absolute right-0 bottom-0"
                  src={getImageByKey("travaux")}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex flex flex-wrap mb-4">
          {data?.rers?.map((rer) => (
            <div
              className={classNames(
                "mr-4 mb-4 w-16 h-16 rounded-md border-4 flex justify-center items-center relative",
                {
                  "border-green-500/75":
                    rer.slug === "normal" || rer.slug === "normal_trav",
                  "border-red-500/75": rer.slug === "alerte",
                }
              )}
              key={rer.line}
            >
              <img
                className="w-12 h-12"
                src={getImageByKey(`rer${rer.line}`)}
              />
              {rer.slug === "normal_trav" && (
                <img
                  className="w-6 h-6 absolute right-0 bottom-0"
                  src={getImageByKey("travaux")}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex flex flex-wrap mb-4">
          {data?.tramways?.map((tramway) => (
            <div
              className={classNames(
                "mr-4 mb-4 w-16 h-16 rounded-md border-4 flex justify-center items-center relative",
                {
                  "border-green-500/75":
                    tramway.slug === "normal" || tramway.slug === "normal_trav",
                  "border-red-500/75": tramway.slug === "alerte",
                }
              )}
              key={tramway.line}
            >
              <img
                className="w-12 h-12"
                src={getImageByKey(`tramway${tramway.line}`)}
              />
              {tramway.slug === "normal_trav" && (
                <img
                  className="w-6 h-6 absolute right-0 bottom-0"
                  src={getImageByKey("travaux")}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
