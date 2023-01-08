import $ from "jquery";
import { useEffect } from "react";

export default function Wea() {
  useEffect(() => {
    $(".pin").on("click", function () {
      location();
    });
  }, []);

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
    apiJson(api);
  }
  async function apiJson(json) {
    const apiUrlData = await fetch(json);
    const apiData = await apiUrlData.json();

    showData(apiData);
  }

  function showData(DataWeather) {
    $(".city").html(" " + DataWeather.name);
    $(".temp").html(Math.floor(DataWeather.main.temp) + "&deg; C");
    $(".desc").html(DataWeather.weather[0].main);
  }

  return (
    <>
      <div className="card text-light mt-4 border-dark">
        <div className="row mx-0 px-0">
          <div className="col-8 text-start px-0">
            <div className="card-body text-rubik fw-bold py-2">
              <p className="card-title mb-0 city">your heart</p>
              <p className="card-title mb-0">
                <span className="temp">37&deg; C</span>&nbsp;
                <span className="fw-light">
                  &#40;<span className="desc text-lowercase">love</span>&#41;
                </span>
              </p>
            </div>
          </div>
          <div className="col-4 d-flex align-items-center justify-content-between">
            <div className="card-body text-rubik">
              <p className="card-title h5 text-end">
                <i className="fa-solid fa-location-dot text-danger grow pin"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
