// app/components/menu/sidebar.jsx
"use client";

import { useState } from "react";
import {
  Button,
  Drawer,
  DrawerHeader,
  DrawerItems,
  HomeIcon,
  HRText,
  Sidebar,
  SidebarCollapse,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
  TextInput,
} from "flowbite-react";
import {
  HiChartPie,
  HiCheckCircle,
  HiClipboard,
  HiCollection,
  HiDocument,
  HiDocumentDownload,
  HiDocumentText,
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
    <Sidebar aria-label="Sidebar Menu" className="w-full">
      <div className="flex h-full w-full flex-col justify-between">
        <div>
          {/* {mode === "mobile" && (
            <form className="pb-3">
              <TextInput icon={HiSearch} type="search" placeholder="Search" required size={32} />
            </form>
          )} */}
          <SidebarItems>
            <SidebarItemGroup>
              <SidebarItem href="/" icon={HomeIcon}>Dashboard</SidebarItem>
            </SidebarItemGroup>
            
            <SidebarItemGroup>
              <h6 className="text-base font-semibold dark:text-white">Kurikulum</h6>
              {/* <SidebarItem href="#" icon={HiClipboard}>Daftar Kurikulum</SidebarItem> */}
              <SidebarItem href="/cpl" icon={HiCheckCircle}>CPL</SidebarItem>
              <SidebarCollapse label="Mata Kuliah" icon={HiDocumentText}>
                <SidebarItem href="/products" >Daftar Mata Kuliah</SidebarItem>
                <SidebarItem href="#">Mata Kuliah Prasyarat</SidebarItem>
              </SidebarCollapse>
            </SidebarItemGroup>
            {/* <SidebarItemGroup>
              <SidebarItem href="https://github.com/themesberg/flowbite-react/" icon={HiClipboard}>Docs</SidebarItem>
              <SidebarItem href="https://flowbite-react.com/" icon={HiCollection}>Components</SidebarItem>
              <SidebarItem href="https://github.com/themesberg/flowbite-react/issues" icon={HiInformationCircle}>Help</SidebarItem>
            </SidebarItemGroup> */}
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
