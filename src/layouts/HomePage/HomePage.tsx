import React from "react";
import Banner from "./Components/Banner";
import DanhSachSanPham from "../Product/DanhSachSanPham";
import DanhSachNguoiDung from "../Product/DanhSachNguoiDung";
import SachMoi from "./Components/Carousel";
function HomePage(){
    return(
        <div><Banner/>
        <SachMoi/>
        <DanhSachSanPham/>
        <DanhSachNguoiDung/>
        </div>

        
    );
}

export default HomePage;