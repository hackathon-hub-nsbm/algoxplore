import Image from "next/image";
import Art from "./art";
export default function Sponsors() {
  return (
    <div className="lg:pr-20">
      <div className="w-full flex flex-col items-center gap-10 justify-center border-cover p-10">
        <div>
          <p className="text text-center">Bronze Sponsor</p>
          <Image
            className="mt-6"
            src="/logo_pubudu_constructions.png"
            alt="Pubudu Constructions"
            width={300}
            height={300}
          />
        </div>
        <div>
          <p className="text text-center">Media Sponsor</p>
          <div className="flex gap-10">
            <Image
              className="mt-6"
              src="/logo_sunday_morning.png"
              alt="The Sunday Morning"
              width={190}
              height={190}
            />
            <Image
              className="mt-6"
              src="/logo_aruna.jpg"
              alt="Aruna"
              width={190}
              height={190}
            />
          </div>
        </div>
      </div>
      <Art tab="SPONSORS" />
    </div>
  );
}
