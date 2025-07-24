// utils/fetchCPL.js

// KODE ASLI dengan Method POST dan request BODY
// export const fetchCPLData = async (prodiId, kurikulumId) => {
//     const response = await fetch('http://192.168.54.59:3001/api_obe/cpl/prodi/kurikulum', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             ProdiId: prodiId,
//             KurikulumId: kurikulumId,
//         }),
//     });

//     if (!response.ok) {
//         throw new Error('Gagal mengambil data CPL');
//     }

//     return await response.json();
// };

// KODE DENGAN PROXY URL API untuk menghindari CORS
// export const fetchCPLData = async (prodiId, kurikulumId) => {
//     const response = await fetch('/api/proxy-cpl', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             ProdiId: 2,
//             KurikulumId: 2,
//         }),
//     });

//     if (!response.ok) {
//         throw new Error('Gagal mengambil data CPL');
//     }

//     return await response.json();
// };

// KODE DENGAN URLSearchParams
export const fetchCPLData = async (prodiId, kurikulumId) => {
    const params = new URLSearchParams({
        ProdiId: prodiId,
        KurikulumId: kurikulumId,
    });

    const response = await fetch(`http://192.168.54.59:3001/api_obe/cpl/prodi/kurikulum?${params.toString()}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('Gagal mengambil data CPL');
    }

    return await response.json();
};