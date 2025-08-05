export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const prodiId = searchParams.get('ProdiId');
    const kurikulumId = searchParams.get('KurikulumId');

    const res = await fetch(`http://192.168.54.59:3001/api_obe/pl/prodi/kurikulum?ProdiId=${prodiId}&KurikulumId=${kurikulumId}`);
    const data = await res.json();
    return Response.json(data);
}