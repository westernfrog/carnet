import {
  MagnifyingGlassIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

export default function Header(params) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const newdate = new Date().toString().slice(0, 10);
    setDate(newdate);

    function updateTime() {
      const newtime = new Date().toLocaleTimeString();
      setTime(newtime);
    }
    setInterval(updateTime, 100);
  }, []);
  return (
    <>
      <header className="sticky top-0 inset-x-0 z-50 p-6 backdrop-blur-xl">
        <nav className="flex flex-wrap items-center justify-between text-gray-800">
          <div className="lg:flex lg:flex-1 items-center gap-1">
            <LightBulbIcon className="w-5 h-5" fill="#fed7aa" />
          </div>
          <div className="lg:flex items-center text-sm lg:text-start gap-32">
            <div className="text-center">
              <h1>
                {date} <span className="text-gray-600">•</span> {time}
              </h1>
            </div>
          </div>
          <div className="lg:flex lg:flex-1 items-center justify-end gap-2">
            <MagnifyingGlassIcon className="w-5 h-5" />
            <h1 className="text-sm hidden lg:block">Search</h1>
          </div>
        </nav>
      </header>
    </>
  );
}
