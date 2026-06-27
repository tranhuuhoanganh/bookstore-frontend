import React, { useEffect, useState } from "react";
import { HinhAnhModel } from "../../../Models/HinhAnhModel";
import { getHinhAnh } from "../../../api/HinhAnhApi";
import { SachModel } from "../../../Models/SachModel";

type Props = {
    sach: SachModel;
};

function SachProps({ sach }: Props) {
    const [hinhAnh, setHinhAnh] = useState<HinhAnhModel | null>(null);

    useEffect(() => {
        getHinhAnh(sach.maSach)
            .then((data) => {
                if (data.length > 0) {
                    setHinhAnh(data[0]);
                }
            })
            .catch(console.error);
    }, [sach.maSach]);
    return (
        <div className="col-md-3 mb-4">
            <div className="card h-100 shadow-sm border-0">

                <img
                    src={
                        hinhAnh?.tenHinhAnh
                            ? `/images/books/${hinhAnh.tenHinhAnh}`
                            : "/images/no-image.jpg"
                    }
                    alt={sach.tenSach}
                    className="card-img-top"
                    style={{
                        height: "280px",
                        objectFit: "cover",
                    }}
                />

                <div className="card-body d-flex flex-column">

                    <h6
                        className="card-title fw-bold"
                        style={{ minHeight: "48px" }}
                    >
                        {sach.tenSach}
                    </h6>

                    <div className="mb-3">
                        <span
                            className="text-muted me-2"
                            style={{
                                textDecoration: "line-through",
                                fontSize: "14px",
                            }}
                        >
                            {sach.giaNiemYet}đ
                        </span>

                        <span
                            className="fw-bold text-danger"
                            style={{ fontSize: "18px" }}
                        >
                            {sach.giaBan}đ
                        </span>
                    </div>

                    <div className="mt-auto d-flex gap-2">
                        <button className="btn btn-outline-danger flex-fill">
                            ❤️
                        </button>

                        <button className="btn btn-primary flex-fill">
                            🛒 Giỏ hàng
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SachProps;