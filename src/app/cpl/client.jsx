// app/cpl/client.jsx
"use client"

import { Card, Checkbox, Dropdown, DropdownItem, HR, Label, Textarea, TextInput } from "flowbite-react"
import { AddButton, ShowButton } from "../components/buttons"
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { TableCpl } from "../components/tables"
import { useState } from "react";
import { kurikulum, prodi } from "../components/data";
import Search from "../components/search";
import { IoSearch } from "react-icons/io5";
import { HiOutlinePlusSm, HiUserAdd } from "react-icons/hi";

export default function CplClientSide() {

    const [stateKurikulum, setStateKurikulum] = useState("-- Pilih Kurikulum --");
    // const [stateProdi, setStateProdi] = useState("-- Pilih Program Studi --");

    const [openModal, setOpenModal] = useState(false);

    function onCloseModal() {
        setOpenModal(false);
    }

    return (
        <main>
            <div className="mx-10 my-3">
                <p className="text-xl font-bold tracking-normal text-gray-900 dark:text-white">
                    Daftar Capaian Pembelajaran Lulusan Program Studi
                </p>
                <form className="flex my-7 justify-center">
                    <Card className="flex items-center w-auto bg-gray-50">
                        <div className="flex items-center gap-5">

                            {/* Menu Pilihan Kurikulum */}
                            <p className="font-bold">Kurikulum</p>
                            <Dropdown color={"light"} className="w-100 justify-between" label={stateKurikulum} size="lg">
                                {kurikulum.map((kurikulum, i_kurikulum) => (
                                    <DropdownItem key={i_kurikulum} onClick={() => setStateKurikulum(kurikulum)}>{kurikulum}</DropdownItem>
                                ))}
                            </Dropdown>

                            {/* Vertical divider */}
                            {/* <div
                                className="h-full w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400">
                            </div> */}

                            {/* Menu Pilihan Program Studi */}
                            {/* <p className="font-bold">Program Studi</p>
                            <Dropdown color={"light"} className="w-100 text-left justify-between" label={stateProdi} size="lg">
                                {prodi.map((prodi, i_prodi) => (
                                    <DropdownItem className="text-left" key={i_prodi} onClick={() => setStateProdi(prodi)}>{prodi}</DropdownItem>
                                ))}
                            </Dropdown> */}
                            <ShowButton />
                            {/* <Button size="lg" color={"green"}>Tampilkan</Button> */}
                        </div>
                    </Card>
                </form>
                <Card>
                    <div className="flex justify-end">
                        <div className="flex w-1/2 gap-5">

                            <Search />

                            <Button className="cursor-pointer flex items-center gap-1" onClick={() => setOpenModal(true)}>
                                <HiOutlinePlusSm />
                                Tambah
                            </Button>

                            <Modal className="p-9" show={openModal} size="2xl" onClose={onCloseModal} popup>
                                <ModalHeader className="p-6">Tambah Data CPL</ModalHeader>
                                <ModalBody>
                                    <div className="space-y-6">                                        <div>
                                        <div className="mb-2 block">
                                            <Label className="text-base" htmlFor="kode_cpl">Kode CPL</Label>
                                        </div>
                                        <TextInput
                                            id="kode_cpl"
                                            placeholder="CPL-1...n"
                                            required
                                        />
                                    </div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label className="text-base" htmlFor="rumusan_cpl">Rumusan CPL</Label>
                                            </div>
                                            <TextInput id="rumusan_cpl" type="rumusan_cpl" placeholder="Isi rumusan..." required />
                                        </div>

                                    </div>
                                </ModalBody>
                                <ModalFooter className="flex gap-2 justify-end">
                                    <Button className="cursor-pointer" color={"green"} onClick={onCloseModal}>Simpan</Button>
                                    <Button className="cursor-pointer" outline color={"red"} onClick={onCloseModal}>Batal</Button>
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