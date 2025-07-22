// app/cpl/client.jsx
"use client"

import { Button, Card, Dropdown, DropdownItem } from "flowbite-react"
import { TableCPL } from "../components/Tables"
import { useState } from "react";
import { kurikulum } from "../components/Data";
import { SearchCPL } from "../components/Search";
import { HiOutlinePlusSm } from "react-icons/hi";
import { TambahCPLModal } from "../components/Modals";

export default function CPLClientSide() {
    const [stateKurikulum, setStateKurikulum] = useState("-- Pilih Kurikulum --");
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

                            {/* Pilihan Kurikulum */}
                            <p className="font-semibold">Kurikulum</p>
                            <Dropdown color={"light"} className="w-100 justify-between" label={stateKurikulum} size="md">
                                {kurikulum.map((kurikulum, i_kurikulum) => (
                                    <DropdownItem key={i_kurikulum} onClick={() => setStateKurikulum(kurikulum)}>{kurikulum}</DropdownItem>
                                ))}
                            </Dropdown>

                            {/* Tombol tampilkan */}
                            <Button type="submit" className="inline-flex items-center cursor-pointer gap-2" color="blue" onClick={() => { }}>
                                Tampilkan
                            </Button>

                        </div>
                    </Card>
                </form>
                <Card>
                    <div className="flex justify-end">
                        <div className="flex w-[40%] gap-5">

                            {/* Form pencarian CPL */}
                            <SearchCPL />

                            {/* Tombol open modal tambah CPL */}
                            <Button type="submit" className="inline-flex items-center cursor-pointer gap-1" color="green" onClick={() => setOpenModal(true)}>
                                <HiOutlinePlusSm size={15} />Tambah
                            </Button>

                            {/* Modal/popup form tambal CPL */}
                            <TambahCPLModal
                                show={openModal}
                                onClose={onCloseModal}
                                onClick={onCloseModal}
                            />

                            {/* Kode tanpa component Modals */}
                            {/* <Modal className="p-9" show={openModal} size="2xl" onClose={onCloseModal} popup>
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
                            </Modal> */}
                        </div>
                    </div>

                    <TableCPL />

                </Card>
            </div>
        </main>
    )
}