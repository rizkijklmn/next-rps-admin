'use client';

import Swal from 'sweetalert2';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getPlByProdiAndKurikulum } from '@/utils/fetchPl';
import { getCplById } from '@/utils/fetchCpl';
import { HiInformationCircle } from 'react-icons/hi';
import { Checkbox, Button, Card, Label, Alert, Spinner } from 'flowbite-react';
import { API_BASE_OBE } from '@/utils/config';

export default function DetailCplPage() {
    const { id } = useParams(); // mengambil id dari URL
    const [cpl, setCpl] = useState(null); // detail CPL
    const [plList, setPlList] = useState([]); // daftar PL yg tersedia
    const [selectedPLs, setSelectedPLs] = useState([]); // PL yg dipilih (checkbox)
    const [initialPLs, setInitialPLs] = useState([]); // PL yg awalnya sudah berelasi

    // Saat komponen dimuat, data CPL diambil berdasarkan id dari URL.
    // Jika CPL memiliki relasi PL, maka ID-nya disimpan ke selectedPLs dan initialPLs.
    // Kemudian, data PL diambil berdasarkan ProdiId dan KurikulumId dari CPL.
    useEffect(() => {
        const fetchData = async () => {
            try {
                const cplDetail = await getCplById(id); // Ambil detail CPL berdasarkan ID
                setCpl(cplDetail); // Simpan ke state

                // Simpan relasi awal PL yang berelasi dengan CPL
                if (cplDetail.Pl && cplDetail.Pl.length > 0) {
                    const relatedPlIds = cplDetail.Pl.map((pl) => pl.ID);
                    setSelectedPLs(relatedPlIds);
                    setInitialPLs(relatedPlIds); // Simpan relasi awal
                }

                // Ambil data PL berdasarkan ProdiId dan KurikulumId
                const { ProdiId, KurikulumId } = cplDetail;
                if (ProdiId && KurikulumId) {
                    const plData = await getPlByProdiAndKurikulum(ProdiId, KurikulumId);
                    setPlList(plData); // Simpan daftar PL yang tersedia
                }
            } catch (error) {
                console.error("Gagal fetch data:", error);
            }
        };

        fetchData();
    }, [id]);

    const handleCheckboxChange = async (plId) => {
        // const isSelected = selectedPLs.includes(plId);

        // if (isSelected) {
        //     // Hapus relasi di backend
        //     try {
        //         const response = await fetch('http://192.168.54.59:3001/api_obe/pl/cpl', {
        //             method: 'DELETE',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //             },
        //             body: JSON.stringify({
        //                 PlId: plId,
        //                 CplId: parseInt(id),
        //             }),
        //         })

        //         if (!response.ok) {
        //             throw new Error(`Gagal menghapus relasi untuk PL ID ${plId}`);
        //         }

        //         // Update state setelah berhasil hapus
        //         setSelectedPLs((prev) => prev.filter((id) => id !== plId));
        //     } catch (error) {
        //         console.error('Error saat menghapus relasi:', error);
        //         Swal.fire({
        //             icon: 'error',
        //             title: 'Gagal!',
        //             text: 'Terjadi kesalahan saat menghapus relasi.',
        //         });
        //     }
        // } else {
        //     // Tambah relasi ke state
        //     setSelectedPLs((prev) =>
        //         prev.includes(plId) ? prev.filter((id) => id !== plId) : [...prev, plId]
        //     );
        // }
        setSelectedPLs((prev) =>
            prev.includes(plId) ? prev.filter((id) => id !== plId) : [...prev, plId]
        );
    };

    const handleSave = async () => {
        // Periksa apakah ada PL yang dipilih
        // if (selectedPLs.length === 0) {
        //     Swal.fire({
        //         icon: 'info',
        //         title: 'Tidak ada PL dipilih',
        //         text: 'Silakan pilih minimal satu PL sebelum menyimpan.',
        //     });
        //     return;
        // }

        const added = selectedPLs.filter((id) => !initialPLs.includes(id));
        const removed = initialPLs.filter((id) => !selectedPLs.includes(id));

        // Kirim relasi CPL ↔ PL ke backend
        if (added.length > 0 || removed.length > 0) {
            try {
                // Tambah relasi baru
                for (const plId of added) {
                    const response = await fetch(`${API_BASE_OBE}/api_obe/pl/cpl`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            PlId: plId,
                            CplId: parseInt(id), // pastikan id CPL berupa angka
                        }),
                    });

                    if (!response.ok) {
                        throw new Error(`Gagal menambahkan relasi untuk PL ID ${plId}`);
                    }
                }
                // Hapus relasi yang di-uncheck
                for (const plId of removed) {
                    const response = await fetch(`${API_BASE_OBE}/api_obe/pl/cpl`, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            PlId: plId,
                            CplId: parseInt(id), // pastikan id CPL berupa angka
                        }),
                    });

                    if (!response.ok) {
                        throw new Error(`Gagal menghapus relasi untuk PL ID ${plId}`);
                    }
                }

                Swal.fire({
                    icon: 'success',
                    title: 'Berhasil!',
                    text: 'Relasi berhasil disimpan!',
                    showConfirmButton: true
                }).then(() => {
                    window.close(); // tutup tab setelah alert ditutup
                });

                setInitialPLs([...selectedPLs]); // Update relasi awal
            } catch (error) {
                console.error('Error saat menyimpan relasi:', error);
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops!',
                    text: 'Terjadi kesalahan saat menyimpan relasi!',
                })
            }
        } else {
            Swal.fire({
                icon: 'info',
                title: 'Tidak ada perubahan!',
                text: 'Tidak ada relasi CPL-PL yang berubah.',
                showConfirmButton: true
            }).then(() => {
                window.close(); // tutup tab setelah alert ditutup
            });
        }

        // try {
        //     for (const plId of added) {
        //         const response = await fetch('http://192.168.54.59:3001/api_obe/pl/cpl', {
        //             method: 'POST',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //             },
        //             body: JSON.stringify({
        //                 PlId: plId,
        //                 CplId: parseInt(id), // pastikan id CPL berupa angka
        //             }),
        //         });

        //         if (!response.ok) {
        //             throw new Error(`Gagal menyimpan relasi untuk PL ID ${plId}`);
        //         }
        //     }
        //     Swal.fire({
        //         icon: 'success',
        //         title: 'Berhasil!',
        //         text: 'Semua relasi berhasil disimpan!',
        //         showConfirmButton: true
        //     }).then(() => {
        //         window.close(); // tutup tab setelah alert ditutup
        //     });
        // } catch (error) {
        //     console.error('Error saat menyimpan relasi:', error);
        //     Swal.fire({
        //         icon: 'warning',
        //         title: 'Oops!',
        //         text: 'Terjadi kesalahan saat menambahkan menyimpan relasi!',
        //     })
        // }

        console.log("Simpan relasi:", { cplId: id, plIds: selectedPLs });
    };

    // const [data, setData] = useState(null);

    // useEffect(() => {
    //     fetch(`http://192.168.54.59:3001/api_obe/cpl/${id}`)
    //         .then((res) => res.json())
    //         .then((json) => setData(json))
    //         .catch((err) => console.error('Gagal fetch data CPL:', err));
    // }, []);

    // if (!data) return <div className="p-4">Memuat data...</div>;
    if (!cpl) {
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
                Halaman Detail Capaian Pembelajaran Lulusan
                {/* <Button className="cursor-pointer" color={"red"} size='xs' onClick={() => window.close()}>X</Button> */}
            </p>
            <div className="space-y-4">
                <Card>
                    {/* {cpl && (
                        <div className="space-y-2">
                            <h1 className="text-xl font-bold">{cpl.KodeCpl}</h1>
                            <p><strong>Kode:</strong> {cpl.KodeCpl}</p>
                            <p>{cpl.DeskripsiCpl}</p>
                        </div>
                    )} */}
                    <h1 className="text-2xl font-bold">{cpl.KodeCpl}</h1>
                    <div className="space-y-5">
                        <div className="text-black bg-gray-100 dark:text-white dark:bg-gray-700 shadow p-4 rounded">
                            <p><strong>Deskripsi:</strong> {cpl.DeskripsiCpl}</p>
                            <p><strong>Kurikulum:</strong> {cpl.Kurikulum?.TahunKurikulum}</p>
                            <p><strong>Prodi:</strong> {cpl.Prodi?.Nama}</p>
                            <p><strong>Fakultas:</strong> {cpl.Prodi?.Fakultas?.Nama}</p>
                            <p>
                                <strong>Profil Lulusan:</strong>{' '}
                                {
                                    cpl.Pl?.length > 0 ? cpl.Pl.map((pl) => pl.Kode).join(', ') : <span className="text-gray-400 italic">Belum dipilih</span>
                                }
                            </p>

                        </div>
                        {/* <h2 className="text-xl font-semibold">Daftar PL Terkait</h2>
                        {cpl.Pl && cpl.Pl.length > 0 ? (
                            <div className="space-y-4">
                                {cpl.Pl?.map((pl) => (
                                    <div key={pl.ID} className="border p-4 rounded shadow-sm">
                                        <p><strong>Kode PL:</strong> {pl.Kode}</p>
                                        <p><strong>Deskripsi:</strong> {pl.Deskripsi}</p>
                                        <p><strong>Kurikulum:</strong> {pl.Kurikulum?.TahunKurikulum || <span className="text-gray-500 italic">Tidak tersedia</span>}</p>
                                        <p><strong>Prodi:</strong> {pl.Prodi?.Nama || <span className="text-gray-500 italic">Tidak tersedia</span>}</p>
                                        <p><strong>Fakultas:</strong> {pl.Prodi?.Fakultas?.Nama || <span className="text-gray-500 italic">Tidak tersedia</span>}</p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <Alert withBorderAccent className="items-center tracking-wide" icon={HiInformationCircle}>
                                Tidak ada data PL yang terkait.
                            </Alert>
                        )} */}
                    </div>
                </Card>
                <Card>
                    <div className="mb-4">
                        <p className="text-base font-bold tracking-normal text-gray-900 dark:text-white mb-5">
                            Pilih Profil Lulusan
                        </p>
                        {plList.length > 0 ? (
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full min-w-24 text-sm  text-gray-600 dark:text-white">
                                    <thead className="text-base text-black bg-gray-200 border-y-1 border-y-gray-200 dark:text-white dark:bg-gray-700 dark:border-gray-700">
                                        <tr className="text-center">
                                            <th className="px-6 py-3 w-24">Pilih</th>
                                            <th className="px-6 py-3 w-24">Kode</th>
                                            <th className="px-6 py-3">Deskripsi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {plList.map((pl) => (
                                            <tr key={pl.ID} className="border-y-1 border-gray-200 dark:border-gray-700">
                                                <td className="text-center items-center justify-center px-6 py-3">
                                                    <Checkbox
                                                        id={`pl-${pl.ID}`}
                                                        checked={selectedPLs.includes(pl.ID)}
                                                        onChange={() => handleCheckboxChange(pl.ID)}
                                                    />
                                                </td>
                                                <td className="text-center">
                                                    <Label htmlFor={`pl-${pl.ID}`}>{pl.Kode}</Label>
                                                </td>
                                                <td className="items-center justify-center px-6 py-3">
                                                    <Label htmlFor={`pl-${pl.ID}`}>{pl.Deskripsi}</Label>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <Alert withBorderAccent className="items-center tracking-wide" icon={HiInformationCircle}>
                                Tidak ada data PL tersedia.
                            </Alert>
                        )}

                        {/* {plList.length > 0 ? (
                            plList.map((pl) => (
                                <div key={pl.ID} className="flex items-center gap-2 mb-1">
                                    <Checkbox
                                        id={pl.ID}
                                        checked={selectedPLs.includes(pl.ID)}
                                        onChange={() => handleCheckboxChange(pl.ID)}
                                    />
                                    <label htmlFor={pl.ID}>{pl.Kode}</label>
                                    <label htmlFor={pl.Deskripsi}>{pl.Deskripsi}</label>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">Tidak ada data PL tersedia.</p>
                        )} */}
                    </div>
                </Card>
                <Card>
                    <Button className="cursor-pointer" color="blue" onClick={handleSave}>
                        Simpan Relasi
                    </Button>
                </Card>
                {/* <Card>
                    <div className="p-6 space-y-6">
                        <h1 className="text-2xl font-bold">Detail CPL</h1>
                        <div className="text-black bg-gray-100 dark:text-white dark:bg-gray-700 shadow p-4 rounded">
                            <p><strong>Kode CPL:</strong> {data.KodeCpl}</p>
                            <p><strong>Deskripsi:</strong> {data.DeskripsiCpl}</p>
                            <p><strong>Kurikulum:</strong> {data.Kurikulum?.TahunKurikulum}</p>
                            <p><strong>Prodi:</strong> {data.Prodi?.Nama}</p>
                            <p><strong>Fakultas:</strong> {data.Prodi?.Fakultas?.Nama}</p>
                        </div>
                        <h2 className="text-xl font-semibold">Daftar PL Terkait</h2>
                        {data.Pl && data.Pl.length > 0 ? (
                            <div className="space-y-4">
                                {data.Pl?.map((pl) => (
                                    <div key={pl.ID} className="border p-4 rounded shadow-sm">
                                        <p><strong>Kode PL:</strong> {pl.Kode}</p>
                                        <p><strong>Deskripsi:</strong> {pl.Deskripsi}</p>
                                        <p><strong>Kurikulum:</strong> {pl.Kurikulum?.TahunKurikulum}</p>
                                        <p><strong>Prodi:</strong> {pl.Prodi?.Nama}</p>
                                        <p><strong>Fakultas:</strong> {pl.Prodi?.Fakultas?.Nama}</p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <Alert withBorderAccent className="items-center tracking-wide" icon={HiInformationCircle}>
                                Tidak ada data PL yang terkait.
                            </Alert>
                        )}
                    </div>
                </Card> */}
            </div>
        </main>
    );
}