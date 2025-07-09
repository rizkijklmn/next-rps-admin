export default function CplTambah() {
    return (
        <div>
            <form action="">
                <div className="mb-5">
                    <label
                        htmlFor="kodecpl"
                        className="block text-medium mb-1 font-bold text-gray-900"
                    >
                        Kode CPL
                    </label>
                    <input
                        type="text"
                        name="kodecpl"
                        id="kodecpl"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm  focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 uppercase"
                        placeholder="CPL-01 ... n" />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="rumusancpl"
                        className="block text-medium mb-1 font-bold text-gray-900"
                    >
                        Rumusan CPL
                    </label>
                    <textarea
                        name="rumusancpl"
                        id="rumusancpl"
                        rows="10"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Masukkan rumusan CPL.." />
                    {/* <input
                        type="textarea"
                        name="rumusancpl"
                        id="rumusancpl"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Masukkan rumusan CPL.." /> */}
                </div>
            </form>
        </div>
    )
}