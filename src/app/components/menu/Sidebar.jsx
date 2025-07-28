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
              <h5 className="font-semibold tracking-wider dark:text-white">Menu Kaprodi</h5>
              <SidebarItem href="/profil-lulusan" active={currentPath === "/profil-lulusan"} icon={GiGraduateCap}>Profil Lulusan</SidebarItem>
              <SidebarItem href="/cp-lulusan" active={currentPath === "/cp-lulusan"} icon={HiOutlineCheck}>CPL</SidebarItem>
              <SidebarItem href="/matkul" active={currentPath === "/matkul"} icon={HiOutlineDocumentText}>Mata Kuliah</SidebarItem>
            </SidebarItemGroup>

            <SidebarItemGroup>
              <h5 className="font-semibold tracking-wider dark:text-white">Menu Pengembang RPS</h5>
              {/* <SidebarItem href="/cpl_pengembangrps" active={currentPath === "/cpl_pengembangrps"} icon={HiOutlineCheck}>Mata Kuliah</SidebarItem> */}
              <SidebarItem href="/matkul-pengembangrps" active={currentPath === "/matkul-pengembangrps"} icon={HiOutlineDocumentText}>Daftar Mata Kuliah</SidebarItem>
            </SidebarItemGroup>

            <SidebarItemGroup>
              <SidebarItem href="/cp-matkul" active={currentPath === "/cp-matkul"} icon={HiOutlineCheck}>CPMK</SidebarItem>
              <SidebarItem href="/sub-cp-matkul" active={currentPath === "/sub-cp-matkul"} icon={HiOutlineCheck}>Sub-CPMK</SidebarItem>
              <SidebarItem href="/rp-semester" active={(currentPath === "/rp-semester")} icon={HiOutlineClipboardList}>RP Semester</SidebarItem>
              <SidebarItem href="/rp-mingguan" active={currentPath === "/rp-mingguan"} icon={HiOutlineClipboardList}>RP Mingguan</SidebarItem>
              <SidebarItem href="/rt-mahasiswa" active={currentPath === "/rt-mahasiswa"} icon={HiOutlineClipboardCopy}>RTM</SidebarItem>
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
