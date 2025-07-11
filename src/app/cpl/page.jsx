// app/cpl/page.jsx
import NavbarMenu from "../components/menu/Navbar";
import SidebarMenu from "../components/menu/Sidebar";
import CplClientSide from "./client";

export const metadata = {
  title: "CPL",
  description: "Welcome to cpl",
};

export default async function Cpl() {
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
          <CplClientSide />
        </main>
      </div>
    
    </>
  );
}
