// app/rpmingguan/client.jsx
"use client"

import { Card, Dropdown, DropdownItem, HR, Label, Textarea, TextInput } from "flowbite-react"
import { listDosen, listMatakuliah } from "../components/data"

export default function RPMingguanClientSide() {
    return (
        <div className="mx-10 my-3">
            {/* <div className="font-bold text-3xl pb-5">
                <p>Halaman Rencana Pembelajaran Mingguan</p>
            </div> */}

            <p className="text-xl font-bold pb-5 tracking-normal text-gray-900 dark:text-white">
                Rencana Pembelajaran Mingguan
            </p>

            <Card>
                <div className="flex w-full justify-center">
                    <form className="flex flex-col w-3/4 gap-2" action="">

                        {/* Section Minggu Perkuliahan */}
                        <Label className="text-2xl font-bold tracking-wide">Minggu Perkuliahan</Label>
                        <div className="grid gap-10 md:grid-cols-2">
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="minggu_awal" className="text-base">Minggu awal</Label>
                                </div>
                                <TextInput id="minggu_awal" name="minggu_awal" type="number" defaultValue={1} min={1} max={15} />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="minggu_akhir" className="text-base">Minggu akhir</Label>
                                </div>
                                <TextInput id="minggu_akhir" name="minggu_akhir" type="number" defaultValue={1} min={1} max={15} />
                            </div>
                        </div>

                        <HR className="mb-6" />

                        {/* Section Penilaian */}
                        <Label className="text-2xl font-bold tracking-wide">Penilaian</Label>
                        <div className="grid gap-10 md:grid-cols-2">
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="indikator_penilaian" className="text-base">Indikator Penilaian</Label>
                                </div>
                                <Dropdown label="-- Pilih Indikator Penilaian --" size="lg" color={"light"} className="w-full justify-between">
                                    {
                                        listDosen.map((data, index) => (
                                            <DropdownItem id="indikator_penilaian" key={index} size="lg" color={"light"} className="w-full justify-between">{data}</DropdownItem>
                                        ))
                                    }
                                </Dropdown>
                            </div>

                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="teknik_penilaian" className="text-base">Teknik Penilaian</Label>
                                </div>
                                <Dropdown label="-- Pilih Teknik Penilaian --" size="lg" color={"light"} className="w-full justify-between">
                                    {
                                        listDosen.map((data, index) => (
                                            <DropdownItem id="indikator_penilaian" key={index} size="lg" color={"light"} className="w-full justify-between">{data}</DropdownItem>
                                        ))
                                    }
                                </Dropdown>
                            </div>
                        </div>

                        <HR className="mb-6" />

                        {/* Section Bentuk Pembelajaran */}
                        <Label className="text-2xl font-bold tracking-wide">Bentuk Pembelajaran</Label>
                        <div className="grid gap-10 md:grid-cols-2">
                            <div>
                                <Label className="text-base font-bold">Luar Jaringan &#40;Luring&#41;</Label>
                                <div className="my-2 block">
                                    <Label htmlFor="luring_bentuk" className="text-base">Bentuk</Label>
                                </div>
                                <TextInput id="luring_bentuk" name="luring_bentuk" type="text" className="mb-5" />

                                <div className="my-2 block">
                                    <Label htmlFor="luring_metode" className="text-base">Metode</Label>
                                </div>
                                <TextInput id="luring_metode" name="luring_metode" type="text" className="mb-5" />

                                <div className="my-2 block">
                                    <Label htmlFor="luring_pb" className="text-base">PB</Label>
                                </div>
                                <TextInput id="luring_pb" name="luring_pb" type="text" />
                            </div>

                            <div>
                                <Label className="text-base font-bold">Dalam jaringan &#40;Daring&#41;</Label>
                                <div className="my-2 block">
                                    <Label htmlFor="daring_metode" className="text-base">Metode</Label>
                                </div>
                                <TextInput id="daring_metode" name="daring_metode" type="text" className="mb-5" />

                                <div className="my-2 block">
                                    <Label htmlFor="daring_km" className="text-base">KM</Label>
                                </div>
                                <TextInput id="daring_km" name="daring_km" type="text" className="mb-5" />

                                <div className="my-2 block">
                                    <Label htmlFor="daring_penugasan" className="text-base">Penugasan</Label>
                                </div>
                                <TextInput id="daring_penugasan" name="daring_penugasan" type="text" className="mb-5" />

                                <div className="my-2 block">
                                    <Label htmlFor="daring_pt" className="text-base">PT</Label>
                                </div>
                                <TextInput id="daring_pt" name="daring_pt" type="text" />
                            </div>
                        </div>

                        <HR className="mb-6" />

                        {/* Section Materi Pembelajaran */}
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="materi_pembelajaran" className="text-base font-bold">Materi Pembelajaran &#91;Pustaka&#93;</Label>
                            </div>
                            <Textarea id="materi_pembelajaran" name="materi_pembelajaran" className="rounded-lg p-3 border w-full" rows="4" placeholder="isi materi pembelajaran" />
                        </div>

                    </form>
                </div>
            </Card>
        </div>
    )
}