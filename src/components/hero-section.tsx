import Link from "next/link";
import BrandTicker from "./brandTicker";
import Countdown from "./countdown";

export default function About({
  setActiveTab,
}: { setActiveTab: (tab: string) => void }) {
  return (
    <div>
      <div className="border-cover">
        <Countdown />
        <div className="flex flex-col items-center text">
          <Link
            href="#"
            onClick={() => setActiveTab("REGISTRATION")}
            className="text-center py-[5px] px-[30px] sm:text-xl lg:text-2xl tracking-widest bg-[#38ac38] text-black"
          >
            REGISTRATIONS ARE NOW CLOSED!
          </Link>
        </div>
        <p className="text mx-10 text-center p-2 pb-0 mt-10 mb-5 lg:text-justify lg:mt-10">
          AlgoXplore 1.0, organized by Hackathon Hub NSBM, is an exciting event
          that combines an Algothon and a Capture the Flag (CTF) challenge.
          Taking place at NSBM Green University, the event features two
          competitive rounds designed to test participants algorithmic
          problem-solving and cybersecurity skills. With a focus on innovation
          and teamwork, AlgoXplore 1.0 promises an engaging experience for all
          coding enthusiasts.
          <span className="blinking_underscore"> _</span>
        </p>
        <div className="p-6 pb-0">
          <BrandTicker />
        </div>
      </div>
    </div>
  );
}
