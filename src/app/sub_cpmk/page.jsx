// app/dashboard/page.jsx
import NavbarMenu from "../components/menu/Navbar";
import SidebarMenu from "../components/menu/Sidebar";
import SubCPMKClientSide from "./client";

export const metadata = {
  title: "Sub CPMK",
  description: "Welcome to sub cpmk",
};

export default async function SubCPMK() {
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
          <SubCPMKClientSide />

        </main>
      </div>
    </>
  );
}
