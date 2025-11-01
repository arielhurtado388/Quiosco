import Logo from "../ui/Logo";
import AdminRoute from "./AdminRoute";

const navegacionAdmin = [
  { url: "/admin/ordenes", text: "Ordenes", blank: false },
  { url: "/admin/productos", text: "Productos", blank: false },
  { url: "/orden/cafe", text: "Quiosco", blank: true },
];

export default function AdminSidebar() {
  return (
    <>
      <Logo />
      <div className="space-y-3 ">
        <p className="mt-10 uppercase font-bold text-sm text-gray-600 text-center">
          Navegación
        </p>
        <nav className="flex flex-col">
          {navegacionAdmin.map((enlace) => (
            <AdminRoute key={enlace.url} enlace={enlace} />
          ))}
        </nav>
      </div>
    </>
  );
}
