import { SachModel } from "../Models/SachModel";

export async function getSach(page: number = 0,size: number = 100,sort: string = "maSach,asc"): Promise<SachModel[]> {

    const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/sach?page=${page}&size=${size}&sort=${sort}`
    );

    if (!response.ok) {
        throw new Error("Hệ thống bị lỗi");
    }

    const result = await response.json();

    return result._embedded.saches;
}