import React, { useEffect, useState } from "react";

import useAxios from "../../hooks/useAxios";

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
    </div>
  );
}
