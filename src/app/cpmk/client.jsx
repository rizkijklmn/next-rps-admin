// app/cpmk/client.jsx
"use client"

import { Card } from "flowbite-react"

export default function CPMKClientSide() {
    return (
        <div className="mx-10 my-3">
            {/* <div className="font-bold text-3xl pb-5">
                    <p>Halaman CPMK</p>
                </div> */}

            <p className="text-xl font-bold pb-5 tracking-normal text-gray-900 dark:text-white">
                Daftar Capaian Pembelajaran Mata Kuliah
            </p>

            <Card>
                <div>
                    <p className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Selamat datang,
                    </p>
                    <p className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                        User
                    </p>
                </div>
            </Card>
        </div>
    )
}