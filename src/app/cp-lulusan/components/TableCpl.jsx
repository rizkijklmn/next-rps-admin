import Swal from "sweetalert2";
import { IoPencil, IoTrash } from "react-icons/io5";
import { useEffect, useState } from "react";
import { fetchCplData } from "@/utils/fetchCpl";
import { Button, Label, Modal, ModalBody, ModalFooter, ModalHeader, Textarea, TextInput } from "flowbite-react";
import ModalCreateCpl from "./ModalCreateCpl";

export default function TableCpl({ prodiId, kurikulumId }) {
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const result = await fetchCplData(prodiId, kurikulumId);
            setData(result);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getData();
    }, [prodiId, kurikulumId]);

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

            <table className="table-auto w-full border border-gray-200 dark:border-gray-600">
                <thead className="text-black dark:text-white bg-gray-200 dark:bg-gray-600">
                    <tr className="text-base">
                        <th className="px-5 py-3 w-15">Kode CPL</th>
                        <th className="px-5 py-3 w-[500px]">Deskripsi CPL</th>
                        <th className="px-5 py-3 w-40">Ubah/Hapus</th>
                    </tr>
                </thead>
                <tbody className="text-sm">
                    {
                        data.map((cpl, index) => (
                            <tr className="border border-gray-200 dark:border-gray-600" key={index}>
                                <td className="px-5 py-3 text-center">{cpl.KodeCpl}</td>
                                <td className="px-5 py-3">{cpl.DeskripsiCpl}</td>
                                <td className="flex justify-center gap-1 px-5 py-3">
                                    {/* BUTTON EDIT */}
                                    <Button className="cursor-pointer" outline color={"green"} /* onClick={() => openEditModal(cpl)} */>
                                        <IoPencil size={15} />
                                    </Button>

                                    {/* BUTTON HAPUS */}
                                    <Button className="cursor-pointer" outline color={"red"}>
                                        <IoTrash />
                                    </Button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>

            {/* Modal */}
            {/* {selectedCPL && (
                <Modal popup className="p-9" size="2xl" show={openEditModal} onClose={closeEditModal} >
                    <ModalHeader className="p-6">Ubah Data CPL</ModalHeader>
                    <ModalBody>
                        <div className="space-y-6">
                            <div>
                                <div className="mb-2 block">
                                    <Label className="text-base font-bold">Kode CPL</Label>
                                </div>
                                <TextInput value={editKodeCPL} disabled />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label className="text-base font-bold">Rumusan CPL</Label>
                                </div>
                                <Textarea
                                    rows={4}
                                    value={editRumusanCPL}
                                    onChange={(e) => setEditRumusanCPL(e.target.value)}
                                    required />
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter className="flex gap-2 justify-end">
                        <Button type="submit" className="cursor-pointer" color={"green"} onClick={handleSave}>Simpan</Button>
                        <Button type="submit" className="cursor-pointer" outline color={"red"} onClick={closeEditModal}>Batal</Button>
                    </ModalFooter>
                </Modal>
            )} */}
        </div>
    )
}