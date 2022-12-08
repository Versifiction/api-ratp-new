import React, { useEffect, useState } from "react";

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
        <div className="Trafic-Metros flex">
          {data?.metros?.map((metro) => (
            <div className="pr-4 w-16 h-16" key={metro.line}>
              <img src={getImageByKey(`metro${metro.line}`)} />
            </div>
          ))}
        </div>
        <div className="Trafic-Rers flex">
          {data?.rers?.map((rer) => (
            <div className="pr-4 w-16 h-16" key={rer.line}>
              <img src={getImageByKey(`rer${rer.line}`)} />
            </div>
          ))}
        </div>
        <div className="Trafic-Tramways flex">
          {data?.tramways?.map((tramway) => (
            <div className="pr-4 w-16 h-16" key={tramway.line}>
              <img src={getImageByKey(`tramway${tramway.line}`)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
