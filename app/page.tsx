"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, time]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-red-400 flex items-center justify-center">
      <div className="bg-red-300 p-10 rounded-2xl text-center text-white">
        <h1 className="text-2xl mb-4">Pomodoro</h1>

        <div className="text-6xl font-bold mb-6">
          {formatTime(time)}
        </div>

        <button
          onClick={() => setIsRunning(!isRunning)}
          className="bg-white text-red-500 px-6 py-2 rounded-lg font-bold"
        >
          {isRunning ? "PAUSE" : "START"}
        </button>
      </div>
    </div>
  );
}