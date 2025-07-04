// app/components/menu/navbar.jsx
"use client";

import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
} from "flowbite-react";

import SidebarMenu from "./Sidebar"; // Import SidebarMenu agar tombol drawer di navbar

export default function NavbarMenu() {
  return (
    <>
      <Navbar fluid rounded className="bg-gray-50">
        <NavbarBrand href="#">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            RPS & RTM UAI
          </span>
        </NavbarBrand>

        <div className="flex items-center gap-4 md:order-2">
          {/* Tombol drawer di mobile */}
          <SidebarMenu mode="mobile" />

          {/* User dropdown */}
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <DropdownHeader>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </DropdownHeader>
            <DropdownItem>Dashboard</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
            <DropdownItem>Earnings</DropdownItem>
            <DropdownDivider />
            <DropdownItem>Sign out</DropdownItem>
          </Dropdown>
        </div>
      </Navbar>
    </>
  );
}
