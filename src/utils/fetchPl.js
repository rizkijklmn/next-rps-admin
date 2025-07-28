// utils/fetchPl.js

// KODE DENGAN URLSearchParams
export const fetchPlData = async (prodiId, kurikulumId) => {
    const params = new URLSearchParams({
        ProdiId: prodiId,
        KurikulumId: kurikulumId,
    });

    // KODE ASLI
    const response = await fetch(`http://192.168.54.59:3001/api_obe/pl/prodi/kurikulum?${params.toString()}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        throw new Error('Gagal mengambil data PL');
    }

    return await response.json();
};