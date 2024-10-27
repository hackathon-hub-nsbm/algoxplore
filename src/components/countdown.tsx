import React, { useState, useEffect } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const worker = new Worker(new URL("./countdownWorker.js", import.meta.url));

    worker.onmessage = function (event) {
      setTimeLeft(event.data);
    };

    worker.postMessage("start");

    return () => {
      worker.terminate();
    };
  }, []);

  const formatTime = (time: number) => {
    const days = Math.floor(time / (24 * 3600));
    const hours = Math.floor((time % (24 * 3600)) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return (
      <div className="text-center">
        <div>
          <span>{String(days).padStart(2, "0")}</span>:
          <span>{String(hours).padStart(2, "0")}</span>:
          <span>{String(minutes).padStart(2, "0")}</span>:
          <span>{String(seconds).padStart(2, "0")}</span>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="countdown mt-10">
        <h1 className="ctdwn text-5xl sm:text-7xl xl:text-8xl font-semibold text">
          {timeLeft > 0 ? formatTime(timeLeft) : "00:00:00:00"}
        </h1>
      </div>
      <div className="text flex flex-row justify-center mb-16 gap-x-12 text-lg sm:text-2xl sm:gap-x-20 xl:text-3xl xl:gap-x-28 mt-1 xl:mt-2 lg:mb-10">
        <span>DAYS</span>
        <span>HRS</span>
        <span>MIN</span>
        <span>SEC</span>
      </div>
    </div>
  );
}
