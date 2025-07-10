// app/dashboard/client.jsx
"use client"

import { Card, Dropdown, DropdownItem } from "flowbite-react"
import { ShowButton } from "../components/buttons"
import { TableCpl, TableMatakuliah } from "../components/tables"
import { useState } from "react";

export default function MatakuliahClientSide() {

    const kurikulum = ["2018", "2020", "2022", "2024"];
    const prodi = ["S-1 Informatika", "S-1 Bioteknologi", "S-1 Teknik Elektro", "S-1 Teknik Industri"];

    const [stateKurikulum, setStateKurikulum] = useState("-- Pilih Kurikulum --");
    const [stateProdi, setStateProdi] = useState("-- Pilih Program Studi --");

    return (
        <main>
            <div className="mx-10 my-3">
                <p className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Daftar Mata Kuliah
                </p>
                <form className="flex my-7 justify-center">
                    <Card className="flex items-center w-auto bg-gray-50">
                        <div className="flex items-center gap-5">

                            <p className="font-bold">Kurikulum</p>
                            <Dropdown color={"light"} className="w-100 justify-between" label={stateKurikulum} size="lg">
                                {kurikulum.map((kurikulum, i_kurikulum) => (
                                    <DropdownItem key={i_kurikulum} onClick={() => setStateKurikulum(kurikulum)}>{kurikulum}</DropdownItem>
                                ))}
                            </Dropdown>

                            {/* Vertical divider */}
                            <div
                                className="h-full w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400">
                            </div>

                            <p className="font-bold">Program Studi</p>
                            <Dropdown color={"light"} className="w-100 justify-between" label={stateProdi} size="lg">
                                {prodi.map((prodi, i_prodi) => (
                                    <DropdownItem key={i_prodi} onClick={() => setStateProdi(prodi)}>{prodi}</DropdownItem>
                                ))}
                            </Dropdown>
                            <ShowButton />
                            {/* <Button size="lg" color={"green"}>Tampilkan</Button> */}
                        </div>
                    </Card>
                </form>
                <Card>
                    <TableMatakuliah />
                </Card>
            </div>
        </main>
    )
}