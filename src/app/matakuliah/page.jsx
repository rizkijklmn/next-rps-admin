// app/matakuliah/page.jsx
import NavbarMenu from "../components/menu/Navbar";
import SidebarMenu from "../components/menu/Sidebar";
import MatakuliahClientSide from "./client";

export const metadata = {
  title: "Mata Kuliah",
  description: "Welcome to matakuliah",
};

export default async function Matakuliah() {
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
            <MatakuliahClientSide />
          </main>
        </div>

      </div>
    </>


    // <>
    //   <NavbarMenu />
    //   <div className="flex min-h-screen">
    //     {/* Sidebar Desktop */}
    //     <aside className="hidden md:block w-64">
    //       <SidebarMenu mode="desktop" />
    //     </aside>

    //     {/* Main Content */}
    //     <main className="flex-1 p-4">
    //       <MatakuliahClientSide />
    //     </main>
    //   </div>
    // </>
  );
}
