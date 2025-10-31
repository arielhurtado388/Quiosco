import OrdenResumen from "@/components/orden/OrdenResumen";
import OrdenSidebar from "@/components/orden/OrdenSidebar";
import ToastNotificacion from "@/components/ui/ToastNotificacion";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="md:flex ">
        <OrdenSidebar />
        <main className="md:flex-1 md:h-screen md:overflow-y-scroll p-5">
          {children}
        </main>
        <OrdenResumen />
      </div>

      <ToastNotificacion />
    </>
  );
}
