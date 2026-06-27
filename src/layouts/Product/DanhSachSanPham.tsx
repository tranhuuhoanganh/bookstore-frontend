import React, { useEffect, useState } from "react";
import SachProps from "./Components/SachProps";
import { getSach } from "../../api/SachApi";
import { error } from "console";
import { SachModel } from "../../Models/SachModel";
const DanhSachSanPham: React.FC = () => {

    const [danhSachQuyenSach, SetDanhSachQuyenSach] = useState<SachModel[]>([]);
    const [error, setError] = useState(null)
   
    useEffect(()=>{
        async function fecthUser() {
            try {
                const data = await getSach();
                SetDanhSachQuyenSach(data)
            } catch (err:any) {
                setError(err.message)
            }
        };
        fecthUser();
    },[])
    return (

        <div className="container">
            <div className="row mt-4">
                {danhSachQuyenSach.map((sach) => (
                    <SachProps
                        key={sach.maSach}
                        sach={sach}
                    />
                ))}
            </div>
        </div>
    );
};

export default DanhSachSanPham;