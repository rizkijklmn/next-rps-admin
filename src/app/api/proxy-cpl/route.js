// src/app/api/proxy-cpl/route.js
export async function POST(req) {
    const body = await req.json();

    const res = await fetch('http://192.168.54.59:3001/api_obe/cpl/prodi/kurikulum', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    const data = await res.json();
    return Response.json(data);
}
