import Swal from "sweetalert2";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Label, Modal, ModalBody, ModalFooter, ModalHeader, Textarea, TextInput } from "flowbite-react";

export default function ModalEditCpl({ isOpen, onClose, cplData, onUpdated }) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            Kode: "",
            Deskripsi: "",
        }
    });

    useEffect(() => {
        if ((cplData)) {
            reset({
                Kode: cplData.KodeCpl || "",
                Deskripsi: cplData.DeskripsiCpl || "",
            });
        }
    }, [cplData, reset]);

    const onSubmit = async (formData) => {
        const isKodeCplSama = formData.Kode === cplData.KodeCpl;
        const isDeskripsiCplSama = formData.Deskripsi === cplData.DeskripsiCpl;

        // menampilkan notif jika tidak ada perubahan data
        if (isKodeCplSama && isDeskripsiCplSama) {
            Swal.fire({
                icon: "info",
                title: "Tidak ada perubahan",
                text: "Data CPL tidak mengalami perubahan.",
                timer: 1500,
                showConfirmButton: false,
            });
            onClose();
            return; // hentikan proses update
        }

        try {
            const resKode = await fetch(`/api/put-cpl-kode/${cplData.ID}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify({ KodeCpl: formData.Kode }),
            });

            const resDeskripsi = await fetch(`/api/put-cpl-deskripsi/${cplData.ID}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify({ DeskripsiCpl: formData.Deskripsi }),
            });

            if (resKode.ok && resDeskripsi.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Berhasil!',
                    text: 'Data CPL berhasil diperbarui.',
                    timer: 1500,
                    showConfirmButton: false,
                });
                onUpdated();
                reset();
                onClose();
            } else {
                throw new Error('Gagal update salah satu data');
            }
        } catch (error) {
            console.error('Gagal update data CPL', error);
            Swal.fire({
                icon: 'error',
                title: 'Gagal!',
                text: 'Terjadi kesalahan saat memperbarui data CPL.',
            });
        }
    };

    const handleBatal = () => {
        reset({
            Kode: cplData?.KodeCpl || "",
            Deskripsi: cplData?.DeskripsiCpl || "",
        });
        onClose();
    };

    return (
        <Modal dismissible show={isOpen} onClose={handleBatal}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <ModalHeader className="border border-gray-200">Ubah data CPL</ModalHeader>
                <ModalBody>
                    <div className="space-y-5">
                        <div>
                            <Label className="mb-2 block text-base font-bold">
                                Kode CPL
                            </Label>
                            <TextInput
                                id="kode"
                                placeholder={
                                    errors.Kode
                                        ? errors.Kode.message
                                        : "Masukkan Kode CPL"
                                }
                                {...register("Kode", { required: "Kode CPL wajib diisi" })}
                                color={errors.Kode ? "failure" : "gray"}
                            />
                        </div>
                        <div>
                            <Label className="mb-2 block text-base font-bold">
                                Deskripsi CPL
                            </Label>
                            <Textarea
                                id="deskripsi"
                                rows={5}
                                placeholder={errors.Deskripsi ? errors.Deskripsi.message : "Masukkan Deskripsi CPL"}
                                {...register("Deskripsi", { required: "Deskripsi CPL wajib diisi" })}
                                color={errors.Deskripsi ? "failure" : "gray"}
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