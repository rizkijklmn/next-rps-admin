// src/app/components/DropdownKurikulum.jsx
'use client';

import { useEffect, useState } from 'react';
import { getAllKurikulum } from '@/utils/fetchKurikulum';
import { Dropdown, DropdownItem, Select } from 'flowbite-react';


const DropdownKurikulum = ({ onSelect }) => {
    const [stateKurikulum, setStateKurikulum] = useState("Pilih Kurikulum");
    const [kurikulumList, setKurikulumList] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getAllKurikulum();
                setKurikulumList(data);
            } catch (error) {
                console.error('Gagal fetch kurikulum:', error);
            }
        };
        getData();
    }, []);

    const handleChange = (e) => {
        const selectedId = parseInt(e.target.value);
        onSelect(selectedId);
    };

    return (
        <>
            {/* KODE DENGAN Dropdown */}
            <Dropdown
                size="md"
                color={"light"}
                className="w-75 justify-between"
                label={stateKurikulum}
                onChange={handleChange}
            >
                {
                    kurikulumList.map((kurikulum) => (
                        <DropdownItem
                            key={kurikulum.ID}
                            onClick={() => { onSelect(kurikulum.ID), setStateKurikulum(`Tahun ${kurikulum.TahunKurikulum}`) }}
                        >
                            Tahun {kurikulum.TahunKurikulum}
                        </DropdownItem>
                    ))
                }
            </Dropdown>

            {/* KODE DENGAN Select */}
            {/* <Select onChange={handleChange} defaultValue="">
                <option value="" disabled>Pilih Kurikulum</option>
                {kurikulumList.map((kurikulum) => (
                    <option key={kurikulum.id} value={kurikulum.id}>
                        {kurikulum.nama}
                    </option>
                ))}
            </Select> */}

        </>
    );
};

export default DropdownKurikulum;
