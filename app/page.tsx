"use client";
import About from "@/components/about";
import Navbar from "@/components/navbar";
import RegistrationForm from "@/components/registrationForm";
import Countdown from "@/components/countdown";
import Art from "@/components/art";
import TimeLine from "@/components/timeline";
import Sponsors from "@/components/sponsors";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  const tabs = ["ALGXPLR", "ABOUT", "TIME-LINE", "SPONSORS", "REGISTER"];
  const [activeTab, setActiveTab] = useState("About");

  const handleKeyDown = (event: KeyboardEvent) => {
    const currentIndex = tabs.indexOf(activeTab);
    if (event.key === "ArrowDown") {
      const nextIndex = (currentIndex + 1) % tabs.length;
      setActiveTab(tabs[nextIndex]);
    } else if (event.key === "ArrowUp") {
      const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      setActiveTab(tabs[prevIndex]);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeTab]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeTab]);

  useEffect(() => {
    const crtElement = document.querySelector(".crt_effect");
    if (crtElement) {
      const interval = setInterval(() => {
        crtElement.classList.add("flicker_delay");
        setTimeout(() => {
          crtElement.classList.remove("flicker_delay");
        }, 1900);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <main className="main flex items-center justify-center min-h-screen">
      <div className="overflow-x-hidden overflow-y-scroll terminal crt_effect">
        <Navbar />

        <div className="flex flex-col justify-between items-center lg:flex-row lg:items-start terminal_data">
          <div className=" w-full pt-9 lg:fixed lg:pt-0 lg:w-2/4">
            <div className="flex gap-2 justify-center items-center lg:flex-col lg:items-start">
              {tabs.map((tab) => (
                <div
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`cursor-pointer menu_item ${activeTab === tab ? "bg-[#38ac38] text-black" : ""}`}
                >
                  {tab}
                </div>
              ))}
            </div>
          </div>

          <div className="ml-auto overflow-y-auto z-50 terminal_right">
            {activeTab === "ALGXPLR" && <Countdown />}
            {activeTab === "ABOUT" && <About />}
            {activeTab === "TIME-LINE" && <TimeLine />}
            {activeTab === "SPONSORS" && <Sponsors />}
            {activeTab === "REGISTER" && <RegistrationForm />}
          </div>
        </div>
      </div>
    </main>
  );
}
