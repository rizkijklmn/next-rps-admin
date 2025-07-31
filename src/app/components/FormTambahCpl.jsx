import { API_BASE_OBE } from '@/utils/config';
import { useForm } from 'react-hook-form';
import { TextInput, Textarea, Button } from 'flowbite-react';

const FormTambahCPL = ({ kurikulumId }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        const payload = {
            KodeCpl: data.KodeCpl,
            DeskripsiCpl: data.DeskripsiCpl,
            KurikulumId: kurikulumId,
            ProdiId: 2, // konstanta sementara
        };

        try {
            const response = await fetch(`${API_BASE_OBE}/api_obe/cpl`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error('Gagal menambahkan CPL');
            }

            const result = await response.json();
            console.log('Berhasil:', result);
            reset(); // reset form setelah submit
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <TextInput
                id="KodeCpl"
                placeholder="Masukkan kode CPL"
                {...register('KodeCpl', { required: 'Kode CPL wajib diisi' })}
                color={errors.KodeCpl ? 'failure' : 'gray'}
                helperText={errors.KodeCpl?.message}
            />

            <Textarea
                id="DeskripsiCpl"
                placeholder="Masukkan deskripsi CPL"
                {...register('DeskripsiCpl', { required: 'Deskripsi CPL wajib diisi' })}
                color={errors.DeskripsiCpl ? 'failure' : 'gray'}
                helperText={errors.DeskripsiCpl?.message}
            />

            <Button type="submit">Tambah CPL</Button>
        </form>
    );
};

export default FormTambahCPL;