import { error } from "console";
import { DonHangModel } from "../Models/DonHangModel";

export async function getDonHang():Promise<DonHangModel[]> {
    const respon = await fetch(`${process.env.REACT_APP_API_BASE_URL}/don-hang`);
    if (!respon.ok) {
        throw new Error("Không có dữ liệu");
    }

    const result = await respon.json();
    return result._embedded.donHangs
}