// src/utils/fetchKurikulum.js
export const getAllKurikulum = async () => {
    const response = await fetch(`/api/get-kurikulum`);
    // const response = await fetch('/api/fetch-kurikulum') // KODE DENGAN PROXY
    if (!response.ok) {
        throw new Error('Gagal mengambil data kurikulum');
    }
    return await response.json();
};