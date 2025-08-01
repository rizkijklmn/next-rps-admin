// app/rpsemester/client.jsx
"use client"

import { Card, Dropdown, DropdownItem, Label, TextInput, HR, Textarea } from "flowbite-react"
import { listDosen, listMatakuliah } from "../components/Data"

export default function RPSemesterClientSide() {

    return (
        <div className="mx-10 my-3">
            {/* <div className="font-bold text-3xl pb-5">
                <p>Halaman Rencana Pembelajaran Semester</p>
            </div> */}

            <p className="text-xl font-bold pb-5 tracking-normal text-gray-900 dark:text-white">
                Halaman Rencana Pembelajaran Semester
            </p>

            <Card>

                <div className="flex w-full justify-center">
                    <form className="flex flex-col w-3/4 gap-5">

                        {/* Tanggal penyusunan RPS */}
                        <div className="flex items-center gap-10 justify-center mb-0">
                            <Label htmlFor="tanggal_penyusunan" className="text-base font-bold">Tanggal Penyusunan RPS</Label>
                            <TextInput type="date" className="w-54.5" />
                        </div>

                        <HR className="mt-5 mb-5" />

                        {/* Dropdown pemilihan dosen */}
                        <div className="grid gap-y-5 gap-x-10 mb-0 md:grid-cols-2">
                            <div>
                                <div className="mb-2">
                                    <Label htmlFor="dosen_pengembang_rps" className="text-base font-bold">Dosen Pengembang RPS</Label>
                                </div>
                                <Dropdown label="-- Pilih Dosen --" size="lg" color={"light"} className="w-full justify-between">
                                    {
                                        listDosen.map((dosen, i_dosen) => (
                                            <DropdownItem key={i_dosen} label={dosen} size="lg" color={"light"}>{dosen}</DropdownItem>
                                        ))
                                    }
                                </Dropdown>
                            </div>

                            <div>
                                <div className="mb-2">
                                    <Label htmlFor="dosen_rmk" className="text-base font-bold">Dosen Rumpun Mata Kuliah</Label>
                                </div>
                                <Dropdown id="dosen_rmk" name="dosen_rmk" label="-- Pilih Dosen --" size="lg" color={"light"} className="w-full justify-between">
                                    {
                                        listDosen.map((dosen, i_dosen) => (
                                            <DropdownItem key={i_dosen} label={dosen} size="lg" color={"light"} className="w-full justify-between">{dosen}</DropdownItem>
                                        ))
                                    }
                                </Dropdown>
                            </div>

                            <div>
                                <div className="mb-2">
                                    <Label htmlFor="dosen_kaprodi" className="text-base font-bold">Kepala Program Studi</Label>
                                </div>
                                <Dropdown id="dosen_kaprodi" name="dosen_kaprodi" label="-- Pilih Dosen --" size="lg" color={"light"} className="w-full justify-between">
                                    {
                                        listDosen.map((dosen, i_dosen) => (
                                            <DropdownItem key={i_dosen} label={dosen} size="lg" color={"light"} className="w-full justify-between">{dosen}</DropdownItem>
                                        ))
                                    }
                                </Dropdown>
                            </div>

                            <div>
                                <div className="mb-2">
                                    <Label htmlFor="dosen_pengampu_mk" className="text-base font-bold">Dosen Pengampu Mata Kuliah</Label>
                                </div>
                                <Dropdown id="dosen_pengampu_mk" name="dosen_pengampu_mk" label="-- Pilih Dosen --" size="lg" color={"light"} className="w-full justify-between">
                                    {
                                        listDosen.map((data, index) => (
                                            <DropdownItem key={index} size="lg" color={"light"} className="w-full justify-between">{data}</DropdownItem>
                                        ))
                                    }
                                </Dropdown>
                            </div>
                        </div>

                        <HR className="mt-5 mb-5" />

                        {/* Isian Detail Mata Kuliah */}
                        <div>
                            <div className="mb-2">
                                <Label htmlFor="deskripsi_mata_kuliah" className="text-base font-bold">Deskripsi Mata Kuliah</Label>
                            </div>
                            <Textarea id="deskripsi_mata_kuliah" name="deskripsi_mata_kuliah" className="rounded-lg p-3 border w-full" rows="4" placeholder="isi deskripsi mata kuliah" />
                        </div>

                        <div>
                            <div className="mb-2">
                                <Label htmlFor="bahan_kajian" className="text-base font-bold">Bahan Kajian</Label>
                            </div>
                            <Textarea id="bahan_kajian" name="bahan_kajian" className="rounded-lg p-3 border w-full" rows="4" placeholder="isi bahan kajian" />
                        </div>

                        <div>
                            <div className="mb-2">
                                <Label htmlFor="pustaka_utama" className="text-base font-bold">Pustaka Utama</Label>
                            </div>
                            <Textarea id="pustaka_utama" name="pustaka_utama" className="rounded-lg p-3 border w-full" rows="4" placeholder="isi pustaka utama" />
                        </div>

                        <div>
                            <div className="mb-2">
                                <Label htmlFor="pustaka_pendukung" className="text-base font-bold">Pustaka Pendukung</Label>
                            </div>
                            <Textarea id="pustaka_pendukung" name="pustaka_pendukung" className="rounded-lg p-3 border w-full" rows="4" placeholder="isi pustaka pendukung" />
                        </div>

                        <div>
                            <div className="mb-2">
                                <Label htmlFor="matakuliah_prasyarat" className="text-base font-bold">Mata Kuliah Prasyarat</Label>
                            </div>
                            <Dropdown id="matakuliah_prasyarat" name="matakuliah_prasyarat" label="-- Pilih Mata Kuliah --" size="lg" color={"light"} className="w-full justify-between">
                                {
                                    listMatakuliah.map((data, index) => (
                                        <DropdownItem key={index} size="lg" color={"light"} className="w-full justify-between">{data.kode_matakuliah} {data.nama_matakuliah}</DropdownItem>
                                    ))
                                }
                            </Dropdown>
                        </div>

                    </form>

                </div>

            </Card>
        </div>
    )
}