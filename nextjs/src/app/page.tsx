import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="hidden">Kenta Kudo</h1>
      <Image
        src="/river-themes.jpg"
        fill
        alt="Themes River"
        className="-z-10 w-full h-screen absolute top-0 right-0 bottom-0 left-0 object-center object-cover"
      />
    </>
  );
}
