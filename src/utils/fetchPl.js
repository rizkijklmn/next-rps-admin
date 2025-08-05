// src/utils/fetchPl.js
export const getPlByProdiAndKurikulum = async (prodiId, kurikulumId) => {
    const params = new URLSearchParams({
        ProdiId: prodiId,
        KurikulumId: kurikulumId,
    });

    const response = await fetch(`/api/get-pl?${params.toString()}`, {
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