// src/utils/fetchCpl.js

const getCplData = async (prodiId, kurikulumId) => {
    const params = new URLSearchParams({
        ProdiId: prodiId,
        KurikulumId: kurikulumId,
    });

    // KODE ASLI
    const response = await fetch(`http://192.168.54.59:3001/api_obe/cpl/prodi/kurikulum?${params.toString()}`, {
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
    const response = await fetch(`http://192.168.54.59:3001/api_obe/cpl/${id}`, {
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

export { getCplData, getCplById };