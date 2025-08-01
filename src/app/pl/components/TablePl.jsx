import Swal from "sweetalert2";
import { IoPencil } from "react-icons/io5";
import { useEffect, useState } from "react";
import { Alert, Button, Label, Modal, ModalBody, ModalFooter, ModalHeader, Textarea, TextInput } from "flowbite-react";
import { getPlByProdiAndKurikulum } from "@/utils/fetchPl";
import { HiInformationCircle } from "react-icons/hi";
import ModalCreatePl from "./ModalCreatePl";
import ModalEditPl from "./ModalEditPl";

export default function TablePl({ prodiId, kurikulumId }) {
    const [data, setData] = useState([]);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [selectedPl, setSelectePl] = useState(null);

    const getData = async () => {
        try {
            const result = await getPlByProdiAndKurikulum(prodiId, kurikulumId);
            setData(result);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getData();
    }, [prodiId, kurikulumId]);

    const openEditModal = (pl) => {
        setSelectePl(pl);
        setIsEditOpen(true);
    };

    return (
        <div>
            <div className="flex justify-end mb-4">
                <ModalCreatePl kurikulumId={kurikulumId} prodiId={prodiId} onSuccess={getData} />  {/* onSuccess akan refetch data setelah submit */}
            </div>

            {data.length > 0 ? (
                <table className="table-auto w-full border border-gray-200 dark:border-gray-600">
                    <thead className="text-black dark:text-white bg-gray-200 dark:bg-gray-600">
                        <tr className="text-base">
                            <th className="px-5 py-3 w-15">Kode PL</th>
                            <th className="px-5 py-3 w-[500px]">Deskripsi PL</th>
                            <th className="px-5 py-3 w-40">Ubah/Hapus</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {
                            data.map((pl, index) => (
                                <tr className="border border-gray-200 dark:border-gray-600" key={index}>
                                    <td className="px-5 py-3 text-center">{pl.Kode}</td>
                                    <td className="px-5 py-3">{pl.Deskripsi}</td>
                                    <td className="px-5 py-3">
                                        {/* BUTTON EDIT */}
                                        <div className="flex justify-center items-center gap-1">
                                            <Button
                                                outline
                                                color={"green"}
                                                className="cursor-pointer"
                                                onClick={() => openEditModal(pl)}
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
                    Tidak ada data <strong>PL</strong> tersedia.
                </Alert>
                // <p className="text-center text-gray-500">Tidak ada data PL tersedia.</p>
            )}

            {selectedPl && (
                <ModalEditPl
                    isOpen={isEditOpen}
                    onClose={() => setIsEditOpen(false)}
                    plData={selectedPl}
                    onUpdated={getData}
                />
            )}

        </div>
    )
}