import { Button } from "flowbite-react";
import { IoPencil, IoTrash } from "react-icons/io5";

function TableCpl() {
    const cpls = [
        {
            id: 1,
            kodecpl: "CPL-1",
            rumusancpl: "Kemampuan merancang dan membangun aplikasi dengan menerapkan prinsip-prinsip sistem cerdas dan ilmu komputasi untuk menghasilkan aplikasi pada berbagai bidang.",
        },
        {
            id: 2,
            kodecpl: "CPL-2",
            rumusancpl: "Kemampuan menerapkan konsep arsitektur jaringan dan prinsip komputasi berbagai jaringan yang mempunyai kinerja tinggi dan aman.",
        },
        {
            id: 3,
            kodecpl: "CPL-3",
            rumusancpl: "Kemampuan menganalisa, merancang dan membangun perangkat lunak yang berkualitas baik secara teknis dan manajerial dengan menggunakan prinsip-prinsip proses rekayasa perangkat lunak.",
        },
        {
            id: 4,
            kodecpl: "CPL-4",
            rumusancpl: "Kemampuan merancang, memodelkan, dan membangun aplikasi menggunakan prinsip-prinsip grafika komputer serta interaksi manusia dan komputer.",
        },
        {
            id: 5,
            kodecpl: "CPL-5",
            rumusancpl: "Kemampuan merancang, memodelkan, dan membangun aplikasi menggunakan prinsip-prinsip grafika komputer serta interaksi manusia dan komputer.",
        },
        {
            id: 6,
            kodecpl: "CPL-6",
            rumusancpl: "Kemampuan merancang, memodelkan, dan membangun aplikasi menggunakan prinsip-prinsip grafika komputer serta interaksi manusia dan komputer.",
        },
        {
            id: 7,
            kodecpl: "CPL-7",
            rumusancpl: "Kemampuan merancang, memodelkan, dan membangun aplikasi menggunakan prinsip-prinsip grafika komputer serta interaksi manusia dan komputer.",
        },
        {
            id: 8,
            kodecpl: "CPL-8",
            rumusancpl: `Kemampuan merancang, memodelkan, dan membangun aplikasi menggunakan prinsip-prinsip grafika komputer serta interaksi manusia dan komputer.
            Kemampuan merancang, memodelkan, dan membangun aplikasi menggunakan prinsip-prinsip grafika komputer serta interaksi manusia dan komputer.
            Kemampuan merancang, memodelkan, dan membangun aplikasi menggunakan prinsip-prinsip grafika komputer serta interaksi manusia dan komputer.`,
        },
    ];

    return (
        <div>
            <table className="table-auto w-full min-w-24 text-sm border border-gray-200 text-gray-500 dark:text-gray-300">
                <thead className="text-normal text-black bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr className="text-center">
                        <th className="px-6 py-3">Kode CPL</th>
                        <th className="px-6 py-3">Rumusan CPL</th>
                        <th className="px-6 py-3">Ubah/Hapus</th>
                    </tr>
                </thead>
                <tbody className="">
                    {
                        cpls.map((cpls) => {
                            return (
                                <tr className="border border-gray-200" key={cpls.id}>
                                    <td className="flex items-center justify-center px-6 py-3">{cpls.kodecpl}</td>
                                    <td className="px-6 py-3">{cpls.rumusancpl}</td>
                                    <td className="flex place-content-center gap-2 px-6 py-3">
                                        <Button color={"green"} outline>
                                            <IoPencil size={15}/>
                                        </Button>
                                        <Button color={"red"} outline>
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
    
    const matakuliah = [
        {
            id: 1,
            kode_matakuliah: "IF200001",
            nama_matakuliah: "Matematika Diskrit",
            sks: 3,
            koordinator_matakuliah: "Budi A"
        },
        {
            id: 2,
            kode_matakuliah: "IF200002",
            nama_matakuliah: "Kalkulus 1A",
            sks: 3,
            koordinator_matakuliah: "Budi B"
        },
        {
            id: 3,
            kode_matakuliah: "IF200003",
            nama_matakuliah: "Statistika",
            sks: 2,
            koordinator_matakuliah: "Budi C"
        },
        {
            id: 4,
            kode_matakuliah: "IF200004",
            nama_matakuliah: "Dasar Pemrograman",
            sks: 3,
            koordinator_matakuliah: "Budi D"
        },
        {
            id: 5,
            kode_matakuliah: "IF200005",
            nama_matakuliah: "Pemrograman Berorientasi Objek",
            sks: 3,
            koordinator_matakuliah: "Budi E"
        },
        {
            id: 6,
            kode_matakuliah: "IF200006",
            nama_matakuliah: "Praktikum Pemrograman Berorientasi Objek",
            sks: 1,
            koordinator_matakuliah: "Budi F"
        },
    ]

    return (
        <div>
            <table className="table-auto w-full min-w-24 text-sm border border-gray-200 text-gray-500 dark:text-gray-300">
                <thead className="text-normal text-black bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr className="text-center">
                        <th className="px-6 py-5">Kode Mata Kuliah</th>
                        <th className="px-6 py-5">Nama Mata Kuliah</th>
                        <th className="px-6 py-5">sks</th>
                        <th className="px-6 py-5">Koordinator Mata Kuliah</th>
                    </tr>
                </thead>
                <tbody className="">
                    {
                        matakuliah.map((data) => {
                            return (
                                <tr className="border border-gray-200" key={data.id}>
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