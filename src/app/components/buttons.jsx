import { Button } from "flowbite-react";
import Link from "next/link";
import { IoAddSharp } from "react-icons/io5";

function TambahButton() {
    return (
        <Link
            type="button"
            href=""
            className="inline-flex items-center space-x-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-sm text-sm"
        >
            <IoAddSharp size={20} />
            Tambah
        </Link>
    )
}

function TampilkanButton() {
    return (
        <Button
            type="button"
            className="inline-flex cursor-pointer items-center space-x-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-sm text-sm"
        >
            Tampilkan
        </Button>
    )
}

export { TambahButton, TampilkanButton };