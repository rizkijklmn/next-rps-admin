// app/rtm/page.jsx
import NavbarMenu from "../components/menu/Navbar";
import SidebarMenu from "../components/menu/Sidebar";
import RTMClientSide from "./client";

export const metadata = {
  title: "Rencana Tugas Mahasiswa",
  description: "Welcome to rencana tugas mahasiswa",
};

export default async function RTM() {
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
          <RTMClientSide />

        </main>
      </div>
    </>
  );
}
