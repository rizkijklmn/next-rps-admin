// app/cpmk/page.jsx
import NavbarMenu from "../../components/menu/Navbar";
import SidebarMenu from "../../components/menu/Sidebar";
import CreateCplClientSide from "./client";

export const metadata = {
  title: "Create CPL",
  description: "Welcome to create cpl",
};

export default async function CreateCpl() {
  return (
    <>
      <div className="flex h-screen">

        {/* Konten utama */}
        <div className="flex flex-col flex-1 md:ml-64">

          {/* Navbar - fixed di atas */}
          <header className="fixed top-0 left-0 right-0 h-16 ">
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
          <main className="mt-0 p-4 overflow-y-auto h-[calc(100vh-4rem)]">
            {/* Konten panjang di sini */}
            <CreateCplClientSide />
          </main>
        </div>
        
      </div>
    </>
  );
}
