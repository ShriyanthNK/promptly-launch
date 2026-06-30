import Image from "next/image";

interface PhoneFrameProps {
  src: string;
  alt: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { width: 180, height: 390, border: 6, radius: 34, notchW: 72, notchH: 20 },
  md: { width: 230, height: 498, border: 8, radius: 42, notchW: 88, notchH: 24 },
  lg: { width: 280, height: 606, border: 10, radius: 50, notchW: 104, notchH: 28 },
};

export default function PhoneFrame({
  src,
  alt,
  className = "",
  size = "md",
}: PhoneFrameProps) {
  const s = sizes[size];

  return (
    <div
      className={`relative bg-gray-950 shrink-0 ${className}`}
      style={{
        width: s.width,
        height: s.height,
        borderRadius: s.radius,
        border: `${s.border}px solid #1a1a2e`,
        boxShadow:
          "0 40px 80px -16px rgba(91,91,214,0.32), 0 8px 24px -4px rgba(0,0,0,0.24), inset 0 0 0 1px rgba(255,255,255,0.06)",
      }}
    >
      {/* Dynamic island / notch */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 bg-gray-950 z-20 rounded-b-2xl"
        style={{ width: s.notchW, height: s.notchH }}
      />

      {/* Screen content */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ borderRadius: s.radius - s.border }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes={`${s.width}px`}
          priority
        />
      </div>

      {/* Screen glare */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          borderRadius: s.radius - s.border,
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%)",
        }}
      />
    </div>
  );
}
