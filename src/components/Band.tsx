import Image from "next/image";

export function Band() {
  return (
    <figure className="mx-auto w-full max-w-[1200px] px-5 sm:px-10 xl:px-0">
      <div className="relative aspect-[2/1] w-full overflow-hidden sm:aspect-[8/3]">
        <Image
          src="/hero-band.jpg"
          alt="Vamsi looking out over a sea of clouds at sunset"
          fill
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-cover object-[center_40%]"
        />
      </div>
    </figure>
  );
}
