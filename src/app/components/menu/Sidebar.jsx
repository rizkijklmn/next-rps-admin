// app/components/menu/sidebar.jsx
"use client";

import { useState } from "react";
import {
  Button,
  Drawer,
  DrawerHeader,
  DrawerItems,
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import {
  HiOutlineCheck,
  HiOutlineClipboardList,
  HiOutlineDocumentText,
} from "react-icons/hi";
import { IoHomeOutline } from "react-icons/io5";

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
              <SidebarItem href="/" icon={IoHomeOutline}>Dashboard</SidebarItem>
            </SidebarItemGroup>

            <SidebarItemGroup>
              <h6 className="text-base font-semibold dark:text-white">Kurikulum</h6>
              <SidebarItem href="/matakuliah" icon={HiOutlineDocumentText}>Mata Kuliah</SidebarItem>
              <SidebarItem href="/cpl" icon={HiOutlineCheck}>CPL</SidebarItem>
              <SidebarItem href="/cpmk" icon={HiOutlineCheck}>CPMK</SidebarItem>
              <SidebarItem href="/sub_cpmk" icon={HiOutlineCheck}>Sub-CPMK</SidebarItem>
              <SidebarItem href="/rps" icon={HiOutlineClipboardList}>RPS</SidebarItem>
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
