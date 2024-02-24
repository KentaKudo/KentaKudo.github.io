import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix SPA" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ];
};

export default function Index() {
  return (
    <>
      <h1 className="hidden">Kenta Kudo</h1>
      <img
        src="/images/river-themes.jpg"
        alt="The river Themes"
        className="-z-10 w-full h-screen absolute top-0 right-0 bottom-0 left-0 object-center object-cover"
      />
    </>
  );
}
