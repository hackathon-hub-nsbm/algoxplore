import logoBrandView from "@/assets/brandViewLogo.jpg";
import logoHack from "@/assets/hacksl.jpg";
import logoApiFlora from "@/assets/logo_api_flora.png";
import logoSunday2 from "@/assets/logo_aruna.jpg";
import logoCodeFiline from "@/assets/logo_code_filine.png";
import logoictFromAbc from "@/assets/logo_ictFromAbc.png";
import logoIsurumaan from "@/assets/logo_isurumaan.png";
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
              src={logoictFromAbc}
              alt="ICT From ABC"
              width={300}
              height={300}
            />
          </div>
        </div>

        <div className="flex gap-10 justify-center">
          <div className="flex flex-col items-center">
            <p className="text text-center">Official Bronze Partner</p>
            <Image
              className="mt-6"
              src={logoBrandView}
              alt="Code Filine"
              width={150}
              height={150}
            />
          </div>
          <div className="flex flex-col items-center">
            <p className="text text-center">Official Digital Media Partner</p>
            <Image
              className="mt-6"
              src={logoHack}
              alt="Hack SL"
              width={150}
              height={150}
            />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <p className="text text-center">Print and Online Media Partner</p>
          <Image
            className="mt-6"
            src={virakesariLogo}
            alt="Virakesari"
            width={300}
            height={300}
          />
        </div>

        <div>
          <p className="text text-center">Official Media Partner</p>
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
          </div>
        </div>

        <div className="flex flex-col items-center">
          <p className="text text-center">Official Gift Partner</p>
          <Image
            className="mt-6"
            src={logoApiFlora}
            alt="Api Flora"
            width={200}
            height={200}
          />
        </div>

        <div className="flex gap-10 justify-center">
          <div className="flex flex-col items-center">
            <p className="text text-center">Official Media Partner</p>
            <Image
              className="mt-6"
              src={logoIsurumaan}
              alt="Isurumaan Photography"
              width={300}
              height={300}
            />
          </div>
          <div className="flex flex-col items-center">
            <p className="text text-center">Official Gift Partner</p>
            <Image
              className="mt-6"
              src={logoCodeFiline}
              alt="Code Filine"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
