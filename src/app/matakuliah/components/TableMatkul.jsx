import { useEffect, useState } from "react";
import { Alert, TextInput } from "flowbite-react";
import { HiInformationCircle, HiSearch } from "react-icons/hi";
import { getMatkulByProdiAndKurikulum } from "@/utils/fetchMatkul";

export default function TableMatkul({ prodiId, kurikulumId }) {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const getData = async () => {
        try {
            const result = await getMatkulByProdiAndKurikulum(prodiId, kurikulumId);
            setData(result);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getData();
    }, [prodiId, kurikulumId]);

    const filteredData = data.filter((matkul) =>
        matkul.Nama.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="space-y-4">
            {/* Input Search */}
            <TextInput
                className="w-[20%]"
                icon={HiSearch}
                placeholder="Cari nama mata kuliah..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {filteredData.length > 0 ? (
                <table className="table-auto w-full border border-gray-200 dark:border-gray-600">
                    <thead className="text-black dark:text-white bg-gray-200 dark:bg-gray-600">
                        <tr className="text-base">
                            <th className="px-5 py-3 w-[100px]">Kode</th>
                            <th className="px-5 py-3 w-[300px]">Mata Kuliah</th>
                            <th className="px-5 py-3 w-[100px]">Semester</th>
                            <th className="px-5 py-3 w-[80px]">sks</th>
                            {/* <th className="px-5 py-3 w-[150px]">Detail</th> */}
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {filteredData.map((matkul, index) => (
                            <tr className="border border-gray-200 dark:border-gray-600" key={index}>
                                <td className="px-5 py-3 text-center w-[100px]">{matkul.ID}</td>
                                <td className="px-5 py-3 w-[300px]">
                                    <span
                                        className="cursor-pointer text-green-700 hover:text-green-500 underline"
                                        onClick={() => window.open(`/matakuliah/detailmatakuliah/${matkul.ID}`, '_blank', 'noopener,noreferrer')}
                                    >
                                        {matkul.Nama}
                                    </span>
                                </td>
                                <td className="px-5 py-3 text-center w-[100px]">{matkul.Semester}</td>
                                <td className="px-5 py-3 text-center w-[80px]">{matkul.Sks}</td>
                                {/* <td className="px-5 py-3 text-center w-[150px]">
                                    <span
                                        onClick={() => window.open(`/cp-lulusan/${cpl.ID}`, '_blank', 'noopener,noreferrer')}
                                        className="cursor-pointer text-blue-700 hover:text-blue-500 underline"
                                    >
                                        Relasi ke CPL
                                    </span>
                                </td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <Alert withBorderAccent className="items-center tracking-wide" icon={HiInformationCircle}>
                    Tidak ada data <strong>Mata Kuliah</strong> tersedia.
                </Alert>
            )}
        </div>
    )
}