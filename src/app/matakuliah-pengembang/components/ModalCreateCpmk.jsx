import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { Button, Label, Modal, ModalBody, ModalFooter, ModalHeader, Textarea, TextInput } from 'flowbite-react';
import { useEffect } from 'react';

export default function ModalCreateCpmk({ isOpen, onClose, mataKuliahId, cplId, onSuccess }) {
    // const [kodeCpmk, setKodeCpmk] = useState('');
    // const [deskripsiCpmk, setDeskripsiCpmk] = useState('');

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const res = await fetch('http://192.168.54.59:3001/api_obe/cpmk', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    MataKuliahId: mataKuliahId,
                    CplId: cplId,
                    KodeCpmk: data.KodeCpmk,
                    DeskripsiCpmk: data.DeskripsiCpmk,
                }),
            });

            if (!res.ok) throw new Error('Gagal menyimpan CPMK');

            Swal.fire({
                icon: 'success',
                title: 'Berhasil!',
                text: 'CPMK berhasil ditambahkan.',
            });

            reset(); // reset form setelah submit
            onSuccess(); // refresh data
            onClose(); // tutup modal
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Gagal!',
                text: 'Terjadi kesalahan saat menyimpan CPMK.',
            });
        }
    };

    useEffect(() => {
        if (!isOpen) {
            reset();
        }
    }, [isOpen, reset]);

    return (
        <Modal dismissible show={isOpen} onClose={onClose}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <ModalHeader className="border border-gray-200">Tambah data CPMK</ModalHeader>
                <ModalBody>
                    <div className="space-y-5">
                        <div>
                            <div className="mb-2 block">
                                <Label className="text-base font-bold">Kode CPMK</Label>
                            </div>
                            <TextInput
                                id="KodeCpmk"
                                placeholder={
                                    errors.KodeCpmk
                                        ? errors.KodeCpmk.message
                                        : "Masukkan Kode CPMK"
                                }
                                {...register('KodeCpmk', { required: 'Kode CPMK wajib diisi' })}
                                color={errors.KodeCpmk ? 'failure' : 'gray'}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label className="text-base font-bold">Deskripsi CPMK</Label>
                            </div>
                            <Textarea
                                rows={5}
                                id="DeskripsiCpmk"
                                placeholder={
                                    errors.DeskripsiCpmk
                                        ? errors.DeskripsiCpmk.message
                                        : "Masukkan deskripsi CPMK"
                                }
                                {...register('DeskripsiCpmk', { required: 'Deskripsi CPMK wajib diisi' })}
                                color={errors.DeskripsiCpmk ? 'failure' : 'gray'}
                            />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter className="justify-end">
                    <Button className="cursor-pointer" color="green" type="submit">Simpan</Button>
                    <Button className="cursor-pointer" color="red" onClick={onClose} outline>
                        Batal
                    </Button>
                </ModalFooter>
            </form>
        </Modal>
    );
}