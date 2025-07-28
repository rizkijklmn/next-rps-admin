import Swal from "sweetalert2";
import { IoPencil } from "react-icons/io5";
import { useEffect, useState } from "react";
import { Button, Label, Modal, ModalBody, ModalFooter, ModalHeader, Textarea, TextInput } from "flowbite-react";
import { fetchPlData } from "@/utils/fetchPl";

export default function TablePl({ prodiId, kurikulumId }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await fetchPlData(prodiId, kurikulumId);
                setData(result);
            } catch (error) {
                console.error(error);
            }
        };
        getData();
    }, [prodiId, kurikulumId]);

    const [selectedPl, setSelectedPl] = useState(null);
    const [editKodePl, setEditKodePl] = useState('');
    const [editDeskripsiPl, setEditDeskripsiPl] = useState('');

    const openEditModal = (pl) => {
        setSelectedPl(pl);
        setEditKodePl(pl.kodepl);
        setEditDeskripsiPl(pl.deskripsipl);
    };

    const closeEditModal = () => {
        setSelectedPl(null);
    }

    const handleSave = () => {
        setDataPl(dataPl.map(pl =>
            pl.id === selectedPl.id
                ? { ...pl, kodepl: editKodePl, deskripsipl: editDeskripsiPl }
                : cpl
        ));
        closeEditModal();

        Swal.fire({
            title: 'Berhasil!',
            text: 'Data PL telah diperbarui.',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500
        });
    }

    return (
        <div>
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
                                <td className="flex justify-center gap-1 px-5 py-3">
                                    <Button className="cursor-pointer" outline color={"green"} onClick={() => openEditModal(pl)}><IoPencil size={15} /></Button>
                                    {/* <Button className="cursor-pointer" color={"red"} outline><IoTrash /></Button> */}
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>

            {/* Modal */}
            {selectedPl && (
                <Modal popup className="p-9" size="2xl" show={openEditModal} onClose={closeEditModal} >
                    <ModalHeader className="p-6">Ubah Data PL</ModalHeader>
                    <ModalBody>
                        <div className="space-y-6">
                            <div>
                                <div className="mb-2 block">
                                    <Label className="text-base font-bold">Kode PL</Label>
                                </div>
                                <TextInput value={editKodePl} disabled />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label className="text-base font-bold">Deskripsi PL</Label>
                                </div>
                                <Textarea
                                    rows={4}
                                    value={editDeskripsiPl}
                                    onChange={(e) => setEditDeskripsiPl(e.target.value)}
                                    required />
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter className="flex gap-2 justify-end">
                        <Button type="submit" className="cursor-pointer" color={"green"} onClick={handleSave}>Simpan</Button>
                        <Button type="submit" className="cursor-pointer" outline color={"red"} onClick={closeEditModal}>Batal</Button>
                    </ModalFooter>
                </Modal>
            )}
        </div>
    )
}