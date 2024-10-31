export default function FAQ() {
  const faqs = [
    {
      question: "How many members can there be in a team?",
      answer: "Teams can consist of 2 to 4 members.",
    },
    {
      question:
        "What is the eligibility criteria to participate in the hackathon?",
      answer: "The hackathon is open to undergraduates of all skill levels.",
    },
    {
      question: "Can we participate virtually, or is it an in-person event?",
      answer:
        "The competition consists of two rounds. The first round will be held virtually, and the second round will take place on university premises.",
    },
    {
      question: "Is there a registration fee to participate?",
      answer: "No, registration for the hackathon is completely free.",
    },
    {
      question: "Will food and beverages be provided at the venue?",
      answer:
        "Yes, meals and snacks will be provided for participants attending the second round.",
    },
    {
      question:
        "What kind of support will mentors provide during the hackathon?",
      answer:
        "Mentors will be available to guide teams, answer questions, and provide technical and strategic advice to help participants.",
    },
  ];

  return (
    <section className="faq-section p-8 space-y-8">
      <div className="title">
        <h2 className="text-5xl font-bold mb-6 text-lime-500 digital-font">
          FAQs
        </h2>
      </div>
      <ul className="space-y-6">
        {faqs.map((faq, index) => (
          <li
            key={index}
            className="text-base leading-relaxed text-left digital-font"
          >
            <p className="font-semibold">{faq.question}</p>
            <p className="mt-2">{faq.answer}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
