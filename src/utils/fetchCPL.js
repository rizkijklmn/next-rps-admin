// src/utils/fetchCpl.js
const getCplByProdiAndKurikulum = async (prodiId, kurikulumId) => {
    const params = new URLSearchParams({
        ProdiId: prodiId,
        KurikulumId: kurikulumId,
    });

    // KODE ASLI
    const response = await fetch(`/api/get-cpl?${params.toString()}`, {
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
        throw new Error('Gagal mengambil data CPL by Prodi dan Kurikulum');
    }

    return await response.json();
};

const getCplById = async (id) => {
    const response = await fetch(`/api/get-cpl-by-id/${id}`, {
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