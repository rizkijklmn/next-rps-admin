// src/utils/fetchPl.js
import { API_BASE_OBE } from "./config";

export const getPlByProdiAndKurikulum = async (prodiId, kurikulumId) => {
    const params = new URLSearchParams({
        ProdiId: prodiId,
        KurikulumId: kurikulumId,
    });

    const response = await fetch(`${API_BASE_OBE}/api_obe/pl/prodi/kurikulum?${params.toString()}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    if (!response.ok) {
        throw new Error('Gagal mengambil data PL');
    }

    return await response.json();
};