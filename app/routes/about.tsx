import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Kenta Kudo | About me" },
    // { name: "description", content: "Welcome my page!" },
  ];
};

export default function About() {
  return (
    <main className="w-full max-w-screen-lg mx-auto py-4 flex flex-col gap-4">
      <h1 className="font-bold text-4xl">Kenta Kudo</h1>
      <p>WIP</p>
    </main>
  );
}
