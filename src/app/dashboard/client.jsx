// app/dashboard/client.jsx
"use client"

import { Card } from "flowbite-react"

export default function DashboardClientSide() {
    return (
        <div className="mx-10 my-3">
            <p className="text-xl font-bold pb-5 tracking-normal text-gray-900 dark:text-white">
                Dasbor
            </p>

            <Card>
                <div>
                    <p className="text-base font-bold tracking-wide text-black dark:text-white">
                        Selamat datang,
                    </p>
                    <p className="text-2xl font-bold tracking-normal text-black dark:text-white">
                        User
                    </p>
                </div>
            </Card>
        </div>
    )
}