import { Button, Label, Modal, ModalBody, ModalFooter, ModalHeader, Textarea, TextInput } from "flowbite-react";
import { IoPencil, IoTrash } from "react-icons/io5";
import { listCPL, listMatakuliah } from "./Data";
import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";

function TableCPL() {

    const [dataCPL, setDataCPL] = useState(listCPL);

    const [selectedCPL, setSelectedCPL] = useState(null);
    const [editKodeCPL, setEditKodeCPL] = useState('');
    const [editRumusanCPL, setEditRumusanCPL] = useState('');

    const openEditModal = (cpl) => {
        setSelectedCPL(cpl);
        setEditKodeCPL(cpl.kodecpl);
        setEditRumusanCPL(cpl.rumusancpl);
    };

    const closeEditModal = () => {
        setSelectedCPL(null);
    }

    const handleSave = () => {
        setDataCPL(dataCPL.map(cpl =>
            cpl.id === selectedCPL.id
                ? { ...cpl, kodecpl: editKodeCPL, rumusancpl: editRumusanCPL }
                : cpl
        ));
        closeEditModal();

        Swal.fire({
            title: 'Berhasil!',
            text: 'Data CPL telah diperbarui.',
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
                        <th className="px-5 py-3">Kode CPL</th>
                        <th className="px-5 py-3">Rumusan CPL</th>
                        <th className="px-5 py-3">Ubah/Hapus</th>
                    </tr>
                </thead>
                <tbody className="text-sm">
                    {
                        dataCPL.map(cpl => (
                            <tr className="border border-gray-200 dark:border-gray-600" key={cpl.id}>
                                <td className="px-5 py-3 text-center">{cpl.kodecpl}</td>
                                <td className="px-5 py-3">{cpl.rumusancpl}</td>
                                <td className="flex justify-center gap-1 px-5 py-3">
                                    <Button className="cursor-pointer" outline color={"green"} onClick={() => openEditModal(cpl)}><IoPencil size={15} /></Button>
                                    {/* <Button className="cursor-pointer" color={"red"} outline><IoTrash /></Button> */}
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>

            {/* Modal */}
            {selectedCPL && (
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
            )}
        </div>
    )
}

function TableMatakuliah() {
    return (
        <div>
            <table className="table-auto w-full border border-gray-200 dark:border-gray-600">
                <thead className="text-black dark:text-white bg-gray-200 dark:bg-gray-600">
                    <tr>
                        <th className="px-6 py-5">Kode Mata Kuliah</th>
                        <th className="px-6 py-5">Nama Mata Kuliah</th>
                        <th className="px-6 py-5">sks</th>
                        <th className="px-6 py-5">Pengembang RPS</th>
                        <th className="px-6 py-5">Dosen RMK</th>
                        <th className="px-6 py-5">Kaprodi</th>
                        <th className="px-6 py-5">Pengampu MK</th>

                    </tr>
                </thead>
                <tbody className="">
                    {
                        listMatakuliah.map((item) => {
                            return (
                                <tr className="border border-gray-200 dark:border-gray-600" key={item.id}>
                                    <td className="flex px-6 py-5 items-center justify-center">{item.kode_matakuliah}</td>
                                    <td className="px-6 py-5 font-bold"><a href="/cpl" className="font-sans text-blue-700 dark:text-blue-500 hover:text-blue-500 hover:underline" target="_self">{item.nama_matakuliah}</a></td>
                                    <td className="px-6 py-5 text-center">{item.sks}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export { TableCPL, TableMatakuliah };