import { Button, Label, Modal, ModalBody, ModalFooter, ModalHeader, TextInput } from "flowbite-react"

function TambahCPLModal({ show, onClose, onClick }) {
    return (
        <>
            <Modal className="p-9" show={show} size="2xl" onClose={onClose} popup>
                <ModalHeader className="p-6">Tambah Data CPL</ModalHeader>
                <ModalBody>
                    <div className="space-y-6">
                        <div>
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
                    <Button className="cursor-pointer" color={"green"} onClick={onClick}>Simpan</Button>
                    <Button className="cursor-pointer" outline color={"red"} onClick={onClick}>Batal</Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export { TambahCPLModal }