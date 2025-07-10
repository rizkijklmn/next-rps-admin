import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react"
import { collectSegmentData } from "next/dist/server/app-render/collect-segment-data";
import { useState } from "react"
import { IoAddSharp } from "react-icons/io5";

export default function CplTambah() {

    const [openModal, setOpenModal] = useState(false);

    const [formData, setFormData] = useState({
        kodecpl: "",
        rumusancpl: "",
    })

    function handleChange(e) {
        let data = { ...formData }
        data[e.target.id] = e.target.value
        setFormData(data)
    }

    function handleSumbit(e) {
        e.preventDefault()
        console.log("berhasil submit")
    }

    return (
        <div>
            <Button className="cursor-pointer gap-1" type="button" onClick={() => setOpenModal(true)}>
                <IoAddSharp size={15} />
                Tambah
            </Button>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <ModalHeader><div className="font-bold">Tambah Data CPL</div></ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSumbit} action="">
                        <div className="mb-5">
                            <label
                                htmlFor="kodecpl"
                                className="block text-medium mb-1 font-bold text-gray-900 dark:text-white"
                            >
                                Kode CPL
                            </label>
                            <input
                                type="text"
                                name="kodecpl"
                                id="kodecpl"
                                value={formData.kodecpl}
                                onChange={handleChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm  focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 uppercase"
                                placeholder="CPL-01 ... n" />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="rumusancpl"
                                className="block text-medium mb-1 font-bold text-gray-900 dark:text-white"
                            >
                                Rumusan CPL
                            </label>
                            <textarea
                                name="rumusancpl"
                                id="rumusancpl"
                                value={formData.rumusancpl}
                                onChange={handleChange}
                                rows="10"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Masukkan rumusan CPL.." />
                            {/* <input
                        type="textarea"
                        name="rumusancpl"
                        id="rumusancpl"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Masukkan rumusan CPL.." /> */}
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <div className="flex w-full justify-end gap-4">
                        <button
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            onClick={() => setOpenModal(false)}>
                            Simpan
                        </button>
                        <button
                            type="submit"
                            onClick={() => setOpenModal(false)}>
                            Batal
                        </button>
                    </div>
                </ModalFooter>
            </Modal>
        </div>
    )
}