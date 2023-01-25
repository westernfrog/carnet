import $ from "jquery";
import { useEffect, useState } from "react";

export default function Wea() {
  useEffect(() => {
    $(".pin").on("click", function () {
      location();
    });

    function location() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        alert("Geolocation is not supported in your browser!");
      }
      function showPosition(position) {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;

        getLocation(lat, long);
      }
    }

    function getLocation(latitude, longitude) {
      const apiKey = "ba0220ef81b4582a85ac35da7e89913c";
      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
      apiFetcher(api);
    }
    async function apiFetcher(json) {
      const apiUrlData = await fetch(json);
      const apiData = await apiUrlData.json();

      showData(apiData);
    }

    function showData(DataWeather) {
      setcity(DataWeather.name);
      settemp(Math.floor(DataWeather.main.temp));
      setdesc(DataWeather.weather[0].main);
      setcountry(DataWeather.sys.country);
    }
  }, []);

  const [city, setcity] = useState("");
  const [country, setcountry] = useState("");
  const [temp, settemp] = useState("");
  const [desc, setdesc] = useState("");

  return (
    <>
      <div
        className="card text-light mt-4 border border-2 pin"
        style={{ borderRadius: "9px" }}
      >
        <div className="row mx-0 px-0">
          <div className="col-8 text-start px-0">
            <div className="card-body text-rubik fw-bold py-2">
              <p className="card-title mb-0">
                <i class="fa-solid fa-earth-americas me-2"></i>
                {city || "Your Heart"} {country || " "}
              </p>
              <p className="card-title mb-0">
                <span>{temp || "37"} &deg;C </span>
                <span className="fw-light text-dm">
                  &#40;
                  <span className="text-lowercase">{desc || "love"}</span>
                  &#41;
                </span>
              </p>
            </div>
          </div>
          <div className="col-4 px-0">
            <div className="card-body text-rubik grow">
              <p className="card-title text-end">
                <i className="fa-solid fa-location-dot fa-xl text-danger"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
