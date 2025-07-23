import { Button, Label, Modal, ModalBody, ModalFooter, ModalHeader, Textarea, TextInput } from "flowbite-react"
import { useState } from "react";
import { listCPL } from "./Data";
import Swal from "sweetalert2";

function TambahCPLModal({ show, onClose, onClick }) {

    const [dataCPL, setDataCPL] = useState(listCPL);
    const [addKodeCPL, setAddKodeCPL] = useState('');
    const [addRumusanCPL, setAddRumusanCPL] = useState('');

    const handleAddCPL = () => {
        if (addKodeCPL.trim() !== '' && addRumusanCPL.trim() !== '') {
            const newDataCPL = {
                id: dataCPL.length + 1,
                addKodeCPL,
                addRumusanCPL
            };
            setDataCPL([...dataCPL, newDataCPL]);
            setAddKodeCPL('');
            setAddRumusanCPL('');
            onClose();

            Swal.fire({
                icon: 'success',
                title: 'Berhasil!',
                text: 'Data CPL berhasil ditambahkan.',
                timer: 1500,
                showConfirmButton: false
            });
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'Oops!',
                text: 'Kode dan Rumusan CPL harus diisi.',
            });
        }
    }

    return (
        <>
            <Modal className="p-9" show={show} size="2xl" onClose={onClose} popup>
                <ModalHeader className="p-6">Tambah Data CPL</ModalHeader>
                <ModalBody>
                    <div className="space-y-6">
                        <div>
                            <div className="mb-2 block">
                                <Label className="text-base font-bold">Kode CPL</Label>
                            </div>
                            <TextInput
                                id="kodecpl_input"
                                placeholder="Tulis CPL-1...n"
                                value={addKodeCPL}
                                onChange={(e) => setAddKodeCPL(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label className="text-base font-bold">Rumusan CPL</Label>
                            </div>
                            <Textarea
                                rows={4}
                                id="rumusancpl_input"
                                placeholder="Tulis rumusan..."
                                value={addRumusanCPL}
                                onChange={(e) => setAddRumusanCPL(e.target.value)}
                                required />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter className="flex gap-2 justify-end">
                    <Button type="submit" className="cursor-pointer" color={"green"} onClick={handleAddCPL}>Simpan</Button>
                    <Button type="submit" className="cursor-pointer" outline color={"red"} onClick={onClick}>Batal</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export { TambahCPLModal }