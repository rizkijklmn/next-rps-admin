export async function GET(request) {
    const url = new URL(request.url);
    const id = url.pathname.split('/').pop(); // ambil ID dari URL

    const res = await fetch(`http://192.168.54.59:3001/api_obe/cpl/${id}`);
    const data = await res.json();
    return Response.json(data);
}