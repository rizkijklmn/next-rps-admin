// app/matakuliah/page.jsx
import NavbarMenu from "../components/menu/Navbar";
import SidebarMenu from "../components/menu/Sidebar";
import MatakuliahClientSide from "./client";

export const metadata = {
  title: "Matakuliah",
  description: "Welcome to matakuliah",
};

export default async function Matakuliah() {
  return (
    <>
      <NavbarMenu />
      <div className="flex min-h-screen">
        {/* Sidebar Desktop */}
        <aside className="hidden md:block w-64">
          <SidebarMenu mode="desktop" />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4">
          <MatakuliahClientSide />
        </main>
      </div>
    </>
  );
}
