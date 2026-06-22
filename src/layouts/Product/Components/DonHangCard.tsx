import { DonHangModel } from "../../../Models/DonHangModel"

type Props  = { 
    donHang:DonHangModel;
}

function DonHangCard({ donHang }: Props) {

    return (
        <div>
            <h3>{donHang.diaChiMuaHang}</h3>
            <p>{donHang.ngayTao}</p>
        </div>
    );
}

export default DonHangCard;