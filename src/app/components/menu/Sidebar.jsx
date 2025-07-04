// app/components/menu/sidebar.jsx
"use client";

import {
  Button,
  Drawer,
  DrawerHeader,
  DrawerItems,
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
  TextInput,
} from "flowbite-react";
import { useState } from "react";
import {
  HiChartPie,
  HiClipboard,
  HiCollection,
  HiInformationCircle,
  HiLogin,
  HiPencil,
  HiSearch,
  HiShoppingBag,
  HiUsers,
} from "react-icons/hi";


export default function SidebarMenu({ mode = "desktop" }) {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarContent = (
    <Sidebar aria-label="Sidebar Menu">
      <div className="flex h-full flex-col justify-between py-2">
        <div>
          {mode === "mobile" && (
            <form className="pb-3">
              <TextInput icon={HiSearch} type="search" placeholder="Search" required size={32} />
            </form>
          )}
          <SidebarItems>
            <SidebarItemGroup>
              <SidebarItem href="/" icon={HiChartPie}>Dashboard</SidebarItem>
              <SidebarItem href="/e-commerce/products" icon={HiShoppingBag}>Products</SidebarItem>
              <SidebarItem href="/users/list" icon={HiUsers}>Users list</SidebarItem>
              <SidebarItem href="/authentication/sign-in" icon={HiLogin}>Sign in</SidebarItem>
              <SidebarItem href="/authentication/sign-up" icon={HiPencil}>Sign up</SidebarItem>
            </SidebarItemGroup>
            <SidebarItemGroup>
              <SidebarItem href="https://github.com/themesberg/flowbite-react/" icon={HiClipboard}>Docs</SidebarItem>
              <SidebarItem href="https://flowbite-react.com/" icon={HiCollection}>Components</SidebarItem>
              <SidebarItem href="https://github.com/themesberg/flowbite-react/issues" icon={HiInformationCircle}>Help</SidebarItem>
            </SidebarItemGroup>
          </SidebarItems>
        </div>
      </div>
    </Sidebar>
  );

  if (mode === "desktop") {
    return <div className="h-full">{sidebarContent}</div>;
  }

  // Mode mobile: show button and drawer
  return (
    <div className="md:hidden">
      <Button onClick={() => setIsOpen(true)} className="m-1">
        ☰ Menu
      </Button>
      <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
        <DrawerHeader title="Menu" />
        <DrawerItems>{sidebarContent}</DrawerItems>
      </Drawer>
    </div>
  );
}
