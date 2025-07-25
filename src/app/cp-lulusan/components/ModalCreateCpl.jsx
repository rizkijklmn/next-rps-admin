'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { HiPlus, HiPlusCircle } from 'react-icons/hi';
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
            const response = await fetch('http://192.168.54.59:3001/api_obe/cpl', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) throw new Error('Gagal menambahkan CPL');

            const result = await response.json();
            console.log('Berhasil:', result);
            alert('CPL berhasil ditambahkan!');
            reset();
            setOpenModal(false);
        } catch (error) {
            console.error(error.message);
            // alert('Terjadi kesalahan saat menambahkan CPL');
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
                <HiPlus className="mr-1"/>
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
                            <Button type="submit">Simpan</Button>
                            <Button color="gray" onClick={() => setOpenModal(false)}>Batal</Button>
                        </div>
                    </form>
                </ModalBody>
            </Modal>
        </>
    );
};

export default ModalCreateCpl;
