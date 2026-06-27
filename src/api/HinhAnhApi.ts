import { HinhAnhModel } from "../Models/HinhAnhModel";

export async function getHinhAnh(maSach: number): Promise<HinhAnhModel[]> {

    const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/sach/${maSach}/danhSachHinhAnh`
    );

    if (!response.ok) {
        throw new Error("Hệ thống đang lỗi");
    }

    const result = await response.json();

    return result._embedded.hinhAnhs;
}