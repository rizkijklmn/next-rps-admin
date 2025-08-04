'use client';

import Swal from 'sweetalert2';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { HiInformationCircle } from 'react-icons/hi';
import { Checkbox, Button, Card, Label, Alert, Spinner } from 'flowbite-react';
import { getMatkulById } from '@/utils/fetchMatkul';
import { getCplByProdiAndKurikulum } from '@/utils/fetchCpl';

export default function DetailMatkulPage() {
    const { id } = useParams(); // mengambil id dari URL
    const [matkul, setMatkul] = useState(null); // detail Matkul
    const [cplList, setCplList] = useState([]); // daftar CPL yg tersedia
    // const [selectedCPLs, setSelectedCPLs] = useState([]); // CPL yg dipilih (checkbox)
    // const [initialCPLs, setInitialCPLs] = useState([]); // CPL yg awalnya sudah berelasi

    // Saat komponen dimuat, data CPL diambil berdasarkan id dari URL.
    // Jika matkul memiliki relasi CPL, maka ID-nya disimpan ke selectedCPLs dan initialCPLs.
    // Kemudian, data CPL diambil berdasarkan ProdiId dan KurikulumId dari matkul.
    useEffect(() => {
        const fetchData = async () => {
            try {
                const matkulDetail = await getMatkulById(id); // Ambil detail CPL berdasarkan ID
                setMatkul(matkulDetail); // Simpan ke state

                // Simpan relasi awal PL yang berelasi dengan CPL
                // if (matkulDetail.Cpl && matkulDetail.Cpl.length > 0) {
                //     const relatedCplIds = matkulDetail.Cpl.map((cpl) => cpl.ID);
                //     setSelectedCPLs(relatedCplIds);
                //     setInitialCPLs(relatedCplIds); // Simpan relasi awal
                // }

                // Ambil data CPL berdasarkan ProdiId dan KurikulumId
                const { ProdiId, KurikulumId } = matkulDetail;
                if (ProdiId && KurikulumId) {
                    const cplData = await getCplByProdiAndKurikulum(ProdiId, KurikulumId);
                    setCplList(cplData); // Simpan daftar CPL yang tersedia
                }
            } catch (error) {
                console.error("Gagal fetch data:", error);
            }
        };

        fetchData();
    }, [id]);

    //     const handleCheckboxChange = async (cplId) => {
    //         setSelectedCPLs((prev) =>
    //             prev.includes(cplId) ? prev.filter((id) => id !== cplId) : [...prev, cplId]
    //         );
    //     };

    //     const handleSave = async () => {
    //         const added = selectedCPLs.filter((id) => !initialCPLs.includes(id));
    //         const removed = initialCPLs.filter((id) => !selectedCPLs.includes(id));

    //         // Kirim relasi CPL ↔ PL ke backend
    //         if (added.length > 0 || removed.length > 0) {
    //             try {
    //                 // Tambah relasi baru
    //                 for (const cplId of added) {
    //                     const response = await fetch(`${API_BASE_OBE}/api_obe/pl/cpl`, {
    //                         method: 'POST',
    //                         headers: {
    //                             'Content-Type': 'application/json',
    //                         },
    //                         body: JSON.stringify({
    //                             CplId: cplId,
    //                             // CplId: parseInt(id), // pastikan id CPL berupa angka
    //                             MatkulId: id,
    //                         }),
    //                     });

    //                     if (!response.ok) {
    //                         throw new Error(`Gagal menambahkan relasi untuk CPL ID ${cplId}`);
    //                     }
    //                 }
    //                 // Hapus relasi yang di-uncheck
    //                 for (const cplId of removed) {
    //                     const response = await fetch(`${API_BASE_OBE}/api_obe/pl/cpl`, {
    //                         method: 'DELETE',
    //                         headers: {
    //                             'Content-Type': 'application/json',
    //                         },
    //                         body: JSON.stringify({
    //                             CplId: cplId,
    //                             // CplId: parseInt(id), // pastikan id CPL berupa angka
    //                             MatkulId: id,
    //                         }),
    //                     });

    //                     if (!response.ok) {
    //                         throw new Error(`Gagal menghapus relasi untuk CPL ID ${cplId}`);
    //                     }
    //                 }

    //                 Swal.fire({
    //                     icon: 'success',
    //                     title: 'Berhasil!',
    //                     text: 'Relasi berhasil disimpan!',
    //                     showConfirmButton: true
    //                 }).then(() => {
    //                     window.close(); // tutup tab setelah alert ditutup
    //                 });

    //                 setInitialCPLs([...selectedCPLs]); // Update relasi awal
    //             } catch (error) {
    //                 console.error('Error saat menyimpan relasi:', error);
    //                 Swal.fire({
    //                     icon: 'warning',
    //                     title: 'Oops!',
    //                     text: 'Terjadi kesalahan saat menyimpan relasi!',
    //                 })
    //             }
    //         } else {
    //             Swal.fire({
    //                 icon: 'info',
    //                 title: 'Tidak ada perubahan!',
    //                 text: 'Tidak ada relasi CPL-PL yang berubah.',
    //                 showConfirmButton: true
    //             }).then(() => {
    //                 window.close(); // tutup tab setelah alert ditutup
    //             });
    //         }
    //         console.log("Simpan relasi:", { MatkulId: id, cplIds: selectedCPLs });
    //     };

    if (!matkul) {
        return (
            <div className="fixed inset-0 flex flex-col justify-center items-center bg-opacity-30 z-50">
                <Spinner size="xl" aria-label="Memuat data..." />
                <p className="mt-4 text-lg font-medium">Memuat data...</p>
            </div>
        );
    }

    return (
        <main className="flex flex-col flex-1 w-[80%] mx-auto p-5">
            <p className="flex items-center text-xl font-bold pb-5 tracking-normal text-left text-gray-900 dark:text-white">
                Halaman Detail Mata Kuliah
            </p>
            <div className="space-y-4">
                <Card>
                    <h1 className="text-2xl font-bold">{matkul.Nama}</h1>
                    <div className="space-y-5">
                        <div className="text-black bg-gray-100 dark:text-white dark:bg-gray-700 shadow p-4 rounded space-y-4">
                            {/* Grid dua kolom */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Kolom kiri */}
                                <div>
                                    <p><strong>Kode Mata Kuliah:</strong> {matkul.ID}</p>
                                    <p><strong>Semester:</strong> {matkul.Semester}</p>
                                    <p><strong>SKS:</strong> {matkul.Sks}</p>
                                </div>
                                {/* Kolom kanan */}
                                <div>
                                    <p><strong>Kurikulum:</strong> {matkul.Kurikulum?.TahunKurikulum}</p>
                                    <p><strong>Prodi:</strong> {matkul.Prodi?.Nama}</p>
                                    <p><strong>Fakultas:</strong> {matkul.Prodi?.Fakultas?.Nama}</p>
                                </div>
                            </div>
                            {/* Satu kolom untuk CPL */}
                            <div>
                                <p>
                                    <strong>Capaian Pembelajaran Lulusan:</strong>{' '}
                                    {matkul.Cpl?.length > 0
                                        ? matkul.Cpl.map((cpl) => cpl.Kode).join(', ')
                                        : <span className="text-gray-400 italic">Belum dipilih</span>}
                                </p>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="mb-4">
                        <p className="text-base font-bold tracking-normal text-gray-900 dark:text-white mb-5">
                            Pilih Capaian Pembelajaran Lulusan
                        </p>
                        {cplList.length > 0 ? (
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full min-w-24 text-sm  text-gray-600 dark:text-white">
                                    <thead className="text-base text-black bg-gray-200 border-y-1 border-y-gray-200 dark:text-white dark:bg-gray-700 dark:border-gray-700">
                                        <tr className="text-center">
                                            <th className="px-6 py-3 w-[100px]">Pilih</th>
                                            <th className="px-6 py-3 w-[100px]">Kode</th>
                                            <th className="px-6 py-3">Deskripsi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cplList.map((cpl) => (
                                            <tr key={cpl.ID} className="border-y-1 border-gray-200 dark:border-gray-700">
                                                <td className="text-center items-center justify-center px-6 py-3 w-[100px]">
                                                    <Checkbox
                                                        id={`cpl-${cpl.ID}`}
                                                    // checked={selectedCPLs.includes(cpl.ID)}
                                                    // onChange={() => handleCheckboxChange(cpl.ID)}
                                                    />
                                                </td>
                                                <td className="text-center w-[100px]">
                                                    <Label htmlFor={`cpl-${cpl.ID}`}>{cpl.KodeCpl}</Label>
                                                </td>
                                                <td className="items-center justify-center px-6 py-3">
                                                    <Label htmlFor={`cpl-${cpl.ID}`}>{cpl.DeskripsiCpl}</Label>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <Alert withBorderAccent className="items-center tracking-wide" icon={HiInformationCircle}>
                                Tidak ada data <strong>CPL</strong> tersedia.
                            </Alert>
                        )}
                    </div>
                </Card>
                <Card>
                    <Button className="cursor-pointer" color="blue" /*onClick={handleSave}*/>
                        Simpan Relasi
                    </Button>
                </Card>
            </div>
        </main>
    );
}