import { Button } from "flowbite-react";
import { useState } from "react";

function TableCpl() {
    const [cpls, setCpls] = useState([
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
            rumusancpl: "Kemampuan merancang, memodelkan, dan membangun aplikasi menggunakan prinsip-prinsip grafika komputer serta interaksi manusia dan komputer.",
        },
    ]);

    return (
        <div>
            <table className="w-full border-1 text-sm border-gray-300  text-gray-500 dark:text-gray-400">
                <thead className="text-normal text-left text-black bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th className="px-6 py-3">Kode CPL</th>
                        <th className="px-6 py-3">Rumusan CPL</th>
                        <th className="px-6 py-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cpls.map((cpls) => {
                            return (
                                <tr className="border">
                                    <td className="px-6 py-3 border">{cpls.kodecpl}</td>
                                    <td className="px-6 py-3 border">{cpls.rumusancpl}</td>
                                    <td className="flex gap-1">
                                        <Button color={"green"} onClick={() => handleUbah(cpls.id)}>
                                            Ubah
                                        </Button>
                                        <Button color={"red"} onClick={() => handleHapus(cpls.id)}>
                                            Hapus
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

export { TableCpl };