import { useEffect, useState } from "react";

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="fixed pointer-events-none z-50"
        style={{
          width: "10px",
          height: "20px",
          backgroundColor: "#38ac38",
          boxShadow: "0 0 5px #38ac38, 0 0 10px #38ac38",
          position: "fixed",
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          mixBlendMode: "screen",
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none z-40"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.05)",
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.2) 1px, transparent 1px)",
          backgroundSize: "100% 4px",
          mixBlendMode: "multiply",
        }}
      />
    </>
  );
};

export default CustomCursor;
