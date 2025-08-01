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
import { GiGraduateCap } from "react-icons/gi";

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
              {/* <h6 className="font-extrabold uppercase tracking-wider dark:text-white">Kurikulum</h6> */}
              <h5 className="font-semibold tracking-wider dark:text-white">Menu Kaprodi/Kurikulum</h5>
              <SidebarItem href="/pl" active={currentPath === "/pl"} icon={GiGraduateCap}>Profil Lulusan</SidebarItem>
              <SidebarItem href="/cpl" active={currentPath === "/cpl"} icon={HiOutlineCheck}>CPL</SidebarItem>
              <SidebarItem href="/matakuliah" active={currentPath === "/matakuliah"} icon={HiOutlineDocumentText}>Daftar Mata Kuliah</SidebarItem>
            </SidebarItemGroup>

            <SidebarItemGroup>
              <h5 className="font-semibold tracking-wider dark:text-white">Menu Pengembang RPS</h5>
              {/* <SidebarItem href="/cpl_pengembangrps" active={currentPath === "/cpl_pengembangrps"} icon={HiOutlineCheck}>Mata Kuliah</SidebarItem> */}
              <SidebarItem href="/matakuliah-pengembang" active={currentPath === "/matakuliah-pengembang"} icon={HiOutlineDocumentText}>Daftar Mata Kuliah</SidebarItem>
            </SidebarItemGroup>

            <SidebarItemGroup>
              <SidebarItem href="/cpmk" active={currentPath === "/cpmk"} icon={HiOutlineCheck}>CPMK</SidebarItem>
              <SidebarItem href="/subcpmk" active={currentPath === "/subcpmk"} icon={HiOutlineCheck}>Sub-CPMK</SidebarItem>
              <SidebarItem href="/rpsemester" active={(currentPath === "/rpsemester")} icon={HiOutlineClipboardList}>RP Semester</SidebarItem>
              <SidebarItem href="/rpmingguan" active={currentPath === "/rpmingguan"} icon={HiOutlineClipboardList}>RP Mingguan</SidebarItem>
              <SidebarItem href="/rtmahasiswa" active={currentPath === "/rtmahasiswa"} icon={HiOutlineClipboardCopy}>RTM</SidebarItem>
            </SidebarItemGroup>

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
      <Button size="md" onClick={() => setIsOpen(true)}>
        ☰ Menu
      </Button>
      <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
        <DrawerHeader title="Menu" />
        <DrawerItems>{sidebarContent}</DrawerItems>
      </Drawer>
    </div>
  );
}