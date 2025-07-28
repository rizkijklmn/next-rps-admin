// src/utils/fetchKurikulum.js
export const fetchKurikulumData = async () => {
    // KODE ASLI
    const response = await fetch('http://192.168.54.59:3002/dbuai/kurikulum');
    // const response = await fetch('/api/fetch-kurikulum') // KODE DENGAN PROXY
    if (!response.ok) {
        throw new Error('Gagal mengambil data kurikulum');
    }
    return await response.json();
};