import { useEffect, useState } from "react";
import { getSach } from "../../../api/SachApi";
import { SachModel } from "../../../Models/SachModel";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function SachMoi() {
  const [sach, setSach] = useState<SachModel[]>([]);

  useEffect(() => {
    async function fetchSach() {
      const data = await getSach(0, 3, "maSach,desc");
      setSach(data);
    }

    fetchSach();
  }, []);

  return (
    <div className="container mt-5">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        speed={1000} 
      >
        {sach.map((item) => (
          <SwiperSlide key={item.maSach}>
            <div className="row align-items-center">
              {/* ảnh */}
              <div className="col-md-4 text-center">
                <img
                  // src={`/images/books/${item.danhSachHinhAnh?.[0]?.tenHinhAnh}`}
                  alt={item.tenSach}
                  style={{
                    width: "250px",
                    height: "350px",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* thông tin */}
              <div className="col-md-8">
                <h1>{item.tenSach}</h1>

                <p>{item.moTa}</p>

                <h3 className="text-danger">{item.giaBan}đ</h3>

                <button className="btn btn-primary">Xem chi tiết</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SachMoi;
