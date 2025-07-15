// app/cpl/client.jsx
"use client"

import { Card, Checkbox, Dropdown, DropdownItem, HR, Label, Textarea, TextInput } from "flowbite-react"
import { ButtonAdd, ButtonCustom, ButtonShow } from "../components/Button"
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { TableCpl } from "../components/Tables"
import { useState } from "react";
import { kurikulum } from "../components/Data";
import { SearchCPL } from "../components/Search";
import { IoSearch } from "react-icons/io5";
import { HiOutlinePlusSm, HiUserAdd } from "react-icons/hi";




export default function CplClientSide() {

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
                        <div className="flex w-[40%] gap-5">

                            {/* Form pencarian CPL */}
                            <SearchCPL />

                            {/* Tombol modal tambah CPL */}
                            <ButtonCustom
                                type={"button"}
                                className={"cursor-pointer flex items-center gap-1"}
                                btnColor={"blue"}
                                onClick={() => setOpenModal(true)}
                                icon={<HiOutlinePlusSm />}
                                text={"Tambah"}
                            />

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