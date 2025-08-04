import Swal from "sweetalert2";
import { IoPencil, IoTrash } from "react-icons/io5";
import { useEffect, useState } from "react";
import { Alert, Button, Label, Modal, ModalBody, ModalFooter, ModalHeader, Textarea, TextInput } from "flowbite-react";
import { getCplByProdiAndKurikulum } from "@/utils/fetchCpl";
import { HiInformationCircle } from "react-icons/hi";
import ModalCreateCpl from "./ModalCreateCpl";
import ModalEditCpl from "./ModalEditCpl";

export default function TableCpl({ prodiId, kurikulumId }) {
    const [data, setData] = useState([]);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [selectedCpl, setSelecteCpl] = useState(null);

    const getData = async () => {
        try {
            const result = await getCplByProdiAndKurikulum(prodiId, kurikulumId);
            setData(result);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getData();
    }, [prodiId, kurikulumId]);

    const openEditModal = (cpl) => {
        setSelecteCpl(cpl);
        setIsEditOpen(true);
    };

    // const [selectedCPL, setSelectedCPL] = useState(null);
    // const [editKodeCPL, setEditKodeCPL] = useState('');
    // const [editRumusanCPL, setEditRumusanCPL] = useState('');

    // const openEditModal = (cpl) => {
    //     setSelectedCPL(cpl);
    //     setEditKodeCPL(cpl.kodecpl);
    //     setEditRumusanCPL(cpl.rumusancpl);
    // };

    // const closeEditModal = () => {
    //     setSelectedCPL(null);
    // }

    // const handleSave = () => {
    //     setDataCPL(dataCPL.map(cpl =>
    //         cpl.id === selectedCPL.id
    //             ? { ...cpl, kodecpl: editKodeCPL, rumusancpl: editRumusanCPL }
    //             : cpl
    //     ));
    //     closeEditModal();

    //     Swal.fire({
    //         title: 'Berhasil!',
    //         text: 'Data CPL telah diperbarui.',
    //         icon: 'success',
    //         showConfirmButton: false,
    //         timer: 1500
    //     });
    // }

    return (
        <div>
            <div className="flex justify-end mb-4">
                <ModalCreateCpl kurikulumId={kurikulumId} prodiId={prodiId} onSuccess={getData} />  {/* ini akan refetch data setelah submit */}
            </div>

            {data.length > 0 ? (
                <table className="table-auto w-full border border-gray-200 dark:border-gray-600">
                    <thead className="text-black dark:text-white bg-gray-200 dark:bg-gray-600">
                        <tr className="text-base">
                            <th className="px-5 py-3 w-[120px]">Kode</th>
                            <th className="px-5 py-3">Deskripsi</th>
                            <th className="px-5 py-3 w-[120px]">Detail</th>
                            <th className="px-5 py-3 w-[100px]">Ubah/Hapus</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {data.map((cpl, index) => (
                            <tr className="border border-gray-200 dark:border-gray-600" key={index}>
                                <td className="px-5 py-3 text-center">{cpl.KodeCpl}</td>
                                <td className="px-5 py-3">{cpl.DeskripsiCpl}</td>
                                <td className="px-5 py-3 text-center">
                                    {/* <Link href={`/cp-lulusan/${cpl.ID}`} target="_blank" className="text-blue-500 underline text-sm" >
                                        Lihat detail
                                    </Link> */}
                                    <span
                                        onClick={() => window.open(`/cpl/detailcpl/${cpl.ID}`, '_blank', 'noopener,noreferrer')}
                                        className="cursor-pointer text-blue-700 hover:text-blue-500 underline"
                                    >
                                        Relasi ke PL
                                    </span>
                                </td>
                                <td className="px-5 py-3">
                                    {/* BUTTON EDIT */}
                                    <div className="flex justify-center items-center gap-1">
                                        <Button
                                            outline
                                            color={"green"}
                                            className="cursor-pointer"
                                            onClick={() => openEditModal(cpl)}
                                        >
                                            <IoPencil size={15} />
                                        </Button>
                                    </div>
                                    {/* BUTTON HAPUS */}
                                    {/* <Button className="cursor-pointer" outline color={"red"}>
                                        <IoTrash />
                                    </Button> */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <Alert withBorderAccent className="items-center tracking-wide" icon={HiInformationCircle}>
                    Tidak ada data <strong>CPL</strong> tersedia.
                </Alert>
            )}

            {selectedCpl && (
                <ModalEditCpl
                    isOpen={isEditOpen}
                    onClose={() => setIsEditOpen(false)}
                    cplData={selectedCpl}
                    onUpdated={getData}
                />
            )}
        </div>
    )
}