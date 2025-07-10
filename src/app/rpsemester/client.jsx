// app/dashboard/client.jsx
"use client"

import { Card, Dropdown, DropdownItem, Label, TextInput } from "flowbite-react"

export default function RPSemesterClientSide() {

    const listDosen = ["Dosen 1", "Dosen 2", "Dosen 4", "Dosen 5", "Dosen 6", "Dosen 7", "Dosen 8"];

    return (
        <div className="mx-10 my-3">
            <div className="font-bold text-3xl pb-5">
                <p>Halaman Rencana Pembelajaran Semester</p>
            </div>

            <Card>
                <form className="flex flex-col w-1/2 gap-5" action="">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="tanggal_penyusunan">Tanggal Penyusunan RPS</Label>
                        </div>
                        <TextInput type="date" />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="dosen_pengembang_rps">Dosen Pengembang RPS</Label>
                        </div>
                        <Dropdown label="-- Pilih Dosen --" size="lg" color={"light"} className="w-full justify-between">
                            {
                                listDosen.map((dosen, i_dosen) => (
                                    <DropdownItem key={i_dosen} label={dosen} size="lg" color={"light"} className="w-full justify-between">{dosen}</DropdownItem>
                                ))
                            }
                        </Dropdown>
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="dosen_rmk">Dosen Rumpun Mata Kuliah</Label>
                        </div>
                        <Dropdown label="-- Pilih Dosen --" size="lg" color={"light"} className="w-full justify-between">
                            {
                                listDosen.map((dosen, i_dosen) => (
                                    <DropdownItem key={i_dosen} label={dosen} size="lg" color={"light"} className="w-full justify-between">{dosen}</DropdownItem>
                                ))
                            }
                        </Dropdown>
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="dosen_kaprodi">Kepala Program Studi</Label>
                        </div>
                        <Dropdown label="-- Pilih Dosen --" size="lg" color={"light"} className="w-full justify-between">
                            {
                                listDosen.map((dosen, i_dosen) => (
                                    <DropdownItem key={i_dosen} label={dosen} size="lg" color={"light"} className="w-full justify-between">{dosen}</DropdownItem>
                                ))
                            }
                        </Dropdown>
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="dosen_pengampu">Dosen Pengampu Mata Kuliah</Label>
                        </div>
                        <Dropdown label="-- Pilih Dosen --" size="lg" color={"light"} className="w-full justify-between">
                            {
                                listDosen.map((dosen, i_dosen) => (
                                    <DropdownItem key={i_dosen} label={dosen} size="lg" color={"light"} className="w-full justify-between">{dosen}</DropdownItem>
                                ))
                            }
                        </Dropdown>
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email">Deskripsi Mata Kuliah</Label>
                        </div>
                        <textarea className="rounded-lg p-3 border w-full" rows="4" placeholder="Deskripsi Mata Kuliah"/>
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email">Bahan Kajian</Label>
                        </div>
                        <textarea className="rounded-lg p-3 border w-full" rows="4" placeholder="Deskripsi Mata Kuliah"/>
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email">Pustaka Utama</Label>
                        </div>
                        <textarea className="rounded-lg p-3 border w-full" rows="4" placeholder="Deskripsi Mata Kuliah"/>
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email">Pustaka Pendukung</Label>
                        </div>
                        <textarea className="rounded-lg p-3 border w-full" rows="4" placeholder="Deskripsi Mata Kuliah"/>
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="matakuliah_prasyarat">Mata Kuliah Prasyarat</Label>
                        </div>
                        <Dropdown label="-- Pilih Dosen --" size="lg" color={"light"} className="w-full justify-between">
                            {
                                listDosen.map((dosen, i_dosen) => (
                                    <DropdownItem key={i_dosen} label={dosen} size="lg" color={"light"} className="w-full justify-between">{dosen}</DropdownItem>
                                ))
                            }
                        </Dropdown>
                    </div>

                </form>
            </Card>
        </div>
    )
}