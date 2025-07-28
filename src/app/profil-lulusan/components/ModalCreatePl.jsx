'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { HiPlus } from 'react-icons/hi';
import { Modal, Button, TextInput, Textarea, ModalHeader, ModalBody, ModalFooter, Label, Checkbox } from 'flowbite-react';
import Swal from 'sweetalert2';

const ModalCreatePl = ({ kurikulumId, prodiId, onSuccess }) => {
    const [openModal, setOpenModal] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        const payload = {
            Kode: data.KodePl,
            Deskripsi: data.DeskripsiPl,
            KurikulumId: kurikulumId,
            ProdiId: prodiId,
        };

        try {
            const response = await fetch('http://192.168.54.59:3001/api_obe/pl', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
            if (!response.ok) throw new Error('Gagal menambahkan PL');
            const result = await response.json();
            console.log('Berhasil:', result);
            Swal.fire({
                icon: 'success',
                title: 'Berhasil!',
                text: 'PL berhasil ditambahkan!',
                timer: 1500,
                showConfirmButton: false
            })

            if (onSuccess) onSuccess(); // Refetch data di tabel
            setOpenModal(false);
            reset();
        } catch (error) {
            console.error(error.message);
            Swal.fire({
                icon: 'warning',
                title: 'Oops!',
                text: 'Terjadi kesalahan saat menambahkan PL',
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
                    <ModalHeader className="border border-gray-200">Tambah data PL</ModalHeader>
                    <ModalBody>
                        <div className="space-y-5">
                            <div>
                                <div className="mb-2 block">
                                    <Label className="text-base font-bold">Kode PL</Label>
                                </div>
                                <TextInput
                                    id="KodePl"
                                    placeholder={
                                        errors.KodePl
                                            ? errors.KodePl.message
                                            : "Masukkan Kode PL"
                                    }
                                    {...register('KodePl', { required: 'Kode PL wajib diisi' })}
                                    color={errors.KodePl ? 'failure' : 'grey'}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label className="text-base font-bold">Deskripsi PL</Label>
                                </div>
                                <Textarea
                                    rows={5}
                                    id="DeskripsiPl"
                                    placeholder={
                                        errors.DeskripsiPl
                                            ? errors.DeskripsiPl.message
                                            : "Masukkan deskripsi PL"
                                    }
                                    {...register('DeskripsiPl', { required: 'Deskripsi PL wajib diisi' })}
                                    color={errors.DeskripsiPl ? 'failure' : 'grey'}
                                />
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter className="justify-end">
                        <Button className="cursor-pointer" color="green" type="submit">Simpan</Button>
                        <Button className="cursor-pointer" color="red" onClick={() => { setOpenModal(false), reset() }} outline>Batal</Button>
                    </ModalFooter>
                </form>
            </Modal >
        </>
    );
};

export default ModalCreatePl;