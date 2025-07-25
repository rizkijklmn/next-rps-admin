// app/matakuliah/client.jsx
"use client"

import { Button, Card, Dropdown, DropdownItem } from "flowbite-react"
import { ButtonCustom, ButtonTampilkan } from "../components/Button"
import { TablesMatakuliah } from "../components/Tables"
import { kurikulum, prodi } from "../components/Data"
import { useState } from "react";
import { IoSearch } from "react-icons/io5"
import { SearchMK } from "../components/Search"
import DropdownKurikulum from "../components/DropdownKurikulum"

export default function MatakuliahClientSide() {

    const [kurikulumId, setKurikulumId] = useState(null);

    const [stateKurikulum, setStateKurikulum] = useState("-- Pilih Kurikulum --");
    // const [stateProdi, setStateProdi] = useState("-- Pilih Program Studi --");

    return (
        <main>
            <div className="mx-10 my-3">
                <p className="text-xl font-bold tracking-normal text-gray-900 dark:text-white">
                    Halaman Daftar Mata Kuliah
                </p>
                <form className="flex my-7 justify-center">
                    <Card className="flex items-center w-auto bg-gray-50">
                        <div className="flex items-center gap-5">

                            {/* Pilihan Kurikulum */}
                            <p className="font-semibold">Kurikulum</p>
                            <DropdownKurikulum onSelect={setKurikulumId} />

                            {/* Tombol tampilkan */}
                            {/* <Button type="submit" className="inline-flex items-center cursor-pointer gap-2" color="blue" onClick={() => { }}>
                                Tampilkan
                            </Button> */}

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
                    <TablesMatakuliah />
                </Card>
            </div>
        </main>
    )
}