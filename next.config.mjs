import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */

// KODE ASLI
const nextConfig = {};

// KODE DENGAN PROXY UNTUK BYPASS CORS
// const nextConfig = {
//     async rewrites() {
//         return [
//             {
//                 source: '/api/fetch-kurikulum',
//                 destination: 'http://192.168.54.59:3002/dbuai/kurikulum'
//             },
//             {
//                 source: '/api/fetch-cpl',
//                 destination: 'http://192.168.54.59:3001/api_obe/cpl/prodi/kurikulum'
//             },
//             {
//                 source: '/api/post-cpl',
//                 destination: 'http://192.168.54.59:3001/api_obe/cpl'
//             }
//         ]
//     }
// }

export default withFlowbiteReact(nextConfig);