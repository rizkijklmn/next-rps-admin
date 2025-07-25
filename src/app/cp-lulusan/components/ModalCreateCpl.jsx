'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { HiPlus } from 'react-icons/hi';
import { Modal, Button, TextInput, Textarea, ModalHeader, ModalBody } from 'flowbite-react';
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
            const response = await fetch('/api/post-cpl', {
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
            reset();
            setOpenModal(false);
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

            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <ModalHeader>Tambah CPL Baru</ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <TextInput
                            id="KodeCpl"
                            placeholder="Masukkan kode CPL"
                            {...register('KodeCpl', { required: 'Kode CPL wajib diisi' })}
                            color={errors.KodeCpl ? 'failure' : 'gray'}
                        />
                        {errors.KodeCpl && <p className="text-red-500 text-sm">{errors.KodeCpl.message}</p>}

                        <Textarea
                            id="DeskripsiCpl"
                            placeholder="Masukkan deskripsi CPL"
                            {...register('DeskripsiCpl', { required: 'Deskripsi CPL wajib diisi' })}
                            color={errors.DeskripsiCpl ? 'failure' : 'gray'}
                        />
                        {errors.DeskripsiCpl && <p className="text-red-500 text-sm">{errors.DeskripsiCpl.message}</p>}

                        <div className="flex justify-end gap-2">
                            <Button className="cursor-pointer" type="submit">Simpan</Button>
                            <Button className="cursor-pointer" color="red" onClick={() => setOpenModal(false)} outline>Batal</Button>
                        </div>
                    </form>
                </ModalBody>
            </Modal>
        </>
    );
};

export default ModalCreateCpl;