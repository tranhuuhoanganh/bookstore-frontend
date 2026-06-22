import React from "react";
import { UserModel } from "../Models/UserModel";

export async function getUser():Promise<UserModel[]> {
    const respon = await fetch(`${process.env.REACT_APP_API_BASE_URL}/nguoi-dung`);    
    if (!respon.ok) {
        throw new Error("Không có dữ liệu");
    }
    const result = await respon.json();
    return result._embedded.nguoiDungs;
}