import { Button } from "flowbite-react";
import { IoAddSharp } from "react-icons/io5";
import Link from "next/link";

function AddButton({ children }) {
    return (
        <Button
            type="button"
            className="inline-flex cursor-pointer items-center space-x-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-sm text-sm"
        >
            <IoAddSharp size={15} />
            Tambah
        </Button>
    )
}

function ShowButton() {
    return (
        <Button
            type="button"
            className="inline-flex cursor-pointer items-center space-x-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-sm text-sm"
        >
            Tampilkan
        </Button>
    )
}

export { AddButton, ShowButton };