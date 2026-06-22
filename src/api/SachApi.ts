import React from "react";
import SachModel from "../Models/SachModel";

async function request(duongDan: string) {
    const res = await fetch(duongDan);
    if (!res.ok) {
        throw new Error(`khong the truy cap ${duongDan}`)
    }
    return res.json();
}
export async function getSach(): Promise<SachModel[]> {
    const sach: SachModel[] = [];
    const duongDan: string = `http://localhost:8080/sach`;
    const respon = await request(duongDan);
    const data = respon._embedded.saches;

    for (const key in data) {
        sach.push({
            maSach: data[key].maSach,
            tenSach: data[key].tenSach,
            giaBan: data[key].giaBan,
            giaNiemYet: data[key].giaNiemYet,
            moTa: data[key].moTa,
            soLuong: data[key].soLuong,
            tenTacGia: data[key].tenTacGia,
            trungBinhXepHang: data[key].trungBinhXepHang,
        });
    }
    return sach;
}