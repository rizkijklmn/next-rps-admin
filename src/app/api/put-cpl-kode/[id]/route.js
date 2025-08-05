export async function PUT(request) {
    const url = new URL(request.url);
    const id = url.pathname.split('/').pop(); // ambil ID dari URL

    const body = await request.json();

    const res = await fetch(`http://192.168.54.59:3001/api_obe/cpl/kode/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    if (!res.ok) {
        return new Response(JSON.stringify({ error: 'Gagal update kode CPL' }), { status: res.status });
    }

    const data = await res.json();
    return Response.json(data);
}