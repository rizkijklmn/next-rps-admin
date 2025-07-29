'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getCplById } from '@/utils/fetchCpl';
import { getPlData } from '@/utils/fetchPl';
import { Checkbox, Button, Card } from 'flowbite-react';

export default function DetailCplPage() {
    const { id } = useParams();
    const [cpl, setCpl] = useState(null);
    const [plList, setPlList] = useState([]);
    const [selectedPLs, setSelectedPLs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const cplDetail = await getCplById(id);
                setCpl(cplDetail);

                const { ProdiId, KurikulumId } = cplDetail

                if (ProdiId && KurikulumId) {
                    const plData = await getPlData(ProdiId, KurikulumId);
                    setPlList(plData);
                }
            } catch (error) {
                console.error("Gagal fetch data:", error);
            }
        };

        fetchData();
    }, [id]);

    const handleCheckboxChange = (plId) => {
        setSelectedPLs((prev) =>
            prev.includes(plId) ? prev.filter((id) => id !== plId) : [...prev, plId]
        );
    };

    const handleSave = async () => {
        // Kirim relasi CPL ↔ PL ke backend
        console.log("Simpan relasi:", { cplId: id, plIds: selectedPLs });
    };

    return (
        
        <main className='flex justify-center'>
            
            <Card className="flex w-[80%] p-1">
                <h1 className="text-xl font-bold mb-4">Detail CPL</h1>
                {cpl && (
                    <div className="mb-4">
                        <p><strong>Kode:</strong> {cpl.KodeCpl}</p>
                        <p><strong>Deskripsi:</strong> {cpl.DeskripsiCpl}</p>
                    </div>
                )}

                <div className="mb-4">
                    <p className="font-semibold mb-2">Pilih Profil Lulusan:</p>
                    {plList.length > 0 ? (
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
                    )}
                </div>

                <Button onClick={handleSave} color="blue">
                    Simpan Relasi
                </Button>
            </Card>
        </main>
    );
}