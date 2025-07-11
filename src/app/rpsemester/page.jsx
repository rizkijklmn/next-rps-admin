// app/rpsemester/page.jsx
import NavbarMenu from "../components/menu/Navbar";
import SidebarMenu from "../components/menu/Sidebar";
import RPSemesterClientSide from "./client";

export const metadata = {
  title: "Rencana Pembelajaran Semester",
  description: "Welcome to rencana pembelajaran semester",
};

export default async function RPSemester() {
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
          <RPSemesterClientSide />

        </main>
      </div>
    </>
  );
}
