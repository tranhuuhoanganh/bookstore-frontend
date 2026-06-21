import React from "react";
import SachModel from "../Models/SachModel";

async function request(duongDan:string) {
    const res = await fetch(duongDan);
    if (!res.ok) {
        throw new Error(`khong the truy cap ${duongDan}`)
    }
    return res.json();
}
export async function getSach(params:type):Promise<SachModel[]> {
    const sach:SachModel[] =[]
    const duongDan:string = `http://localhost:8080/sach`
    return sach;
}