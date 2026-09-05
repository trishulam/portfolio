import Image from "next/image";

export function Band() {
  return (
    <div
      className="relative left-1/2 -mt-6 h-[52vw] max-h-[560px] min-h-[260px] w-screen -translate-x-1/2 overflow-hidden sm:-mt-10 sm:h-[42vw]"
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)",
      }}
      aria-hidden="true"
    >
      <Image
        src="/hero-band.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-[center_45%] opacity-95 dark:opacity-80"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, var(--paper) 0%, transparent 28%, transparent 72%, var(--paper) 100%)",
          opacity: 0.85,
        }}
      />
    </div>
  );
}
