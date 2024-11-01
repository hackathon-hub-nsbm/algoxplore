import apiFloraLogo from "@/assets/api-flora.png";
import logoBrandView from "@/assets/brandViewLogo.jpg";
import logoGreenBlack from "@/assets/green-black.png";
import logoHack from "@/assets/hacksl.jpg";
import logoSunday2 from "@/assets/logo_aruna.jpg";
import logoPubudu from "@/assets/logo_pubudu_constructions.png";
import logoSunday1 from "@/assets/logo_sunday_morning.png";
import virakesariLogo from "@/assets/virakesariLogo.jpg";
import Image from "next/image";

export default function Sponsors() {
  return (
    <div className="lg:pr-20">
      <div className="w-full flex flex-col items-center gap-10 justify-center border-cover p-10">
        <div className="flex flex-wrap gap-10 justify-center">
          <div className="flex flex-col items-center">
            <p className="text text-center">Official Bronze Partner</p>
            <Image
              className="mt-6"
              src={logoPubudu}
              alt="Pubudu Constructions"
              width={300}
              height={300}
            />
          </div>

          <div className="flex flex-col items-center">
            <p className="text text-center">Official Bronze Partner</p>
            <Image
              className="mt-6"
              src={logoBrandView}
              alt="Code Filine"
              width={200}
              height={200}
            />
          </div>

          <div className="flex flex-col items-center">
            <p className="text text-center">Official Gift Partner</p>
            <Image
              className="mt-6"
              src={logoGreenBlack}
              alt="Code Filine"
              width={300}
              height={300}
            />
          </div>

          <div className="flex flex-col items-center">
            <p className="text text-center">Official Gift Partner</p>
            <Image
              className="mt-6"
              src={apiFloraLogo}
              alt="Api Flora"
              width={200}
              height={200}
            />
          </div>

          <div className="flex flex-col items-center">
            <p className="text text-center">Official Digital Media Partner</p>
            <Image
              className="mt-6"
              src={logoHack}
              alt="Hack SL"
              width={200}
              height={200}
            />
          </div>
        </div>

        <div>
          <p className="text text-center">Printed Media Partner(s)</p>
          <div className="flex gap-10 justify-center">
            <Image
              className="mt-6"
              src={logoSunday1}
              alt="The Sunday Morning"
              width={190}
              height={190}
            />

            <Image
              className="mt-6"
              src={logoSunday2}
              alt="Aruna"
              width={190}
              height={190}
            />

            <Image
              className="mt-6"
              src={virakesariLogo}
              alt="Virakesari"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
