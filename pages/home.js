import $ from "jquery";
import Header from "../components/Header";
import { useEffect } from "react";
import Weather from "../components/Weather";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    const date = new Date();
    const time = new Date().getTime();
    $(".getDate").html(date.toString().slice(0, 15));
    $(".getTime").html(time.toString());
    const defaultApi =
      "https://api.openweathermap.org/data/2.5/weather?&q=Chandigarh&units=metric&appid=ba0220ef81b4582a85ac35da7e89913c";
    apiJson(defaultApi);

    async function apiJson(defaults) {
      const apiUrlData = await fetch(defaults);
      const apiData = await apiUrlData.json();
      showDefault(apiData);
    }
    function showDefault(DataWeather) {
      $(".dcity").html(" " + DataWeather.name);
      $(".dtemp").html(Math.floor(DataWeather.main.temp) + "&deg; C");
      $(".ddesc").html(DataWeather.weather[0].main);
    }
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <div className="my-3">
              <h1 className="display-3 text-dm fw-bold">carnet</h1>
              <p className="text-secondary text-rubik mb-0">
                a place where you can see the&nbsp;
                <span className="fw-bold text-dark">divine meeting</span> of
                front-end with back-end.
              </p>
              <div className="mb-4 my-2">
                <ul className="list-group list-group-horizontal">
                  <li className="list-group-item bg-transparent grow">
                    <Link href="https://github.com/westernfrog">
                      <i className="fa-brands fa-github"></i>
                    </Link>
                  </li>
                  <li className="list-group-item bg-transparent grow">
                    <Link href="https://www.linkedin.com/in/aman-singh123">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </li>
                  <li className="list-group-item bg-transparent grow">
                    <Link href="https://www.discordapp.com/users/888993682018168842">
                      <i className="fa-brands fa-discord"></i>
                    </Link>
                  </li>
                  <li className="list-group-item bg-transparent grow">
                    <Link href="mailto:haaamansingh007@gmail.com">
                      <i className="fa-regular fa-envelope"></i>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="text-dm">
                <p>
                  <i className="fa-regular fa-clock"></i>&nbsp;&nbsp;
                  <span className="getDate"></span>
                  &nbsp;&nbsp;•&nbsp;&nbsp;
                  <span className="getTime"></span>
                </p>
                <p>
                  <i className="fa-solid fa-cloud-moon"></i>&nbsp;&nbsp;
                  <span>It&apos;s currently&nbsp;</span>
                  <span className="fw-bold">
                    &nbsp;
                    <span className="dtemp"></span>&nbsp;&nbsp;
                  </span>
                  <span>
                    &#40;
                    <span className="ddesc text-lowercase text-rubik"></span>
                    &#41;&nbsp;
                  </span>
                  <span className="fw-bold">
                    &nbsp;in <span className="dcity"></span>.
                  </span>
                </p>
              </div>
            </div>
            <Weather />
          </div>
        </div>
      </div>
    </>
  );
}
