export async function getRelasiCplMatkul(kodeKomponen) {
    const res = await fetch(`http://192.168.54.59:3001/api_obe/cpl/matakuliah/${kodeKomponen}`);
    if (!res.ok) throw new Error('Gagal mengambil relasi CPL-Matkul');

    const data = await res.json();
    return Array.isArray(data.Cpl) ? data.Cpl : []; // langsung return array CPL
}
