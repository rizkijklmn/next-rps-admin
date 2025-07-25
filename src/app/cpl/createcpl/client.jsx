// app/cpmk/client.jsx
"use client"

import FormTambahCPL from "@/app/components/FormTambahCpl"
import { Card } from "flowbite-react"

export default function CreateCplClientSide() {
    return (
        <div className="mx-10 my-3">
            <p className="text-xl font-bold pb-5 tracking-normal text-gray-900 dark:text-white">
                Halaman Tambah data CPL Prodi
            </p>

            <Card>
                <FormTambahCPL />
            </Card>
        </div>
    )
}