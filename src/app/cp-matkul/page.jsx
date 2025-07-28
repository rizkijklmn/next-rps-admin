// app/cpmk/page.jsx
import NavbarMenu from "../components/menu/Navbar";
import SidebarMenu from "../components/menu/Sidebar";
import CPMKClientSide from "./client";

export const metadata = {
  title: "Capaian Pembelajaran MK",
  description: "Welcome to cpmk",
};

export default async function CPMK() {
  return (
    <>
      <div className="flex h-screen">

        {/* Konten utama */}
        <div className="flex flex-col flex-1 md:ml-64">

          {/* Navbar - fixed di atas */}
          <header className="fixed top-0 left-0 right-0 h-15 ">
            {/* Navbar content */}
            <div className="w-full">
              <NavbarMenu />
            </div>
          </header>

          {/* Sidebar desktop */}
          <aside className="fixed top-15 left-0 h-screen w-64 z-40 hidden md:block">
            <SidebarMenu mode="desktop" />
          </aside>

          {/* Konten scrollable */}
          <main className="mt-16 p-4 overflow-y-auto h-[calc(100vh-4rem)]">
            {/* Konten panjang di sini */}
            <CPMKClientSide />
          </main>
        </div>
        
      </div>
    </>
  );
}
