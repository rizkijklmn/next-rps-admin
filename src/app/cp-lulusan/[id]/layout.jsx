import { getCplById } from '@/utils/fetchCpl';

export async function generateMetadata({ params }) {
    const cpl = await getCplById(params.id);

    return {
        title: `Detail ${cpl?.KodeCpl || 'CPL'}`,
        description: `Halaman detail untuk CPL ${cpl?.KodeCpl}`,
    };
}

export default function Layout({ children }) {
    return <>{children}</>;
}
