export async function generateMetadata() {
    return {
        title: "Detail Mata Kuliah - Pengembang RPS",
        description: `Halaman detail untuk mata kuliah`,
    };
}

export default function Layout({ children }) {
    return <>{children}</>;
}