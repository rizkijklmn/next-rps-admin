// app/rpmingguan/page.jsx
import NavbarMenu from "../components/menu/Navbar";
import SidebarMenu from "../components/menu/Sidebar";
import RPMingguanClientSide from "./client";

export const metadata = {
  title: "Rencana Pembelajaran Mingguan",
  description: "Welcome to rencana pembelajaran mingguan",
};

export default async function RPMingguan() {
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
          <RPMingguanClientSide />

        </main>
      </div>
    </>
  );
}
