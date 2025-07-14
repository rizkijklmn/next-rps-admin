// app/dashboard/client.jsx
"use client"

import { Card } from "flowbite-react"

export default function DashboardClientSide() {
    return (
        <div className="mx-10 my-3">
            {/* <div className="font-bold text-3xl pb-5">
                    <p>Halaman Dasbor</p>
                </div> */}

            <p className="text-xl font-bold pb-5 tracking-normal text-gray-900 dark:text-white">
                Dasbor
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