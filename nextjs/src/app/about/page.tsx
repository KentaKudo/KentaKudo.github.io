import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About me",
};

export default function About() {
  return (
    <main className="w-full max-w-screen-lg mx-auto py-4 flex flex-col gap-4">
      <h1 className="font-bold text-4xl">Kenta Kudo</h1>
      <p>WIP</p>
    </main>
  );
}
