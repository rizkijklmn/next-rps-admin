// app/cpl/client.jsx
"use client"

import { Button, Card, Dropdown, DropdownItem } from "flowbite-react"
import { useEffect, useState } from "react";
import { HiOutlinePlusSm } from "react-icons/hi";

// Components
import { TableCPL } from "../components/Tables"
import { SearchCPL } from "../components/Search";
import { TambahCPLModal } from "../components/Modals";
import { fetchKurikulum } from "@/utils/fetchKurikulum";
import DropdownKurikulum from "../components/DropdownKurikulum";

export default function CPLClientSide() {

    // Fetch data kurikulum dari API
    // const url = 'http://192.168.54.59:3002/dbuai/kurikulum';
    // const [kurikulum, setKurikulum] = useState([]);
    // const getDataKurikulum = async () => {
    //     const response = await fetch(url);
    //     const dataKurikulum = await response.json();
    //     setKurikulum(dataKurikulum);
    // }

    // useEffect(() => {
    //     fetchKurikulum();
    // }, []);

    const [kurikulumId, setKurikulumId] = useState(null);
    const prodiId = 2; // Contoh ID Prodi sudah di set 2

    // Set state dari pilihan kurikulum dan modal
    // const [stateKurikulum, setStateKurikulum] = useState("-- Pilih Kurikulum --");
    const [openModal, setOpenModal] = useState(false);
    function onCloseModal() {
        setOpenModal(false);
    }

    return (
        <main>
            <div className="mx-10 my-3">
                <p className="text-xl font-bold tracking-normal text-gray-900 dark:text-white">
                    Halaman Daftar Capaian Pembelajaran Lulusan Program Studi
                </p>
                <form className="flex my-7 justify-center">
                    <Card className="flex items-center w-auto bg-gray-50">
                        <div className="flex items-center gap-5">

                            {/* Pilihan Kurikulum */}
                            <p className="font-semibold">Kurikulum</p>
                            <DropdownKurikulum onSelect={setKurikulumId} />

                            {/* <Dropdown color={"light"} className="w-100 justify-between" label={stateKurikulum} size="md">
                                {kurikulum.map((item) => (
                                    <DropdownItem
                                        key={item.ID}
                                        onClick={() => setStateKurikulum(item.TahunKurikulum)}
                                    >
                                        {item.TahunKurikulum}
                                    </DropdownItem>
                                ))}
                            </Dropdown> */}

                            {/* {kurikulumId && (
                                <TableCPL prodiId={prodiId} kurikulumId={kurikulumId} />
                            )} */}

                            {/* Tombol tampilkan */}
                            {/* <Button type="submit" className="inline-flex items-center cursor-pointer gap-2" color="blue" onClick={() => { }}>
                                Tampilkan
                            </Button> */}

                        </div>
                    </Card>
                </form>
                <Card>
                    <div className="flex justify-end">
                        <div className="flex w-[40%] gap-5">

                            {/* Form pencarian CPL */}
                            <SearchCPL />

                            {/* Tombol open modal tambah CPL */}
                            <Button
                                type="submit"
                                color="green"
                                className="inline-flex items-center cursor-pointer gap-1"
                                onClick={() => setOpenModal(true)}
                            >
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

                    <div>
                        {
                            kurikulumId && (
                                <TableCPL prodiId={prodiId} kurikulumId={kurikulumId} />
                            )
                        }
                    </div>
                </Card>
            </div>
        </main>
    )
}