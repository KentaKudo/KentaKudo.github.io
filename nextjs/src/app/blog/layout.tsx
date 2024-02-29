export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="w-full max-w-screen-md mx-auto py-4 px-4">{children}</main>
  );
}
