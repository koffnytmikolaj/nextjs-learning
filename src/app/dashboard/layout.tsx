export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="dasboard-layout">
      <h2>Panel administracyjny</h2>
      {children}
    </section>
  );
}
