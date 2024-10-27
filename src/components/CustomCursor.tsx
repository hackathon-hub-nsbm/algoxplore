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
          position: "fixed",
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div />
    </>
  );
};

export default CustomCursor;
