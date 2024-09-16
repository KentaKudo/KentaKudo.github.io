import { ShareButton } from "@/components/ShareButton";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <main className="w-full max-w-screen-lg mx-auto py-4 px-4">
        {children}
      </main>
      <footer className="pt-4 pb-10 w-full max-w-screen-lg mx-auto border-t border-slate-200 flex flex-col items-center gap-4">
        <p className="text-sm text-slate-500">© 2024 Kenta Kudo</p>
      </footer>
    </>
  );
}
