// app/api/get-relasi-matkul-cpl/route.js
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const kodeKomponen = searchParams.get('kodeKomponen');

    // if (!kodeKomponen) {
    //     return new Response(JSON.stringify({ error: 'KodeKomponen tidak ditemukan' }), {
    //         status: 400,
    //     });
    // }

    // try {
    //     const res = await fetch(`http://192.168.54.59:3001/api_obe/cpl/matakuliah/${kodeKomponen}`);
    //     if (!res.ok) throw new Error('Gagal mengambil relasi CPL-Matkul');

    //     const data = await res.json();
    //     const cplList = Array.isArray(data.Cpl) ? data.Cpl : [];

    //     return new Response(JSON.stringify(cplList), {
    //         status: 200,
    //         headers: { 'Content-Type': 'application/json' },
    //     });
    // } catch (error) {
    //     return new Response(JSON.stringify({ error: error.message }), {
    //         status: 500,
    //     });
    // }

    const res = await fetch(`http://192.168.54.59:3001/api_obe/cpl/matakuliah/${kodeKomponen}`);
    if (!res.ok) throw new Error('Gagal mengambil relasi CPL-Matkul');

    const data = await res.json();
    const cplList = Array.isArray(data.Cpl) ? data.Cpl : [];
    return new Response(JSON.stringify(cplList));
}
