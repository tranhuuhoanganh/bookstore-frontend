import React from "react";
import Banner from "./Components/Banner";
import DanhSachSanPham from "../Product/DanhSachSanPham";
import DanhSachNguoiDung from "../Product/DanhSachNguoiDung";
import DanhSachDonHang from "../Product/DanhSachDonHang";
function HomePage(){
    return(
        <div><Banner/>
        {/* <DanhSachSanPham/>
        <DanhSachNguoiDung/> */}
        <DanhSachDonHang/>
        </div>

        
    );
}

export default HomePage;