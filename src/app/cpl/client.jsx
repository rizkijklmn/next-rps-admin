// app/dashboard/client.jsx
"use client"

// LIBRARY
import { Button, Card, Dropdown, DropdownItem, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react"
import { useState } from "react";

// COMPONENTS
import Search from "../components/search"
import { TableCpl } from "../components/tables"
import { TampilkanButton } from "../components/buttons"
import CplTambah from "./cpl_tambah"

// ICON
import { IoAddSharp } from "react-icons/io5"


export default function CplClientSide() {
    const [openModal, setOpenModal] = useState(false);
    const kurikulum = ["2009", "2014", "2019", "2024"];
    const prodi = ["S-1 Informatika", "S-1 Bioteknologi", "S-1 Teknik Elektro", "S-1 Teknik Industri"];
    const [stateKurikulum, setStateKurikulum] = useState("Tahun");
    const [stateProdi, setStateProdi] = useState("Program Studi");

    return (
        <main>
            <div className="mx-10 my-3">
                <p className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Daftar CPL Program Studi
                </p>
                <form className="flex my-7 justify-center">
                    <Card className="flex items-center w-auto bg-gray-50">
                        <div className="flex items-center gap-5">
                            <p className="font-bold">Kurikulum</p>
                            <Dropdown color={"light"} className="w-130 justify-between" label={stateKurikulum} size="lg">
                                {kurikulum.map((kurikulum, i_kurikulum) => (
                                    <DropdownItem key={i_kurikulum} onClick={() => setStateKurikulum(kurikulum)}>{kurikulum}</DropdownItem>
                                ))}
                            </Dropdown>
                            <p className="font-bold">Program Studi</p>
                            <Dropdown color={"light"} className="w-130 justify-between" label={stateProdi} size="lg">
                                {prodi.map((prodi, i_prodi) => (
                                    <DropdownItem key={i_prodi} onClick={() => setStateProdi(prodi)}>{prodi}</DropdownItem>
                                ))}
                            </Dropdown>
                            <TampilkanButton />
                            {/* <Button size="lg" color={"green"}>Tampilkan</Button> */}
                        </div>
                    </Card>
                </form>
                <Card>
                    <div className="flex justify-end">
                        <div className="flex w-1/2 gap-2">
                            <Search />
                            <Button className="cursor-pointer gap-1" type="button" onClick={() => setOpenModal(true)}>
                                <IoAddSharp size={15} />
                                Tambah
                            </Button>
                            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                                <ModalHeader>Tambah Data CPL</ModalHeader>
                                <ModalBody>
                                    <CplTambah />
                                </ModalBody>
                                <ModalFooter>
                                    <div className="flex w-full justify-end gap-4">
                                        <Button className="cursor-pointer" onClick={() => setOpenModal(false)}>Simpan</Button>
                                        <Button outline className="cursor-pointer" color="red" onClick={() => setOpenModal(false)}>Batal</Button>
                                    </div>
                                </ModalFooter>
                            </Modal>
                        </div>
                    </div>

                    <TableCpl />
                </Card>

            </div>
        </main>
    )
}