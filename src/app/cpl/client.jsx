// app/dashboard/client.jsx
"use client"

import { Button, Card, Dropdown, DropdownItem, Footer } from "flowbite-react"
import CplTable from "../components/cpl-table"
import Search from "../components/search"
import { FooterMenu } from "../components/menu/Footer"
import CreateButton from "../components/buttons"

export default function CplClientSide() {
    return (
        <main>
            <div className="mx-10 my-3">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    Daftar CPL Program Studi
                </p>
                <form className="flex my-7 justify-center">
                    <Card className="flex items-center w-auto">
                        <div className="flex items-center gap-5">
                            <p>Kurikulum</p>
                            <Dropdown color={"light"} className="w-130 justify-between" label="Pilih" size="lg">
                                <DropdownItem>Kurikulum 2018 S-1 Informatika</DropdownItem>
                                <DropdownItem>Kurikulum 2018 S-1 Bioteknologi</DropdownItem>
                                <DropdownItem>Kurikulum 2018 S-1 Teknik Elektro</DropdownItem>
                                <DropdownItem>Kurikulum 2018 S-1 Teknik Industri</DropdownItem>
                            </Dropdown>
                            <Button size="lg" color={"green"}>Tampilkan</Button>
                        </div>
                    </Card>
                </form>
                <Card>
                    <div className="flex justify-end">
                        <div className="flex w-1/2 gap-2">
                            <Search />
                            <CreateButton />
                        </div>
                    </div>


                    <CplTable />
                </Card>

            </div>
        </main>
    )
}