const stats = [
    { value: "20K+", label: "Đầu sách" },
    { value: "50K+", label: "Khách hàng" },
    { value: "99%", label: "Hài lòng" },
];

const bookCategories = [
    { label: "Tiểu thuyết", pct: 88, color: "#63caff" },
    { label: "Kinh doanh", pct: 74, color: "#a78bfa" },
    { label: "Công nghệ", pct: 61, color: "#34d399" },
];

function Banner() {
    return (
        <div
            style={{
                background:
                    "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
                minHeight: "100vh",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Background circles */}
            <div
                style={{
                    position: "absolute",
                    top: -100,
                    right: -100,
                    width: 400,
                    height: 400,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.04)",
                }}
            />

            <div
                style={{
                    position: "absolute",
                    bottom: -80,
                    left: -80,
                    width: 300,
                    height: 300,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.04)",
                }}
            />

            <div className="container min-vh-100 d-flex align-items-center">
                <div className="row align-items-center g-5 w-100">
                    {/* Left Content */}
                    <div className="col-lg-6 text-white text-center text-lg-start">
                        <span
                            className="badge rounded-pill mb-4 px-3 py-2"
                            style={{
                                background: "rgba(99,202,255,0.15)",
                                color: "#63caff",
                                border: "1px solid rgba(99,202,255,0.35)",
                            }}
                        >
                            ✦ Kho sách trực tuyến
                        </span>

                        <h1 className="display-4 fw-bold mb-4">
                            Khám phá hàng ngàn{" "}
                            <span
                                style={{
                                    background:
                                        "linear-gradient(90deg, #63caff, #a78bfa)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                cuốn sách hay
                            </span>
                        </h1>

                        <p
                            className="fs-5 mb-5"
                            style={{
                                color: "rgba(255,255,255,0.7)",
                                lineHeight: 1.8,
                            }}
                        >
                            Từ tiểu thuyết, kinh doanh, công nghệ đến kỹ năng
                            sống. Khám phá những đầu sách bán chạy và lựa chọn
                            cuốn sách yêu thích của bạn ngay hôm nay.
                        </p>

                        {/* Buttons */}
                        <div className="d-flex gap-3 flex-wrap justify-content-center justify-content-lg-start mb-5">
                            <a
                                href="/books"
                                className="btn btn-lg fw-bold px-4"
                                style={{
                                    background:
                                        "linear-gradient(90deg,#63caff,#a78bfa)",
                                    color: "#0f2027",
                                    border: "none",
                                }}
                            >
                                Mua sách ngay →
                            </a>

                            <a
                                href="/categories"
                                className="btn btn-lg fw-semibold px-4"
                                style={{
                                    color: "#fff",
                                    border: "1px solid rgba(255,255,255,0.3)",
                                }}
                            >
                                Xem thể loại
                            </a>
                        </div>

                        {/* Statistics */}
                        <div className="d-flex flex-wrap gap-4 justify-content-center justify-content-lg-start">
                            {stats.map((stat) => (
                                <div key={stat.label}>
                                    <div className="fs-3 fw-bold">{stat.value}</div>
                                    <div
                                        style={{
                                            color: "rgba(255,255,255,0.5)",
                                            fontSize: 13,
                                        }}
                                    >
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Card */}
                    <div className="col-lg-6 d-none d-lg-flex justify-content-center">
                        <div
                            className="position-relative"
                            style={{ width: 380 }}
                        >
                            <div
                                className="rounded-4 p-4 text-white"
                                style={{
                                    background: "rgba(255,255,255,0.08)",
                                    backdropFilter: "blur(16px)",
                                    border: "1px solid rgba(255,255,255,0.15)",
                                }}
                            >
                                <div className="d-flex align-items-center gap-3 mb-4">
                                    <div
                                        className="rounded-circle d-flex align-items-center justify-content-center"
                                        style={{
                                            width: 50,
                                            height: 50,
                                            fontSize: 24,
                                            background:
                                                "linear-gradient(135deg,#63caff,#a78bfa)",
                                        }}
                                    >
                                        📚
                                    </div>

                                    <div>
                                        <div className="fw-semibold">
                                            Sách bán chạy
                                        </div>
                                        <small
                                            style={{
                                                color: "rgba(255,255,255,0.5)",
                                            }}
                                        >
                                            Top lựa chọn tháng này
                                        </small>
                                    </div>
                                </div>

                                {bookCategories.map((item) => (
                                    <div key={item.label} className="mb-3">
                                        <div className="d-flex justify-content-between mb-1">
                                            <small>{item.label}</small>
                                            <small style={{ color: item.color }}>
                                                {item.pct}%
                                            </small>
                                        </div>

                                        <div
                                            className="rounded-pill"
                                            style={{
                                                height: 6,
                                                background: "rgba(255,255,255,0.1)",
                                            }}
                                        >
                                            <div
                                                className="rounded-pill"
                                                style={{
                                                    height: 6,
                                                    width: `${item.pct}%`,
                                                    background: item.color,
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div
                                className="position-absolute rounded-3 px-3 py-2"
                                style={{
                                    bottom: -20,
                                    right: -20,
                                    color: "#fff",
                                    background: "rgba(99,202,255,0.15)",
                                    border:
                                        "1px solid rgba(99,202,255,0.3)",
                                    backdropFilter: "blur(12px)",
                                }}
                            >
                                🔥 <strong>5,000+</strong> đơn hàng trong tháng
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;