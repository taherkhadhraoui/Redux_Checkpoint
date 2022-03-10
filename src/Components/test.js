import React, { useEffect } from "react";
import axios from "axios";
export default function Test() {
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://rapidapi.p.rapidapi.com/help/countries",
      headers: {
        "x-rapidapi-key": "5d1754036bmsh36cfa9a810b75fep1afe30jsn45eda70a6d4e",
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <h2>API</h2>
    </div>
  );
}
