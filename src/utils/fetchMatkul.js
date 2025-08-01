import { API_BASE_OBE } from "./config";

const getMatkulByProdiAndKurikulum = async (prodiId, kurikulumId) => {
    const params = new URLSearchParams({
        ProdiId: prodiId,
        KurikulumId: kurikulumId,
    });

    // const response = await fetch(`${API_BASE_OBE}/dbuai/matakuliah/prodi/kurikulum?${params.toString()}`, { // KODE ASLI, sementara pakai proxy dulu
    const response = await fetch(`/api/fetch-matkul?${params.toString()}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('Gagal mengambil data Mata Kuliah by Prodi dan Kurikulum');
    }

    return await response.json();
};

const getMatkulById = async (id) => {
    const response = await fetch(`${API_BASE_OBE}/dbuai/matakuliah/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if (!response.ok) {
        throw new Error('Gagal mengambil data Mata Kuliah by ID');
    }
    return await response.json();
}

export { getMatkulByProdiAndKurikulum, getMatkulById };    