export async function GET(request) {
    const url = new URL(request.url);
    const id = url.pathname.split('/').pop();
    
    const res = await fetch(`http://192.168.54.59:3002/dbuai/matakuliah/${id}`);
    const data = await res.json();
    return Response.json(data);
}
