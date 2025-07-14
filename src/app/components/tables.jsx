import { Button } from "flowbite-react";
import { IoPencil, IoTrash } from "react-icons/io5";
import { listCpl, listMatakuliah } from "./data";

function TableCpl() {
    return (
        <div>
            <table className="table-auto w-full min-w-24 text-sm border border-gray-300 text-gray-600 dark:text-white">
                <thead className="text-base text-black bg-gray-100 dark:bg-gray-700 dark:text-white">
                    <tr className="text-center">
                        <th className="px-6 py-3">Kode CPL</th>
                        <th className="px-6 py-3">Rumusan CPL</th>
                        <th className="px-6 py-3">Ubah/Hapus</th>
                    </tr>
                </thead>
                <tbody className="">
                    {
                        listCpl.map((data) => {
                            return (
                                <tr className="border border-gray-300" key={data.id}>
                                    <td className="flex items-center justify-center px-6 py-3">{data.kodecpl}</td>
                                    <td className="px-6 py-3">{data.rumusancpl}</td>
                                    <td className="flex place-content-center gap-2 px-6 py-3">
                                        <Button className="cursor-pointer" color={"green"} outline>
                                            <IoPencil size={15}/>
                                        </Button>
                                        <Button className="cursor-pointer" color={"red"} outline>
                                            <IoTrash />
                                        </Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

function TableMatakuliah() {
    return (
        <div>
            <table className="table-auto w-full min-w-24 text-sm border border-gray-300 text-gray-600 dark:text-white">
                <thead className="text-base text-black bg-gray-100 dark:bg-gray-700 dark:text-white">
                    <tr className="">
                        <th className="px-6 py-5">Kode Mata Kuliah</th>
                        <th className="px-6 py-5">Nama Mata Kuliah</th>
                        <th className="px-6 py-5">sks</th>
                        <th className="px-6 py-5">Koordinator Mata Kuliah</th>
                    </tr>
                </thead>
                <tbody className="">
                    {
                        listMatakuliah.map((data) => {
                            return (
                                <tr className="border border-gray-300" key={data.id}>
                                    <td className="flex px-6 py-5 items-center justify-center">{data.kode_matakuliah}</td>
                                    <td className="px-6 py-5">{data.nama_matakuliah}</td>
                                    <td className="px-6 py-5 text-center">{data.sks}</td>
                                    <td className="px-6 py-5 text-center">{data.koordinator_matakuliah}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export { TableCpl, TableMatakuliah };