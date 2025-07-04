// app/dashboard/page.jsx
import NavbarMenu from "../components/menu/Navbar";
import SidebarMenu from "../components/menu/Sidebar";
import DashboardClientSide from "./client";

export const metadata = {
  title: "Dashboard",
  description: "Welcome to dashboard",
};

export default async function Dashboard() {
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
          <DashboardClientSide />
        </main>
      </div>
    </>
  );
}
