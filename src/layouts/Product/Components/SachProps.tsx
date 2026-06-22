import React from "react";
import SachModel from "../../../Models/SachModel";
interface sachPropsInterface{
    sach: SachModel
}
const SachProps: React.FC<sachPropsInterface> = ( props ) => (
    <div className="col-md-3 mb-4">
        <div className="card h-100 shadow-sm border-0">
            {/* Ảnh sách */}
            <img

                className="card-img-top"
                style={{
                    height: "280px",
                    objectFit: "cover",
                }}
            />

            <div className="card-body d-flex flex-column">
                {/* Tên sách */}
                <h6
                    className="card-title fw-bold"
                    style={{
                        minHeight: "48px",
                    }}
                >
                    {props.sach.tenSach}
                </h6>

                {/* Giá */}
                <div className="mb-3">
                    <span
                        className="text-muted me-2"
                        style={{
                            textDecoration: "line-through",
                            fontSize: "14px",
                        }}
                    >
                        {props.sach.giaNiemYet}đ
                    </span>

                    <span
                        className="fw-bold text-danger"
                        style={{ fontSize: "18px" }}
                    >
                        {props.sach.giaBan}đ
                    </span>
                </div>

                {/* Nút thao tác */}
                <div className="mt-auto d-flex gap-2">
                    <button
                        className="btn btn-outline-danger flex-fill"
                        title="Yêu thích"
                    >
                        ❤️
                    </button>

                    <button
                        className="btn btn-primary flex-fill"
                        title="Thêm vào giỏ hàng"
                    >
                        🛒 Giỏ hàng
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default SachProps;