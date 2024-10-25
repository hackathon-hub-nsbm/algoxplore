import Art from "./art";
export default function Sponsors() {
  return (
    <div className="lg:pr-20">
      <div className="container mx-auto border-cover">
        <p className="text text-lg mx-10 text-justify mt-20 p-5">
          AlgoXplore 1.0 is event organized by the []. The event is aimed at
          providing a platform for students to explore the world of algorithms
          and data structures. The event will consist of a series of lectures
          and hands-on sessions on various topics in algorithms and data
          structures. The event will also include a coding competition where
          participants can showcase their skills in competitive programming
          <span className="blinking_underscore"> _</span>
        </p>
      </div>
      <Art tab="SPONSORS" />
    </div>
  );
}
