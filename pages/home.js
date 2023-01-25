import Header from "../components/Header";
import { useEffect, useState } from "react";
import Weather from "../components/Weather";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    const newdate = new Date().toString().slice(0, 15);
    setdate(newdate);

    function updateTime() {
      const newtime = new Date().toLocaleTimeString();
      settime(newtime);
    }
    setInterval(updateTime, 100);

    const defaultApi =
      "https://api.openweathermap.org/data/2.5/weather?&q=Chandigarh&units=metric&appid=ba0220ef81b4582a85ac35da7e89913c";
    apiJson(defaultApi);

    async function apiJson(defaults) {
      const apiUrlData = await fetch(defaults);
      const apiData = await apiUrlData.json();
      showDefault(apiData);
    }
    function showDefault(DataWeather) {
      setcity(DataWeather.name);
      settemp(Math.floor(DataWeather.main.temp));
      setdesc(DataWeather.weather[0].main);
      setcountry(DataWeather.sys.country);
    }
  }, []);

  const [date, setdate] = useState("");
  const [time, settime] = useState("");

  const [city, setcity] = useState("");
  const [country, setcountry] = useState("");
  const [temp, settemp] = useState("");
  const [desc, setdesc] = useState("");

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
                  <i className="fa-regular fa-clock me-2"></i>
                  {date}
                  <span className="mx-2 fw-bold">•</span>
                  {time}
                </p>
                <p>
                  <i class="fa-solid fa-cloud-sun me-2"></i>
                  It&apos;s currently&nbsp;
                  <span className="fw-bold">
                    {temp} &deg;C
                    <i class="fa-solid fa-temperature-three-quarters mx-2"></i>
                  </span>
                  &#40;
                  <span className="text-lowercase text-rubik">{desc}</span>
                  &#41; in
                  <span className="fw-bold">
                    {" "}
                    {city}, {country}.
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
