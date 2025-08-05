import Swal from "sweetalert2";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Label, Modal, ModalBody, ModalFooter, ModalHeader, Textarea, TextInput } from "flowbite-react";

export default function ModalEditPl({ isOpen, onClose, plData, onUpdated }) {
    // const [kode, setKode] = useState("");
    // const [deskripsi, setDeskripsi] = useState("");
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
        if ((plData)) {
            reset({
                Kode: plData.Kode || "",
                Deskripsi: plData.Deskripsi || "",
            });
        }
    }, [plData, reset]);

    const onSubmit = async (formData) => {
        const isKodeSama = formData.Kode === plData.Kode;
        const isDeskripsiSama = formData.Deskripsi === plData.Deskripsi;

        // menampilkan notif jika tidak ada perubahan data
        if (isKodeSama && isDeskripsiSama) {
            Swal.fire({
                icon: "info",
                title: "Tidak ada perubahan",
                text: "Data PL tidak mengalami perubahan.",
                timer: 1500,
                showConfirmButton: false,
            });
            onClose();
            return; // hentikan proses update
        }

        try {
            const resKode = await fetch(`/api/put-pl-kode/${plData.ID}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify({ Kode: formData.Kode }),
            });

            const resDeskripsi = await fetch(`/api/put-pl-deskripsi/${plData.ID}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify({ Deskripsi: formData.Deskripsi }),
            });

            if (resKode.ok && resDeskripsi.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Berhasil!',
                    text: 'Data PL berhasil diperbarui.',
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
            console.error('Gagal update data PL', error);
            Swal.fire({
                icon: 'error',
                title: 'Gagal!',
                text: 'Terjadi kesalahan saat memperbarui data PL.',
            });
        }
    };

    const handleBatal = () => {
        reset({
            Kode: plData?.Kode || "",
            Deskripsi: plData?.Deskripsi || "",
        });
        onClose();
    };

    return (
        <Modal dismissible show={isOpen} onClose={handleBatal}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <ModalHeader className="border border-gray-200">Ubah data PL</ModalHeader>
                <ModalBody>
                    <div className="space-y-5">
                        <div>
                            <Label className="mb-2 block text-base font-bold">
                                Kode PL
                            </Label>
                            <TextInput
                                id="kode"
                                // value={kode}
                                // onChange={(e) => setKode(e.target.value)}
                                placeholder={
                                    errors.Kode
                                        ? errors.Kode.message
                                        : "Masukkan Kode PL"
                                }
                                {...register("Kode", { required: "Kode PL wajib diisi" })}
                                color={errors.Kode ? "failure" : "gray"}
                            // helperText={errors.Kode?.message}
                            // required
                            />
                        </div>
                        <div>
                            <Label className="mb-2 block text-base font-bold">
                                Deskripsi PL
                            </Label>
                            <Textarea
                                id="deskripsi"
                                rows={5}
                                // value={deskripsi}
                                // onChange={(e) => setDeskripsi(e.target.value)}
                                placeholder={
                                    errors.Deskripsi
                                        ? errors.Deskripsi.message
                                        : "Masukkan Deskripsi PL"
                                }
                                {...register("Deskripsi", { required: "Deskripsi PL wajib diisi" })}
                                color={errors.Deskripsi ? "failure" : "gray"}
                            // helperText={errors.Deskripsi?.message}
                            // required
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