export async function DELETE(request) {
    const body = await request.json();

    const res = await fetch('http://192.168.54.59:3001/api_obe/cpl/matakuliah', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    });

    if (!res.ok) {
        return new Response(JSON.stringify(
            { error: 'Gagal menghapus relasi' }),
            { status: res.status });
    }

    const data = await res.json();
    return Response.json(data);
}
