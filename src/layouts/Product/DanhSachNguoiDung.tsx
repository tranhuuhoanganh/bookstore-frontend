import React, { useEffect, useState } from "react";
import { UserModel } from "../../Models/UserModel";
import { getUser } from "../../api/UserApi";
import UserCard from "./Components/UserCard";


const DanhSachNguoiDung: React.FC = () => {
    const [users,setUser] = useState<UserModel[]>([]);
    const [Loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        async function fetchUser() {
            try {
                const data = await getUser();
                setUser(data);
            } catch (err: any) {
                setError(err.message);
            }finally{
                setLoading(false);
            }
        }
        fetchUser();
    },[]);

    return (
    <>
        {users.map(user => (
            <UserCard
                key={user.maNguoiDung}
                user={user}
            />
        ))}
    </>
)
};
export default DanhSachNguoiDung

