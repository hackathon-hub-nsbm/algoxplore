import mascot from "@/assets/mascot.jpg";
import Image from "next/image";

export default function MascotDisplay() {
  return (
    <div>
      <Image
        src={mascot}
        alt="Logo"
        width={500}
        height={400}
        style={{
          position: "absolute",
          margin: "5px",
          bottom: "0",
          left: "0",
          animation: "glow2 2.3s infinite alternate",
          opacity: 0.7,
        }}
      />
      <style jsx>{`
                @keyframes glow2 {
                    0% {
                        filter: 
                            invert(30%) sepia(90%) saturate(747%) hue-rotate(74deg) brightness(91%) contrast(80%)
                            drop-shadow(0 0 2px rgba(56, 172, 56, 0.8))
                            drop-shadow(0 0 6px rgba(56, 172, 56, 0.6))
                            drop-shadow(0 0 6px rgba(56, 172, 56, 0.4));
                    }

                    50% {
                        filter: 
                            invert(30%) sepia(90%) saturate(747%) hue-rotate(74deg) brightness(91%) contrast(80%) 
                            drop-shadow(0 0 4px rgba(56, 172, 56, 1))
                            drop-shadow(0 0 5px rgba(56, 172, 56, 0.8))
                            drop-shadow(0 0 10px rgba(56, 172, 56, 0.6));
                    }

                    100% {
                        filter: 
                            invert(30%) sepia(90%) saturate(747%) hue-rotate(74deg) brightness(91%) contrast(80%) 
                            drop-shadow(0 0 6px rgba(56, 172, 56, 0.9))
                            drop-shadow(0 0 8px rgba(56, 172, 56, 0.7))
                            drop-shadow(0 0 12px rgba(56, 172, 56, 0.6));
                    }
                }
            `}</style>
    </div>
  );
}
