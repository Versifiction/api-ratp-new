import React, { useEffect, useState } from "react";
import classNames from "classnames";

import useAxios from "../../hooks/useAxios";
import getImageByKey from "../../utils/getImageByKey";

export default function TraficContent() {
  const [data, setData] = useState([]);

  const { response, loading, error } = useAxios({
    url: "/traffic",
    method: "get",
  });

  useEffect(() => {
    if (response !== null) {
      setData(response.result);
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
    <div className="Trafic">
      <p>Voici les infos Trafic</p>
      <div className="Trafic-Content">
        <div className="Trafic-Metros flex mb-4">
          {data?.metros?.map((metro) => (
            <div
              className={classNames(
                "mr-4 w-16 h-16 rounded-md border-4 flex justify-center items-center relative",
                {
                  "border-green-500/75": metro.slug === "normal",
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
        <div className="Trafic-Rers flex mb-4">
          {data?.rers?.map((rer) => (
            <div
              className={classNames(
                "mr-4 w-16 h-16 rounded-md border-4 flex justify-center items-center relative",
                {
                  "border-green-500/75": rer.slug === "normal",
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
        <div className="Trafic-Tramways flex mb-4">
          {data?.tramways?.map((tramway) => (
            <div
              className={classNames(
                "mr-4 w-16 h-16 rounded-md border-4 flex justify-center items-center relative",
                {
                  "border-green-500/75": tramway.slug === "normal",
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
