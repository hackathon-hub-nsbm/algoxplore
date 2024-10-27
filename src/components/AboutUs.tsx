export default function AboutUs() {
  return (
    <section className="about-section p-8 space-y-8">
      <div className="title text-center">
        <h1 className="text-3xl font-bold mb-6 text-lime-500 digital-font">
          Hackathon Hub
        </h1>
      </div>

      <div className="intro text-center">
        <p className="text-sm leading-relaxed text-center digital-font">
          The Hackathon Hub is a platform dedicated to fostering innovation and
          technical excellence in university students. Its mission is to empower
          future problem solvers through hands-on training, mentorship, and
          resources, preparing them for inter-university competitions and
          real-world challenges using cutting-edge technologies.
        </p>
      </div>

      <div className="details">
        <h2 className="text-lg font-semibold mb-3 text-lime-500 digital-font text-center">
          What We Offer
        </h2>
        <p className="text-sm leading-relaxed text-center digital-font">
          The Hackathon Hub provides students with opportunities to enhance
          their technical skills, critical thinking, and teamwork by connecting
          them with industry experts and mentors, ensuring they are prepared to
          succeed in competitions and develop innovative solutions.
        </p>
        <p className="text-sm leading-relaxed mt-4 text-center digital-font">
          The Hackathon Hub welcomes both beginners and experienced coders,
          offering a pathway to success through skill development and
          innovation. Join our vibrant community to transform ideas into
          impactful projects and become champions in the tech world.
        </p>
      </div>

      <div className="vision-mission flex flex-col md:flex-row gap-8 mt-8 text-center">
        <div className="vision w-full md:w-1/2">
          <h2 className="text-lg font-semibold mb-3 text-lime-500 digital-font">
            VISION
          </h2>
          <p className="text-sm leading-relaxed digital-font">
            To be a leading innovation hub that empowers university students to
            harness their creativity and technical skills, transforming them
            into industry-ready problem solvers and champions in competitive
            environments.
          </p>
        </div>

        <div className="mission w-full md:w-1/2">
          <h2 className="text-lg font-semibold mb-3 text-lime-500 digital-font">
            MISSION
          </h2>
          <p className="text-sm leading-relaxed digital-font">
            Our mission is to provide a collaborative and supportive platform
            that equips students with the knowledge, skills, and mentorship
            necessary to excel in hackathons and inter-university competitions.
            We strive to foster a culture of innovation, teamwork, and
            continuous learning, enabling participants to turn their ideas into
            impactful solutions that address real-world challenges.
          </p>
        </div>
      </div>
    </section>
  );
}

