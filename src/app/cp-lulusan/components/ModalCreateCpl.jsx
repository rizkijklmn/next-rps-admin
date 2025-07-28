'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { HiPlus } from 'react-icons/hi';
import { Modal, Button, TextInput, Textarea, ModalHeader, ModalBody, ModalFooter, Label, Checkbox } from 'flowbite-react';
import Swal from 'sweetalert2';

const ModalCreateCpl = ({ kurikulumId, prodiId }) => {
    const [openModal, setOpenModal] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        const payload = {
            KodeCpl: data.KodeCpl,
            DeskripsiCpl: data.DeskripsiCpl,
            KurikulumId: kurikulumId,
            ProdiId: prodiId,
        };

        try {
            const response = await fetch('http://192.168.54.59:3001/api_obe/cpl', { // KODE ASLI
            // const response = await fetch('/api/post-cpl', { // KODE DENGAN PROXY
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
            if (!response.ok) throw new Error('Gagal menambahkan CPL');
            const result = await response.json();
            console.log('Berhasil:', result);
            Swal.fire({
                icon: 'success',
                title: 'Berhasil!',
                text: 'CPL berhasil ditambahkan!',
                timer: 1500,
                showConfirmButton: false
            })
            setOpenModal(false);
            reset();
        } catch (error) {
            console.error(error.message);
            Swal.fire({
                icon: 'warning',
                title: 'Oops!',
                text: 'Terjadi kesalahan saat menambahkan CPL',
            })
        }
    };

    return (
        <>
            <Button className="cursor-pointer flex items-center" color="green" onClick={() => setOpenModal(true)}>
                <HiPlus className="mr-1" />
                Tambah
            </Button>
            <Modal dismissible show={openModal} onClose={() => { setOpenModal(false), reset() }}>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <ModalHeader className="border border-gray-200">Tambah data CPL</ModalHeader>
                    <ModalBody>
                        <div className="space-y-5">
                            <div>
                                <div className="mb-2 block">
                                    <Label className="text-base font-bold">Kode CPL</Label>
                                </div>
                                <TextInput
                                    id="KodeCpl"
                                    placeholder={
                                        errors.KodeCpl
                                            ? errors.KodeCpl.message
                                            : "Masukkan Kode CPL"
                                    }
                                    {...register('KodeCpl', { required: 'Kode CPL wajib diisi' })}
                                    color={errors.KodeCpl ? 'failure' : 'grey'}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label className="text-base font-bold">Deskripsi CPL</Label>
                                </div>
                                <Textarea
                                    rows={5}
                                    id="DeskripsiCpl"
                                    placeholder={
                                        errors.DeskripsiCpl
                                            ? errors.DeskripsiCpl.message
                                            : "Masukkan deskripsi CPL"
                                    }
                                    {...register('DeskripsiCpl', { required: 'Deskripsi CPL wajib diisi' })}
                                    color={errors.DeskripsiCpl ? 'failure' : 'grey'}
                                />
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter className="justify-end">
                        <Button className="cursor-pointer" color="green" type="submit">Simpan</Button>
                        <Button className="cursor-pointer" color="red" onClick={() => { setOpenModal(false), reset() }} outline>Batal</Button>
                    </ModalFooter>
                </form>
                {/* <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <TextInput
                            id="KodeCpl"
                            placeholder="Masukkan kode CPL"
                            {...register('KodeCpl', { required: 'Kode CPL wajib diisi' })}
                            color={errors.KodeCpl ? 'failure' : 'gray'}
                        />
                        {errors.KodeCpl && <p className="text-red-500 text-sm">{errors.KodeCpl.message}</p>}
                        <Textarea
                            rows={4}
                            id="DeskripsiCpl"
                            placeholder="Masukkan deskripsi CPL"
                            {...register('DeskripsiCpl', { required: 'Deskripsi CPL wajib diisi' })}
                            color={errors.DeskripsiCpl ? 'failure' : 'gray'}
                        />
                        {errors.DeskripsiCpl && <p className="text-red-500 text-sm">{errors.DeskripsiCpl.message}</p>}
                        <div className="flex justify-end gap-2">
                            <Button className="cursor-pointer" type="submit">Simpan</Button>
                            <Button className="cursor-pointer" color="red" onClick={() => { setOpenModal(false), reset() }} outline>Batal</Button>
                        </div>
                    </form> */}
                {/* </ModalBody > */}
            </Modal >
        </>
    );
};

export default ModalCreateCpl;