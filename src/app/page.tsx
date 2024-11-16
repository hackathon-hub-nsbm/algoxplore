"use client";

import AboutUs from "@/components/AboutUs";
import FAQ from "@/components/FAQ";
import Art from "@/components/art";
import About from "@/components/hero-section";
import BackDrop from "@/components/mainlogo";
import MascotDisplay from "@/components/mascot";
import Navbar from "@/components/navbar";
import RegistrationForm from "@/components/registrationForm";
import Sponsors from "@/components/sponsors";
import TimeLine from "@/components/timeline";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const tabs: Array<string> = [
    "ALGXPLR",
    "TIMELINE",
    // "REGISTRATION",
    "ABOUT_US",
    "SPONSORS",
    "FAQ",
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const currentIndex = tabs.indexOf(activeTab);
      if (event.key === "ArrowDown") {
        const nextIndex = (currentIndex + 1) % tabs.length;
        setActiveTab(tabs[nextIndex]);
      } else if (event.key === "ArrowUp") {
        const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        setActiveTab(tabs[prevIndex]);
      }
    },
    [activeTab, tabs],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

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
    <>
      <BackDrop />
      <main className="main flex items-center justify-center min-h-screen">
        <MascotDisplay />
        <div className="overflow-x-hidden overflow-y-scroll terminal crt_effect">
          <Navbar />

          <div className="flex flex-col justify-between items-center lg:flex-row lg:items-start terminal_data text">
            <div className="hidden w-full pt-5 lg:flex lg:fixed lg:pt-0 lg:w-2/4">
              <div className="flex gap-2 justify-center items-center lg:flex-col lg:items-start">
                {tabs.map((tab) => (
                  <div
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`cursor-pointer menu_item ${
                      activeTab === tab ? "bg-[#38ac38] text-black" : ""
                    }`}
                  >
                    {tab}
                  </div>
                ))}
                <Art tab={activeTab} />
              </div>
            </div>

            <div className="w-full pt-10 lg:hidden mobilenavbar">
              <div className="lg:hidden">
                <select
                  value={activeTab}
                  onChange={(e) => setActiveTab(e.target.value)}
                  className="cursor-pointer menu_item bg-[#38ac38] text-black"
                >
                  {tabs.map((tab) => (
                    <option key={tab} value={tab}>
                      {tab}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="ml-auto overflow-y-auto z-50 terminal_right">
              {activeTab === "ALGXPLR" && <About />}
              {activeTab === "TIMELINE" && <TimeLine />}
              {activeTab === "REGISTRATION" && <RegistrationForm />}
              {activeTab === "SPONSORS" && <Sponsors />}
              {activeTab === "ABOUT_US" && <AboutUs />}
              {activeTab === "FAQ" && <FAQ />}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
