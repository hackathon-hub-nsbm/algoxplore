import aruna from "@/assets/logo_aruna.jpg";
import pubudu from "@/assets/logo_pubudu_constructions.png";
import sundayMorning from "@/assets/logo_sunday_morning.png";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const BrandTicker = () => {
  const [position, setPosition] = useState(0);

  const sponsors = [
    {
      id: 1,
      name: "The Sunday Morning",
      imageUrl: sundayMorning,
    },
    {
      id: 2,
      name: "Aruna",
      imageUrl: aruna,
    },
    {
      id: 3,
      name: "Pubudu Cnstructions",
      imageUrl: pubudu,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 1) % sponsors.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [sponsors.length]);

  return (
    <div className="lg:w-2/4 mx-auto p-2 mb-8 relative overflow-hidden">
      <div className="font-mono text-[#38ac38] mb-2 text-sm flex justify-between">
        <span>{"<SPONSORS>"}</span>
        <span className="opacity-50">{`${position + 1}/${sponsors.length}`}</span>
      </div>

      <div className="relative h-20 flex items-center justify-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[#38ac38] opacity-5 animate-pulse" />
          <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-[#38ac38] opacity-50" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#38ac38] opacity-50" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-[#38ac38] opacity-50" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-[#38ac38] opacity-50" />
        </div>

        {sponsors.map((sponsor, index) => (
          <div
            key={sponsor.id}
            className={`absolute w-full transition-all duration-700 ease-in-out transform
              ${
                index === position
                  ? "translate-x-0 opacity-100"
                  : index < position
                    ? "-translate-x-full opacity-0"
                    : "translate-x-full opacity-0"
              }`}
          >
            <div className="hidden lg:flex items-center justify-center p-4">
              <Image
                width={190}
                height={190}
                src={sponsor.imageUrl}
                alt={sponsor.name}
                className="filter brightness-150 contrast-125"
              />
            </div>
            <div className="flex items-center justify-center p-4 lg:hidden">
              <Image
                width={160}
                height={160}
                src={sponsor.imageUrl}
                alt={sponsor.name}
                className="max-h-24 w-auto object-contain filter brightness-150 contrast-125"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="font-mono text-[#38ac38] mt-2 text-sm flex justify-between items-center">
        <span className="animate-pulse">{"<<"}</span>
        <div className="h-1 flex-1 mx-4 bg-gradient-to-r from-transparent via-[#38ac38] to-transparent opacity-25" />
        <span className="animate-pulse">{">>"}</span>
      </div>
    </div>
  );
};

export default BrandTicker;
