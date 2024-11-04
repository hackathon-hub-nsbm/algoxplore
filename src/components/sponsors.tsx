import logoBrandView from "@/assets/brandViewLogo.jpg";
import logoHack from "@/assets/hacksl.jpg";
import logoApiFlora from "@/assets/logo_api_flora.png";
import logoSunday2 from "@/assets/logo_aruna.jpg";
import logoCodeFiline from "@/assets/logo_code_filine.png";
import logoictFromAbc from "@/assets/logo_ictFromAbc.png";
import logoIsurumaan from "@/assets/logo_isurumaan.png";
import logoPubudu from "@/assets/logo_pubudu_constructions.png";
import logoRealMe from "@/assets/logo_realme.jpg";
import logoSunday1 from "@/assets/logo_sunday_morning.png";
import logoUswatta from "@/assets/logo_uswatta.png";
import virakesariLogo from "@/assets/virakesariLogo.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Sponsors() {
  return (
    <div className="lg:pr-20">
      <div className="w-full flex flex-col items-center gap-10 justify-center border-cover p-10">
        <div className="flex flex-wrap gap-10 justify-center">
          <div className="flex flex-col items-center">
            <p className="text text-center">Official Bronze Partner</p>
            <Link href="https://web.facebook.com/pubuduconstructions/">
              <Image
                className="mt-6"
                src={logoPubudu}
                alt="Pubudu Constructions"
                width={300}
                height={300}
              />
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <p className="text text-center">Official Bronze Partner</p>
            <Link href="https://ictfromabc.com/">
              <Image
                className="mt-6"
                src={logoictFromAbc}
                alt="ICT From ABC"
                width={300}
                height={300}
              />
            </Link>
          </div>
        </div>

        <div className="flex gap-10 justify-center">
          <div className="flex flex-col items-center">
            <p className="text text-center">Official Bronze Partner</p>
            <Link href="https://www.brandviewlabels.com/">
              <Image
                className="mt-6"
                src={logoBrandView}
                alt="Code Filine"
                width={150}
                height={150}
              />
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <p className="text text-center">Official Digital Media Partner</p>
            <Link href="https://web.facebook.com/hacksl.tech/">
              <Image
                className="mt-6"
                src={logoHack}
                alt="Hack SL"
                width={150}
                height={150}
              />
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <p className="text text-center">Official T-Shirt Partner</p>
            <Link href="https://www.facebook.com/p/Real-Me-Tshirts-100083012007208/">
              <Image
                className="mt-6"
                src={logoRealMe}
                alt="Real Me"
                width={150}
                height={150}
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <p className="text text-center">Print and Online Media Partner</p>
          <Link href="https://www.virakesari.lk/">
            <Image
              className="mt-6"
              src={virakesariLogo}
              alt="Virakesari"
              width={300}
              height={300}
            />
          </Link>
        </div>

        <div>
          <p className="text text-center">Official Media Partner</p>
          <div className="flex gap-10 justify-center">
            <Link href="https://www.aruna.lk/">
              <Image
                className="mt-6"
                src={logoSunday1}
                alt="The Sunday Morning"
                width={270}
                height={270}
              />
            </Link>
            <Link href="https://www.aruna.lk/">
              <Image
                className="mt-6"
                src={logoSunday2}
                alt="Aruna"
                width={190}
                height={190}
              />
            </Link>
          </div>
        </div>

        <div className="flex gap-10 justify-center">
          <div className="flex flex-col items-center">
            <p className="text text-center">Official Gift Partner</p>
            <Link href="https://apiflora.lk/">
              <Image
                className="mt-6"
                src={logoApiFlora}
                alt="Api Flora"
                width={200}
                height={200}
              />
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <p className="text text-center">Official Food Partner</p>
            <Link href="https://shop.uswatte.lk/">
              <Image
                className="mt-6"
                src={logoUswatta}
                alt="Uswatta"
                width={200}
                height={200}
              />
            </Link>
          </div>
        </div>

        <div className="flex gap-10 justify-center">
          <div className="flex flex-col items-center">
            <p className="text text-center">Official Media Partner</p>
            <Link href="https://isurumaan.com/">
              <Image
                className="mt-6 bg-white"
                src={logoIsurumaan}
                alt="Isurumaan Photography"
                width={300}
                height={300}
              />
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <p className="text text-center">Official Gift Partner</p>
            <Link href="https://www.codefiline.com/">
              <Image
                className="mt-6 bg-white px-3 py-1"
                src={logoCodeFiline}
                alt="Code Filine"
                width={300}
                height={300}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
