import React, { useEffect, useState } from "react";

import useAxios from "./hooks/useAxios";
import "./App.css";

function App() {
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

  return (
    <div className="App">
      <p>ok</p>
    </div>
  );
}

export default App;
