// app/pl/client.jsx
"use client"

import { useState } from "react";
import { Alert, Card } from "flowbite-react"
import { HiInformationCircle } from "react-icons/hi";

// COMPONENT
import DropdownKurikulum from "../components/DropdownKurikulum";
import TablePl from "./components/TablePl";

export default function PLClientSide() {
    const [kurikulumId, setKurikulumId] = useState(null);
    const prodiId = 2; // Contoh ID Prodi sudah di set 2

    return (
        <div className="mx-10 my-3">
            <p className="text-xl font-bold tracking-normal text-gray-900 dark:text-white">
                Halaman Profil Lulusan
            </p>
            <div className="flex my-7 justify-center">
                <Card className="flex items-center w-auto bg-gray-50">
                    <div className="flex items-center gap-5">

                        {/* Pilihan Kurikulum */}
                        <p className="font-semibold">Kurikulum</p>
                        <DropdownKurikulum onSelect={setKurikulumId} />

                    </div>
                </Card>
            </div>

            <Card>
                {kurikulumId ? (
                    <>
                        <TablePl prodiId={prodiId} kurikulumId={kurikulumId} />
                    </>
                ) : (
                    <Alert withBorderAccent className="items-center tracking-wide italic" color="teal" icon={HiInformationCircle}>
                        Silakan pilih kurikulum terlebih dahulu
                    </Alert>
                )}

                
            </Card>
        </div>
    )
}