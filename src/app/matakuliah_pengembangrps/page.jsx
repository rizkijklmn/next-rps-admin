// app/cpmk/page.jsx
import NavbarMenu from "../components/menu/Navbar";
import SidebarMenu from "../components/menu/Sidebar";
import MKPengembangRPSClientSide from "./client";

export const metadata = {
  title: "CPL Pengembang RPS",
  description: "Welcome to cpl pengembang rps",
};

export default async function MKPengembangRPS() {
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
          <MKPengembangRPSClientSide />

        </main>
      </div>
    </>
  );
}
