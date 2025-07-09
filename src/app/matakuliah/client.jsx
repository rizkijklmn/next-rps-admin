// app/dashboard/client.jsx
"use client"

import { Card, Dropdown, DropdownItem } from "flowbite-react"
import { TampilkanButton } from "../components/buttons"
import { TableCpl } from "../components/tables"

export default function CplClientSide() {

    return (
        <main>
            <div className="mx-10 my-3">
                <p className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Daftar Mata Kuliah
                </p>
                <form className="flex my-7 justify-center">
                    <Card className="flex items-center w-auto bg-gray-50">
                        <div className="flex items-center gap-5">
                            <p>Kurikulum</p>
                            <Dropdown color={"light"} className="w-130 justify-between" label="Pilih" size="lg">
                                <DropdownItem>2018</DropdownItem>
                                <DropdownItem>2020</DropdownItem>
                                <DropdownItem>2022</DropdownItem>
                                <DropdownItem>2024</DropdownItem>
                            </Dropdown>
                            <p>Program Studi</p>
                            <Dropdown color={"light"} className="w-130 justify-between" label="Pilih" size="lg">
                                <DropdownItem>S-1 Informatika</DropdownItem>
                                <DropdownItem>S-1 Bioteknologi</DropdownItem>
                                <DropdownItem>S-1 Teknik Elektro</DropdownItem>
                                <DropdownItem>S-1 Teknik Industri</DropdownItem>
                            </Dropdown>
                            <TampilkanButton />
                            {/* <Button size="lg" color={"green"}>Tampilkan</Button> */}
                        </div>
                    </Card>
                </form>
                <Card>
                    <TableCpl />
                </Card>
            </div>
        </main>
    )
}