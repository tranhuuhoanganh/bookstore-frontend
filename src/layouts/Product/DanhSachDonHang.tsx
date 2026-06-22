import React, { useEffect, useState } from "react";
import { DonHangModel } from "../../Models/DonHangModel";
import { getDonHang } from "../../api/DonHangApi";
import DonHangCard from "./Components/DonHangCard";

const DanhSachDonHang:React.FC = () => {
    const [DanhSachDonHang,setDanhSachDonHang] = useState<DonHangModel[]>([]);
    const [Error,setError] = useState<DonHangModel[]>([]);

    useEffect(()=> {
        async function fetchDonHang() {
            try {
                const data = await getDonHang();
                setDanhSachDonHang(data);
            } catch (err:any) {
                setError(err.message)
            }
        }
        fetchDonHang();
    },[]);
    return(
        <>    
            {DanhSachDonHang.map(DonHang=>(
                <DonHangCard key={DonHang.maDonHang} donHang={DonHang}
            />
            ))}
        </>
    )
};
export default DanhSachDonHang