import { IoSearch } from "react-icons/io5"

function SearchCPL() {
    return (
        <div className="relative flex flex-1">
            <input type="text" className="w-full border border-gray-400 py-2 pl-10 text-sm rounded-sm" placeholder="Cari CPL" />
            <IoSearch className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
        </div>
    )
}

function SearchMK() {
    return (
        <div className="relative flex flex-1">
            <input type="text" className="w-full border border-gray-400 py-2 pl-10 text-sm rounded-sm" placeholder="Cari mata kuliah" />
            <IoSearch className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
        </div>
    )
}

export { SearchCPL, SearchMK }