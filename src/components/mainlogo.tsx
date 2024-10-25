import Image from "next/image";

export default function BackDrop() {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        width: "60vw",
        height: "60vh",
        zIndex: -1,
        overflow: "hidden",
        opacity: 0.1,
        transform: "translate(-50%, -50%)",
      }}
    >
      <Image
        src="/images/backlogo.png"
        alt="Logo"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}
