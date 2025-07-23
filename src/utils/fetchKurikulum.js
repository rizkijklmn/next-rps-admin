// src/utils/fetchKurikulum.js
export const fetchKurikulum = async () => {
    const response = await fetch('http://192.168.54.59:3002/dbuai/kurikulum');
    if (!response.ok) {
        throw new Error('Gagal mengambil data kurikulum');
    }
    return await response.json();
};