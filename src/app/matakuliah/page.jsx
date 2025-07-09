// app/products/page.jsx
import NavbarMenu from "../components/menu/Navbar";
import SidebarMenu from "../components/menu/Sidebar";
import ProductsClientSide from "./client";

export const metadata = {
  title: "RPS & RTM UAI - Products",
  description: "Welcome to products",
};

export default async function Products() {
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
          <ProductsClientSide />
        </main>
      </div>
    </>
  );
}
