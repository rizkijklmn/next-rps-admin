// src/utils/fetchMatkul.js
import { API_BASE_DBUAI } from "./config";

const getMatkulByProdiAndKurikulum = async (prodiId, kurikulumId) => {
    const params = new URLSearchParams({
        ProdiId: prodiId,
        KurikulumId: kurikulumId,
    });

    // const response = await fetch(`${API_BASE_DBUAI}/dbuai/matakuliah/prodi/kurikulum?${params.toString()}`, { // KODE ASLI, sementara pakai proxy dulu
    const response = await fetch(`/api/fetch-matkul-by-prodi-and-kurikulum?${params.toString()}`, {
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
    // const response = await fetch(`${API_BASE_DBUAI}/dbuai/matakuliah/${id}`, { // KODE ASLI, sementara pakei proxy dulu
    const response = await fetch(`/api/fetch-matkul-by-id/${id}`, {
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