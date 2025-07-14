// app/rtm/client.jsx
"use client"

import { Card, Dropdown, DropdownItem, Label, Textarea, TextInput } from "flowbite-react"
import { listDosen } from "../components/data"

export default function RTMClientSide() {
    return (
        <div className="mx-10 my-3">
            {/* <div className="font-bold text-3xl pb-5">
                <p>Halaman Rencana Tugas Mahasiswa</p>
            </div> */}

            <p className="text-xl font-bold pb-5 tracking-normal text-gray-900 dark:text-white">
                Rencana Tugas Mingguan
            </p>

            <Card>
                <div className="flex w-full justify-center">
                    <form className="flex flex-col w-3/4 gap-5" action="">

                        {/* <Label className="text-2xl font-bold"></Label> */}
                        <div className="grid gap-10 mb-3 md:grid-cols-2">
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="minggu_ke" className="text-base font-bold">Minggu ke</Label>
                                </div>
                                <TextInput id="minggu_ke" name="minggu_ke" type="number" defaultValue={1} min={1} max={15} />
                            </div>

                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="nama_tugas_mingguan" className="text-base  font-bold">Nama Tugas</Label>
                                </div>
                                <TextInput id="nama_tugas_mingguan" name="nama_tugas_mingguan" type="text" placeholder="Tugas minggu ke-1, etc.." />
                            </div>
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="indikator_penilaian" className="text-base  font-bold">Sub CPMK</Label>
                            </div>
                            <Dropdown label="-- Pilih Indikator Penilaian --" size="lg" color={"light"} className="w-full justify-between">
                                {
                                    listDosen.map((data, index) => (
                                        <DropdownItem id="indikator_penilaian" key={index} size="lg" color={"light"}>{data}</DropdownItem>
                                    ))
                                }
                            </Dropdown>
                        </div>

                        <div>
                            <div className="mb-2">
                                <Label htmlFor="uraian_tugas" className="text-base font-bold">Uraian Tugas</Label>
                            </div>
                            <Textarea id="uraian_tugas" name="uraian_tugas" className="rounded-lg p-3 border w-full" rows="4" placeholder="isi uraian tugas" />

                        </div>

                        <div>
                            <div className="mb-2">
                                <Label htmlFor="langkah_pengerjaan_tugas" className="text-base font-bold">Langkah Pengerjaan Tugas</Label>
                            </div>
                            <Textarea id="langkah_pengerjaan_tugas" name="langkah_pengerjaan_tugas" className="rounded-lg p-3 border w-full" rows="4" placeholder="isi langkah pengerjaan tugas" />
                        </div>

                        <div>
                            <div className="mb-2">
                                <Label htmlFor="uraian_tugas" className="text-base font-bold">Bentuk Format Luaran</Label>
                            </div>
                            <Textarea id="uraian_tugas" name="uraian_tugas" className="rounded-lg p-3 border w-full" rows="4" placeholder="isi uraian tugas" />
                        </div>

                        <div>
                            <div className="mb-2">
                                <Label htmlFor="rubrik_penilaian" className="text-base font-bold">Rubrik Penilaian</Label>
                            </div>
                            <Textarea id="rubrik_penilaian" name="rubrik_penilaian" className="rounded-lg p-3 border w-full" rows="4" placeholder="isi rubrik penilaian" />
                        </div>

                    </form>
                </div>
            </Card>
        </div>
    )
}