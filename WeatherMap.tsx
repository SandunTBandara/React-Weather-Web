import { useEffect } from "react";

const WeatherMap = () => {

  useEffect(() => {
    let scriptTag = document.createElement("script");
    scriptTag.src = "/src/dataviz.js";
    document.body.appendChild(scriptTag);
  });         //use effect eka id eka load weddima scrypt tag ekak hadila vz eka set krnawa

  return (<div id="container" style={{ width: "100%", height: "500px" }}></div>);
};

export default WeatherMap;
