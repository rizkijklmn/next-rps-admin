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
  HiOutlineClipboardCopy,
  HiOutlineClipboardList,
  HiOutlineDocumentText,
  HiOutlineHome,
} from "react-icons/hi";
import { usePathname } from "next/navigation";

export default function SidebarMenu({ mode = "desktop" }) {

  const currentPath = usePathname();
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
              <SidebarItem href="/" icon={HiOutlineHome} active={currentPath === "/"}>Dashboard</SidebarItem>
            </SidebarItemGroup>

            <SidebarItemGroup>
              <h6 className="font-extrabold uppercase tracking-wider dark:text-white">Kurikulum</h6>
              <SidebarItem href="/matakuliah" active={currentPath === "/matakuliah"} icon={HiOutlineDocumentText}>Mata Kuliah</SidebarItem>
              <SidebarItem href="/cpl" active={currentPath === "/cpl"} icon={HiOutlineCheck}>CPL</SidebarItem>
              <SidebarItem href="/cpmk" active={currentPath === "/cpmk"} icon={HiOutlineCheck}>CPMK</SidebarItem>
              <SidebarItem href="/sub_cpmk" active={currentPath === "/sub_cpmk"} icon={HiOutlineCheck}>Sub-CPMK</SidebarItem>
              <SidebarItem href="/rpsemester" active={(currentPath === "/rpsemester")} icon={HiOutlineClipboardList}>RP Semester</SidebarItem>
            <SidebarItem href="/rpmingguan" active={currentPath === "/rpmingguan"} icon={HiOutlineClipboardList}>RP Mingguan</SidebarItem>
            <SidebarItem href="/rtm" active={currentPath === "/rtm"} icon={HiOutlineClipboardCopy}>RTM</SidebarItem>
          </SidebarItemGroup>

          {/* <SidebarItemGroup>
              <SidebarItem href="https://github.com/themesberg/flowbite-react/" icon={HiClipboard}>Docs</SidebarItem>
              <SidebarItem href="https://flowbite-react.com/" icon={HiCollection}>Components</SidebarItem>
              <SidebarItem href="https://github.com/themesberg/flowbite-react/issues" icon={HiInformationCircle}>Help</SidebarItem>
            </SidebarItemGroup> */}

        </SidebarItems>

      </div>
    </div>
      </Sidebar >
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
