'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { HiCheck, HiClipboardCheck, HiInformationCircle, HiPlus } from 'react-icons/hi';
import { Checkbox, Button, Card, Label, Alert, Spinner, Tabs, TabItem, TextInput, Textarea, Dropdown, DropdownItem } from 'flowbite-react';
import { getMatkulById } from '@/utils/fetchMatkul';
import { getCplByProdiAndKurikulum } from '@/utils/fetchCpl';
import { getRelasiCplMatkul } from '@/utils/fetchRelasiCplMatkul';
import { IoPencil } from 'react-icons/io5';
import ModalCreateCpmk from '../../components/ModalCreateCpmk';
import ModalEditCpmk from '../../components/ModalEditCpmk';

export default function DetailMatkulPengembangPage() {
    const { id } = useParams(); // mengambil id dari URL
    const [matkul, setMatkul] = useState(null); // detail Matkul
    const [cplList, setCplList] = useState([]); // daftar CPL yg tersedia
    const [relasiCpl, setRelasiCpl] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalCplId, setModalCplId] = useState(null);
    const [selectedCplId, setSelectedCplId] = useState(null);
    const [selectedCpmkList, setSelectedCpmkList] = useState([]);

    const [isModalEditCpmkOpen, setIsModalEditCpmkOpen] = useState(false);
    const [selectedCpmkToEdit, setSelectedCpmkToEdit] = useState(null);

    // Saat komponen dimuat, data CPL diambil berdasarkan id dari URL.
    // Jika matkul memiliki relasi CPL, maka ID-nya disimpan ke selectedCPLs dan initialCPLs.
    // Kemudian, data CPL diambil berdasarkan ProdiId dan KurikulumId dari matkul.
    useEffect(() => {
        const fetchData = async () => {
            try {
                const matkulDetail = await getMatkulById(id); // Ambil detail CPL berdasarkan ID
                setMatkul(matkulDetail); // Simpan ke state

                // Simpan relasi awal CPL yang berelasi dengan Matkul
                const relasiCplData = await getRelasiCplMatkul(matkulDetail.ID);
                setRelasiCpl(relasiCplData);
                // const relatedCplIds = relasiCplData.map((item) => item.ID);
                // setSelectedCPLs(relatedCplIds);
                // setInitialCPLs(relatedCplIds);

                const relasiWithCpmk = relasiCplData.map((item) => ({
                    ...item,
                    cpmkList: [{ KodeCpmk: '', DeskripsiCpmk: '' }], // atau [] jika tidak ada default
                }));
                setRelasiCpl(relasiWithCpmk);

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

    const fetchCpmkByMatkulAndCpl = async (matkulId, cplId) => {
        try {
            const res = await fetch(`http://192.168.54.59:3001/api_obe/cpmk/matakuliah/cpl?MataKuliahId=${matkulId}&CplId=${cplId}`);
            const data = await res.json();
            setSelectedCpmkList(data);
        } catch (error) {
            console.error("Gagal fetch CPMK:", error);
        }
    };

    const handleOpenModal = (cplId) => {
        setModalCplId(cplId);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setModalCplId(null);
    }

    const handleOpenModalEditCpmk = (cpmk) => {
        setSelectedCpmkToEdit(cpmk);
        setIsModalEditCpmkOpen(true);
    };

    if (!matkul) {
        return (
            <div className="fixed inset-0 flex flex-col justify-center items-center bg-opacity-30 z-50">
                <Spinner size="xl" aria-label="Memuat data..." />
                <p className="mt-4 text-lg font-medium">Memuat data...</p>
            </div>
        );
    }

    return (
        <>
            <ModalCreateCpmk
                mataKuliahId={matkul?.ID}
                cplId={modalCplId}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSuccess={() => fetchCpmkByMatkulAndCpl(matkul.ID, modalCplId)}
            />

            <ModalEditCpmk
                isOpen={isModalEditCpmkOpen}
                onClose={() => setIsModalEditCpmkOpen(false)}
                cpmk={selectedCpmkToEdit}
                onUpdated={(updatedData) => {
                    // Refresh CPMK setelah update
                    if (selectedCplId) {
                        fetchCpmkByMatkulAndCpl(matkul.ID, selectedCplId);
                    }
                    setIsModalEditCpmkOpen(false);
                }}
            />

            <main className="flex flex-col flex-1 w-[80%] mx-auto p-5">
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
                                        {relasiCpl.length > 0
                                            ? relasiCpl.map((cpl) => cpl.KodeCpl).join(', ')
                                            : <span className="text-gray-400 italic">Belum dipilih</span>}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card>
                        <Tabs>
                            <TabItem active={{ className: "bg-gray-200" }} title="Capaian Pembelajaran Lulusan (CPL)" icon={HiCheck}>
                                <div>
                                    <p className="text-base font-bold tracking-normal text-gray-900 dark:text-white mb-4">
                                        Relasi Mata Kuliah dengan CPL
                                    </p>
                                    {cplList.length > 0 ? (
                                        <div className="overflow-x-auto">
                                            <table className="table-auto w-full min-w-24 text-sm  text-gray-600 dark:text-white">
                                                <thead className="text-base text-black bg-gray-200 border-y-1 border-y-gray-200 dark:text-white dark:bg-gray-700 dark:border-gray-700">
                                                    <tr className="text-center">
                                                        <th className="px-6 py-3 w-32">Pilih</th>
                                                        <th className="px-6 py-3 w-32">Kode</th>
                                                        <th className="px-6 py-3">Deskripsi</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {cplList.map((cpl) => (
                                                        <tr key={cpl.ID} className="border-y-1 border-gray-200 dark:border-gray-700">
                                                            <td className="text-center items-center justify-center px-6 py-3">
                                                                <Checkbox
                                                                    disabled
                                                                    className="cursor-not-allowed"
                                                                    id={`cpl-${cpl.ID}`}
                                                                    checked={relasiCpl.some((relasi) => relasi.ID === cpl.ID)}
                                                                // onChange={() => handleCheckboxChange(cpl.ID)}
                                                                />
                                                            </td>
                                                            <td className="text-center">
                                                                <Label disabled htmlFor={`cpl-${cpl.ID}`}>{cpl.KodeCpl}</Label>
                                                            </td>
                                                            <td className="items-center justify-center px-6 py-3">
                                                                <Label disabled htmlFor={`cpl-${cpl.ID}`}>{cpl.DeskripsiCpl}</Label>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                            <Alert withBorderAccent className="items-center tracking-wide" icon={HiInformationCircle}>
                                                Untuk mengubah relasi <strong>Mata Kuliah</strong> dengan <strong>CPL</strong>, silakan hubungi <strong>Kaprodi</strong>.
                                            </Alert>
                                        </div>
                                    ) : (
                                        <Alert withBorderAccent className="items-center tracking-wide" icon={HiInformationCircle}>
                                            Tidak ada data <strong>CPL</strong> tersedia.
                                        </Alert>
                                    )}
                                </div>
                            </TabItem>
                            <TabItem active={{ className: "bg-gray-200" }} title="Capaian Pembelajaran Mata Kuliah (CPMK)" icon={HiClipboardCheck}>
                                <p className="text-base font-bold tracking-normal text-gray-900 dark:text-white mb-4">
                                    Capaian Pembelajaran Mata Kuliah
                                </p>
                                {relasiCpl.length > 0 ? (
                                    <div>
                                        {/* <select
                                            className="w-1/2 p-2 border mb-4"
                                            value={selectedCplId || ''}
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                if (value === "") {
                                                    setSelectedCplId(null);
                                                    setSelectedCpmkList([]);
                                                } else {
                                                    const id = parseInt(value);
                                                    setSelectedCplId(id);
                                                    fetchCpmkByMatkulAndCpl(matkul.ID, id);
                                                }
                                            }}
                                        >
                                            <option value="">Pilih CPL</option>
                                            {relasiCpl.map((cpl) => (
                                                <option key={cpl.ID} value={cpl.ID}>
                                                    {cpl.KodeCpl}
                                                </option>
                                            ))}
                                        </select> */}

                                        <Dropdown
                                            label={selectedCplId ? relasiCpl.find((cpl) => cpl.ID === selectedCplId)?.KodeCpl : "Pilih CPL"}
                                            dismissOnClick={true}
                                            className="mb-4 w-48 justify-between cursor-pointer"
                                            color={"light"}
                                        >
                                            {relasiCpl.map((cpl) => (
                                                <DropdownItem
                                                    key={cpl.ID}
                                                    onClick={() => {
                                                        setSelectedCplId(cpl.ID);
                                                        fetchCpmkByMatkulAndCpl(matkul.ID, cpl.ID);
                                                    }}
                                                >
                                                    {cpl.KodeCpl}
                                                </DropdownItem>
                                            ))}
                                        </Dropdown>


                                        {/* Alert jika belum pilih CPL */}
                                        {selectedCplId === null && (
                                            <Alert withBorderAccent className="items-center tracking-wide" icon={HiInformationCircle}>
                                                Silakan pilih CPL terlebih dahulu.
                                            </Alert>
                                        )}

                                        {/* Menampilkan Deskripsi dari CPL dipilih */}
                                        {selectedCplId !== null && (
                                            <div className="mb-4">
                                                <p className="text-gray-700 dark:text-gray-300">
                                                    {/* <span className="font-semibold text-align-justify">Deskripsi:</span>{" "} */}
                                                    {
                                                        relasiCpl.find((cpl) => cpl.ID === selectedCplId)?.DeskripsiCpl
                                                        || "Deskripsi tidak ditemukan"
                                                    }
                                                </p>
                                            </div>
                                        )}

                                        {/* Tombol Tambah CPMK */}
                                        {selectedCplId !== null && (
                                            <div className="flex justify-end mb-4">
                                                <Button className="cursor-pointer flex items-center" color="green" onClick={() => handleOpenModal(selectedCplId)}>
                                                    <HiPlus className="mr-1" />
                                                    Tambah
                                                </Button>
                                            </div>
                                        )}

                                        {/* Tabel CPMK atau alert jika kosong */}
                                        {selectedCplId !== null && selectedCpmkList.length > 0 ? (
                                            <div>

                                                <table className="table-auto w-full border border-gray-200 dark:border-gray-600">
                                                    <thead className="text-black dark:text-white bg-gray-200 dark:bg-gray-600">
                                                        <tr className="text-base">
                                                            <th className="px-5 py-3 w-32">Kode</th>
                                                            <th className="px-5 py-3">Deskripsi</th>
                                                            <th className="px-5 py-3 w-32">Ubah/Hapus</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="text-sm">
                                                        {selectedCpmkList.map((cpmk, i) => (
                                                            <tr key={i} className="border border-gray-200 dark:border-gray-600">
                                                                <td className="px-5 py-3 text-center">{cpmk.KodeCpmk}</td>
                                                                <td className="px-5 py-3">{cpmk.DeskripsiCpmk}</td>
                                                                <td className="px-5 py-3">
                                                                    <div className="flex justify-center items-center gap-1">
                                                                        <Button
                                                                            outline
                                                                            color={"green"}
                                                                            className="cursor-pointer"
                                                                            onClick={() => handleOpenModalEditCpmk(cpmk)}
                                                                        >
                                                                            <IoPencil size={15} />
                                                                        </Button>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        ) : selectedCplId !== null && selectedCpmkList.length === 0 ? (
                                            <Alert withBorderAccent icon={HiInformationCircle}>
                                                Belum ada CPMK untuk CPL ini.
                                            </Alert>
                                        ) : null}
                                    </div>
                                ) : (
                                    <Alert withBorderAccent className="items-center tracking-wide" icon={HiInformationCircle}>
                                        Belum ada relasi <strong>Mata Kuliah</strong> dengan <strong>CPL</strong>.
                                    </Alert>
                                )}
                            </TabItem>
                            <TabItem active={{ className: "bg-gray-200" }} title="Sub Capaian Pembelajaran Mata Kuliah (Sub-CPMK)" icon={HiCheck}>
                                <p className="text-base font-bold tracking-normal text-gray-900 dark:text-white mb-4">
                                    Sub Capaian Pembelajaran Mata Kuliah &#40;Sub-CPMK&#41;
                                </p>
                            </TabItem>
                        </Tabs>
                    </Card>
                </div>
            </main>
        </>
    );
}