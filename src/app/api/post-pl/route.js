export async function POST(request) {
    const body = await request.json();

    const res = await fetch('http://192.168.54.59:3001/api_obe/pl', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    if (!res.ok) {
        return new Response(JSON.stringify({ error: 'Gagal menambahkan PL' }), { status: res.status });
    }

    const data = await res.json();
    return Response.json(data);
}