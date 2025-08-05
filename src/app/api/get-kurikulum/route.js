export async function GET() {
    const res = await fetch('http://192.168.54.59:3002/dbuai/kurikulum');
    const data = await res.json();
    return Response.json(data);
}
