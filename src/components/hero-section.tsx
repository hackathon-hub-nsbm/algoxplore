import Link from "next/link";
import Art from "./art";
import Countdown from "./countdown";
export default function About() {
  return (
    <div>
      <div className="container mx-auto border-cover">
        <Countdown />
        <div className="flex flex-col items-center text">
          <Link
            href="#"
            className="text-center py-[5px] px-[30px] sm:text-xl lg:text-2xl tracking-widest bg-[#38ac38] text-black"
          >
            REGISTER NOW
          </Link>
        </div>
        <p className="text text-lg xl:mx-10 text-justify mt-20 p-5">
          AlgoXplore 1.0, organised by Hackathon Hub NSBM, is an exciting event
          combining an Algothon and a Capture the Flag (CTF) challenge. Taking
          place at NSBM Green University, the event features two competitive
          rounds designed to test participants algorithmic problem-solving and
          cybersecurity skills. With a focus on innovation and teamwork,
          AlgoXplore 1.0 promises an engaging experience for all coding
          enthusiasts.
          <span className="blinking_underscore"> _</span>
        </p>
      </div>
      <div className="mt-10 pt-10">
        <Art tab="COUNTDOWN" />
      </div>
    </div>
  );
}
