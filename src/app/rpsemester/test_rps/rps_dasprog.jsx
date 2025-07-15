// app/matakuliah/client.jsx
"use client"

import { Card, Dropdown, DropdownItem } from "flowbite-react"
import { ButtonCustom } from "../components/Button"
import { TableMatakuliah } from "../components/Tables"
import { kurikulum, prodi } from "../components/Data"
import { useState } from "react";
import { IoSearch } from "react-icons/io5"
import { SearchMK } from "../components/Search"

export default function MatakuliahClientSide() {

    const [stateKurikulum, setStateKurikulum] = useState("-- Pilih Kurikulum --");
    // const [stateProdi, setStateProdi] = useState("-- Pilih Program Studi --");

    return (
        <main>
            <div className="mx-10 my-3">
                <p className="text-xl font-bold tracking-normal text-gray-900 dark:text-white">
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

                            {/* Tombol tampilkan */}
                            <ButtonCustom
                                type={"button"}
                                className={"inline-flex gap-2 cursor-pointer items-center space-x-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-sm text-sm"}
                                btnColor={"blue"}
                                icon={<IoSearch size={15} />}
                                text={"Tampilkan"}
                            />
                        </div>
                    </Card>
                </form>
                <Card>
                    <div className="flex justify-end">
                        <div className="flex w-[30%] gap-5">
                            {/* Form pencarian matakuliah */}
                            <SearchMK />
                        </div>
                    </div>

                    {/* Table list matakuliah */}
                    <TableMatakuliah />
                </Card>
            </div>
        </main>
    )
}