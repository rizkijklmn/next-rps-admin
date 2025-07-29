// app/cpl/client.jsx
"use client"

import { useState } from "react";
import { Alert, Button, Card } from "flowbite-react"

import { HiInformationCircle } from "react-icons/hi";

// COMPONENT
import { ModalCreateCpl, TableCpl } from "./components/";
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
    // const router = useRouter();

    // Set state dari pilihan kurikulum dan modal
    // const [stateKurikulum, setStateKurikulum] = useState("-- Pilih Kurikulum --");
    // const [openModal, setOpenModal] = useState(false);
    // function onCloseModal() {
    //     setOpenModal(false);
    // }

    // const handleCreateCplClick = () => {
    //     router.push('/cpl/createcpl');
    // };

    return (
        <main>
            <div className="mx-10 my-3">
                <p className="text-xl font-bold tracking-normal text-gray-900 dark:text-white">
                    Halaman Daftar Capaian Pembelajaran Lulusan &#40;CPL&#41; Program Studi
                </p>
                <div className="flex my-7 justify-center">
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
                </div>
                <Card>
                    {kurikulumId ? (
                        <>
                            {/* <div className="flex justify-end">
                                <ModalCreateCpl
                                    prodiId={prodiId}
                                    kurikulumId={kurikulumId}
                                />
                            </div> */}
                            <TableCpl prodiId={prodiId} kurikulumId={kurikulumId} />
                        </>
                    ) : (
                        <Alert withBorderAccent className="items-center tracking-wide" icon={HiInformationCircle}>
                            Silakan pilih kurikulum terlebih dahulu
                        </Alert>
                    )}
                </Card>
            </div>
        </main>
    )
}