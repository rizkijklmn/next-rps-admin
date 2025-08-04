// app/matakuliah_pengembangrps/client.jsx
"use client"

import { Button, Card, Checkbox, FooterDivider, HR, Label, TabItem, Tabs } from "flowbite-react"
import { HiCheck, HiClipboardCheck, HiClipboardList, } from "react-icons/hi"
import { listCPL } from "../components/Data"
import { IoPencil } from "react-icons/io5"
import { ButtonCustom } from "../components/Button"

export default function MatakuliahPengembangClientSide() {
    return (
        <div className="mx-10 my-3">
            {/* <div className="font-bold text-3xl pb-5">
                    <p>Halaman CPMK</p>
                </div> */}

            <p className="text-xl font-bold pb-5 tracking-normal text-gray-900 dark:text-white">
                Halaman Detail Mata Kuliah untuk Pengembang RPS
            </p>

            <div className="space-y-4">
                <Card>
                    Detail MK ...
                </Card>

                <Card>
                    <Tabs aria-label="RPS Tabs" variant="fullWidth">
                        <TabItem active={{ className: "bg-gray-200" }} title="Capaian Pembelajaran Lulusan" icon={HiCheck} className="cursor-pointer">
                            <p className="text-base font-bold tracking-normal text-gray-900 dark:text-white my-5">
                                Capaian Pembelajaran Lulusan yang Dibebankan pada Mata Kuliah
                            </p>
                            <table className="table-auto w-full min-w-24 text-sm  text-gray-600 dark:text-white">
                                <thead className="text-base text-black bg-gray-200 border-y-1 border-y-gray-200 dark:text-white dark:bg-gray-700 dark:border-gray-700">
                                    <tr className="text-center">
                                        <th className="px-6 py-3">Pilih</th>
                                        <th className="px-6 py-3">Kode CPL</th>
                                        <th className="px-6 py-3">Rumusan Capaian Pembelajaran Lulusan</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listCPL.map((item) => {
                                        return (
                                            <tr key={item.id} className="border-y-1 border-gray-200 dark:border-gray-700">
                                                <td className="flex items-center justify-center px-6 py-6">
                                                    <Checkbox key={item.id} id={item.id} label={item.kodecpl} />
                                                </td>
                                                <td className="text-center">
                                                    <Label htmlFor={item.id}>{item.kodecpl}</Label>
                                                </td>
                                                <td className="items-center justify-center px-6 py-3"  >
                                                    <Label htmlFor={item.id}>{item.rumusancpl}</Label>
                                                </td>

                                            </tr>
                                        )
                                    })
                                    }
                                </tbody>
                            </table>
                        </TabItem>
                        <TabItem title="Capaian Pembelakaran MK" icon={HiClipboardCheck}>
                            <p className="text-base font-bold tracking-normal text-gray-900 dark:text-white my-5">
                                Capaian Pembelajaran Mata Kuliah
                            </p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio maxime, saepe exercitationem voluptates libero vitae animi odit ipsam praesentium cupiditate?
                        </TabItem>
                        <TabItem title="Sub Capaian Pembelajaran MK" icon={HiClipboardCheck}>
                            <p className="text-base font-bold tracking-normal text-gray-900 dark:text-white my-5">
                                Sub Capaian Pembelajaran Mata Kuliah
                            </p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui suscipit laboriosam molestiae optio placeat in obcaecati eligendi dolore impedit facere.
                        </TabItem>
                        <TabItem title="Rencana Pembelajaran Mingguan" icon={HiClipboardList}>
                            <p className="text-base font-bold tracking-normal text-gray-900 dark:text-white my-5">
                                Rencana Pembelajaran Mingguan
                            </p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis ea provident vitae harum consequuntur, nam rem omnis veritatis architecto cumque.
                        </TabItem>
                        <TabItem title="Rencana Tugas Mahasiswa" icon={HiClipboardList}>
                            <p className="text-base font-bold tracking-normal text-gray-900 dark:text-white my-5">
                                Rencana Tugas Mahasiswa
                            </p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptate. Ex, odio? Incidunt, porro? Perspiciatis earum dicta pariatur quidem corporis.
                        </TabItem>
                    </Tabs>
                </Card>

                <Card>
                    <ButtonCustom
                        type={"button"}
                        className="w-full cursor-pointer"
                        btnColor="green"
                        text="Simpan" />
                </Card>
            </div>
        </div>
    )
}