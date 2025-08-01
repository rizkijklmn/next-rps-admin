// src/utils/fetchCpl.js
import { API_BASE_OBE } from "./config";

const getCplByProdiAndKurikulum = async (prodiId, kurikulumId) => {
    const params = new URLSearchParams({
        ProdiId: prodiId,
        KurikulumId: kurikulumId,
    });

    // KODE ASLI
    const response = await fetch(`${API_BASE_OBE}/api_obe/cpl/prodi/kurikulum?${params.toString()}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    // KODE DENGAN PROXY
    // const response = await fetch(`/api/fetch-cpl?${params.toString()}`, {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    // });

    if (!response.ok) {
        throw new Error('Gagal mengambil data CPL');
    }

    return await response.json();
};

const getCplById = async (id) => {
    const response = await fetch(`${API_BASE_OBE}/api_obe/cpl/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if (!response.ok) {
        throw new Error('Gagal mengambil data CPL by ID');
    }
    return await response.json();
}

export { getCplByProdiAndKurikulum, getCplById };