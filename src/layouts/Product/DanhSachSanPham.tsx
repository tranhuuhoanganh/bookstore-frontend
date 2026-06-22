import React, { useEffect, useState } from "react";
import SachModel from "../../Models/SachModel";
import SachProps from "./Components/SachProps";
import { getSach } from "../../api/SachApi";
import { error } from "console";
const DanhSachSanPham: React.FC = () => {

    const [danhSachQuyenSach, SetDanhSachQuyenSach] = useState<SachModel[]>([]);
    const [dangLoad, setDangLoad] = useState(true)
    const [baoLoi, setBaoLoi] = useState(null)
    useEffect(() => {
        getSach().then(
            sachData => {
                SetDanhSachQuyenSach(sachData)
                setDangLoad(false)
            }

        ).catch(
            error=>{
                setBaoLoi(error.message)
            }
        )
    }, []
    )
    if (dangLoad) {
        return (
            <div>
                <h1>Đang tải</h1>
            </div>
        );
    }
    if (baoLoi) {
        return (
            <div>
                <h1>Gặp lỗi {baoLoi}</h1>
            </div>
        );
    }
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