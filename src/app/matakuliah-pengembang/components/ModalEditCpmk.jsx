import Swal from "sweetalert2";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Label, Modal, ModalBody, ModalFooter, ModalHeader, Textarea, TextInput } from "flowbite-react";

export default function ModalEditCpmk({ isOpen, onClose, cpmk, onUpdated }) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            KodeCpmk: "",
            DeskripsiCpmk: "",
        }
    });

    useEffect(() => {
        if ((cpmk)) {
            reset({
                KodeCpmk: cpmk.KodeCpmk || "",
                DeskripsiCpmk: cpmk.DeskripsiCpmk || "",
            });
        }
    }, [cpmk, reset]);

    const onSubmit = async (formData) => {
        const isKodeCpmkSama = formData.KodeCpmk === cpmk.KodeCpmk;
        const isDeskripsiCpmkSama = formData.DeskripsiCpmk === cpmk.DeskripsiCpmk;

        // menampilkan notif jika tidak ada perubahan data
        if (isKodeCpmkSama && isDeskripsiCpmkSama) {
            Swal.fire({
                icon: "info",
                title: "Tidak ada perubahan",
                text: "Data CPMK tidak mengalami perubahan.",
                timer: 1500,
                showConfirmButton: false,
            });
            onClose();
            return; // hentikan proses update
        }

        try {
            const res = await fetch(`http://192.168.54.59:3001/api_obe/cpmk/${cpmk.ID}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    MataKuliahId: cpmk.MataKuliahId,
                    CplId: cpmk.CplId,
                    KodeCpmk: formData.KodeCpmk,
                    DeskripsiCpmk: formData.DeskripsiCpmk
                })
            })

            if (res.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Berhasil!',
                    text: 'Data CPMK berhasil diperbarui.',
                    timer: 1500,
                    showConfirmButton: false,
                });
                onUpdated(formData);
                reset();
                onClose();
            } else {
                throw new Error('Gagal update CPMK');
            }
        } catch (error) {
            console.error('Gagal update CPMK', error);
            Swal.fire({
                icon: 'error',
                title: 'Gagal!',
                text: 'Terjadi kesalahan saat memperbarui data CPMK.',
            });
        }
    };

    const handleBatal = () => {
        reset({
            KodeCpmk: cpmk?.KodeCpmk || "",
            DeskripsiCpmk: cpmk?.DeskripsiCpmk || "",
        });
        onClose();
    };

    return (
        <Modal dismissible show={isOpen} onClose={handleBatal}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <ModalHeader className="border border-gray-200">Ubah data CPMK</ModalHeader>
                <ModalBody>
                    <div className="space-y-5">
                        <div>
                            <Label className="mb-2 block text-base font-bold">Kode CPMK</Label>
                            <TextInput
                                id="kodeCpmk"
                                placeholder={
                                    errors.KodeCpmk
                                        ? errors.KodeCpmk.message
                                        : "Masukkan Kode CPMK"
                                }
                                {...register("KodeCpmk", { required: "Kode CPMK wajib diisi" })}
                                color={errors.KodeCpmk ? "failure" : "gray"}
                            />
                        </div>
                        <div>
                            <Label className="mb-2 block text-base font-bold">Deskripsi CPMK</Label>
                            <Textarea
                                id="deskripsiCpmk"
                                rows={5}
                                placeholder={errors.DeskripsiCpmk ? errors.DeskripsiCpmk.message : "Masukkan Deskripsi CPMK"}
                                {...register("DeskripsiCpmk", { required: "Deskripsi CPMK wajib diisi" })}
                                color={errors.DeskripsiCpmk ? "failure" : "gray"}
                            />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter className="justify-end">
                    <Button className="cursor-pointer" color="green" onClick={handleSubmit(onSubmit)}>
                        Simpan
                    </Button>
                    <Button className="cursor-pointer" color="red" onClick={handleBatal} outline>
                        Batal
                    </Button>
                </ModalFooter>
            </form>
        </Modal>
    )
}