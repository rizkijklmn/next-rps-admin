// src/utils/fetchKurikulum.js

import { API_BASE_DBUAI } from "./config";

export const getAllKurikulum = async () => {
    const response = await fetch(`${API_BASE_DBUAI}/dbuai/kurikulum`);
    // const response = await fetch('/api/fetch-kurikulum') // KODE DENGAN PROXY
    if (!response.ok) {
        throw new Error('Gagal mengambil data kurikulum');
    }
    return await response.json();
};