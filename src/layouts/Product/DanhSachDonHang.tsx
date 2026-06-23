import React, { useEffect, useState } from "react";
import { DonHangModel } from "../../Models/DonHangModel";
import { getDonHang } from "../../api/DonHangApi";

const DanhSachDonHang: React.FC = () => {
    const [DanhSachDonHang, SetDanhSachDonHang] = useState<DonHangModel[]>([]);
    const [error, SetError] = useState(null)

    useEffect(() => {
        async function fetchDonHang() {
            try {
                const data = await getDonHang();
                SetDanhSachDonHang(data)
            } catch (err: any) {
                SetError(err.message)
            }
        }
        fetchDonHang();
    })
    return (
        <><div className="container">
            <div className="row mt-4">
                {DanhSachDonHang.map((donHang) => (
                    <donHangProps
                        key={donHang.maDonHang}
                        donHang={donHang}
                    />
                ))}
            </div>
        </div></>

    );
}