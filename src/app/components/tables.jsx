import { Button } from "flowbite-react";
import { IoPencil, IoTrash } from "react-icons/io5";
import { listCpl, listMatakuliah } from "./Data";

function TableCpl() {
    return (
        <div>
            <table className="table-auto w-full border border-gray-200 dark:border-gray-600 ">
                <thead className="text-black dark:text-white bg-gray-200 dark:bg-gray-600 ">
                    <tr className="text-base">
                        <th className="px-5 py-3">Kode CPL</th>
                        <th className="px-5 py-3">Rumusan CPL</th>
                        <th className="px-5 py-3">Ubah/Hapus</th>
                    </tr>
                </thead>
                <tbody className="text-sm">
                    {
                        listCpl.map((item) => {
                            return (
                                <tr className="border border-gray-200 dark:border-gray-600" key={item.id}>
                                    <td className="px-5 py-3 text-center">{item.kodecpl}</td>
                                    <td className="px-5 py-3">{item.rumusancpl}</td>
                                    <td className="flex gap-1 px-5 py-3">
                                        <Button className="cursor-pointer" color={"green"} outline><IoPencil size={15} /></Button>
                                        <Button className="cursor-pointer" color={"red"} outline><IoTrash /></Button>
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
            <table className="table-fixed w-full min-w-24 text-sm border border-gray-300 text-gray-600 dark:text-white">
                <thead className="text-base text-black bg-gray-100 dark:bg-gray-700 dark:text-white">
                    <tr style={{ width: "100%" }}>
                        <th className="w-1/2 px-6 py-5">Kode Mata Kuliah</th>
                        <th className="w-1/4 px-6 py-5">Nama Mata Kuliah</th>
                        <th className="w-1/4 px-6 py-5">sks</th>
                    </tr>
                </thead>
                <tbody className="">
                    {
                        listMatakuliah.map((item) => {
                            return (
                                <tr className="border border-gray-300" key={item.id}>
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

export { TableCpl, TableMatakuliah };