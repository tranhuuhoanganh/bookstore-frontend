import React from "react";
import Banner from "./Components/Banner";
import DanhSachSanPham from "../Product/DanhSachSanPham";
import DanhSachNguoiDung from "../Product/DanhSachNguoiDung";
function HomePage(){
    return(
        <div><Banner/>
        <DanhSachSanPham/>
        <DanhSachNguoiDung/>
        </div>

        
    );
}

export default HomePage;