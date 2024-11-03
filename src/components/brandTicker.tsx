import logoApiFlora from "@/assets/logo_api_flora.png";
import logoSunday2 from "@/assets/logo_aruna.jpg";
import logoBrandView from "@/assets/logo_brandView.jpg";
import logoCodeFiline from "@/assets/logo_code_filine.png";
import logoHack from "@/assets/logo_hacksl.jpg";
import logoIctFromAbc from "@/assets/logo_ictFromAbc.png";
import logoIsurumaan from "@/assets/logo_isurumaan.png";
import logoPubudu from "@/assets/logo_pubudu_constructions.png";
import logoSunday1 from "@/assets/logo_sunday_morning.png";
import logoVirakesari from "@/assets/logo_virakesari.jpg";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const BrandTicker = () => {
  const [position, setPosition] = useState(0);

  const sponsors = [
    { id: 1, name: "Pubudu Constructions", imageUrl: logoPubudu },
    { id: 2, name: "ICT From ABC", imageUrl: logoIctFromAbc },
    { id: 3, name: "Brand View Labels", imageUrl: logoBrandView },
    { id: 4, name: "Hack SL", imageUrl: logoHack },
    { id: 5, name: "Virakesari", imageUrl: logoVirakesari },
    { id: 6, name: "Aruna", imageUrl: logoSunday1 },
    { id: 7, name: "Aruna", imageUrl: logoSunday2 },
    { id: 8, name: "Api Flora", imageUrl: logoApiFlora },
    { id: 9, name: "Isurumaan Photography", imageUrl: logoIsurumaan },
    { id: 10, name: "Code Filine", imageUrl: logoCodeFiline },
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
          {["top-left", "top-right", "bottom-left", "bottom-right"].map(
            (pos) => (
              <div
                key={pos}
                className={`absolute ${pos} w-16 h-16 border-opacity-50 border-[#38ac38] border-t border-l`}
              />
            ),
          )}
        </div>

        {sponsors.map(({ id, name, imageUrl }, index) => (
          <div
            key={id}
            className={`absolute w-full transition-all duration-700 ease-in-out transform
              ${index === position ? "translate-x-0 opacity-100" : index < position ? "-translate-x-full opacity-0" : "translate-x-full opacity-0"}`}
          >
            <div
              className={`flex items-center justify-center p-4 ${index === position ? "lg:flex" : "lg:hidden"}`}
            >
              <Image
                width={index === position ? 190 : 160}
                height={index === position ? 190 : 160}
                src={imageUrl}
                alt={name}
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
