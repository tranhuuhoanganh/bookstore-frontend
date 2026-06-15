import React from "react";

const Navbar: React.FC = () => {
    return (
        <nav
            className="navbar navbar-expand-lg sticky-top shadow-sm"
            style={{
                background: "linear-gradient(90deg, #0f2027, #203a43)",
                borderBottom: "3px solid #63caff",
            }}
        >
            <div className="container">
                {/* Logo */}
                <a
                    className="navbar-brand d-flex align-items-center gap-2"
                    href="/"
                    style={{ textDecoration: "none" }}
                >
                    <span style={{ fontSize: "1.6rem" }}>📚</span>
                    <span
                        style={{
                            fontFamily: "'Georgia', serif",
                            fontWeight: "700",
                            fontSize: "1.4rem",
                            color: "#63caff",
                            letterSpacing: "0.5px",
                        }}
                    >
                        BookHaven
                    </span>
                </a>

                {/* Toggle button (mobile) */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNav"
                    aria-controls="mainNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    style={{ borderColor: "#63caff" }}
                >
                    <span className="navbar-toggler-icon" style={{ filter: "invert(1)" }} />
                </button>

                {/* Nav links + search + actions */}
                <div className="collapse navbar-collapse" id="mainNav">
                    {/* Nav links */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-3">
                        <li className="nav-item">
                            <a className="nav-link px-3" href="/" style={navLinkStyle}
                                onMouseEnter={e => (e.currentTarget.style.color = "#63caff")}
                                onMouseLeave={e => (e.currentTarget.style.color = "#ffffff")}>
                                Trang chủ
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-3" href="/new" style={navLinkStyle}
                                onMouseEnter={e => (e.currentTarget.style.color = "#63caff")}
                                onMouseLeave={e => (e.currentTarget.style.color = "#ffffff")}>
                                Sách mới
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-3" href="/categories" style={navLinkStyle}
                                onMouseEnter={e => (e.currentTarget.style.color = "#63caff")}
                                onMouseLeave={e => (e.currentTarget.style.color = "#ffffff")}>
                                Thể loại
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-3" href="/bestsellers" style={navLinkStyle}
                                onMouseEnter={e => (e.currentTarget.style.color = "#63caff")}
                                onMouseLeave={e => (e.currentTarget.style.color = "#ffffff")}>
                                Bán chạy
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-3" href="/sale" style={navLinkStyle}
                                onMouseEnter={e => (e.currentTarget.style.color = "#63caff")}
                                onMouseLeave={e => (e.currentTarget.style.color = "#ffffff")}>
                                Khuyến mãi
                            </a>
                        </li>
                    </ul>

                    {/* Search bar */}
                    <div className="d-flex align-items-center gap-2 me-3">
                        <div className="input-group" style={{ width: "260px" }}>
                            <input
                                type="text"
                                className="form-control form-control-sm"
                                placeholder="Tìm kiếm sách..."
                                style={{
                                    backgroundColor: "#162a35",
                                    border: "1px solid #2f4c5c",
                                    color: "#fff",
                                    borderRadius: "6px 0 0 6px",
                                }}
                            />
                            <button
                                className="btn btn-sm"
                                type="button"
                                style={{
                                    background: "linear-gradient(90deg, #63caff, #a78bfa)",
                                    color: "#fff",
                                    fontWeight: "600",
                                    borderRadius: "0 6px 6px 0",
                                    border: "none",
                                }}
                            >
                                🔍
                            </button>
                        </div>
                    </div>

                    {/* Action icons */}
                    <div className="d-flex align-items-center gap-3">
                        {/* Wishlist */}
                        <button
                            className="btn btn-sm position-relative"
                            style={{ color: "#d1d1d1", background: "none", border: "none" }}
                            title="Yêu thích"
                        >
                            <span style={{ fontSize: "1.2rem" }}>🤍</span>
                            <span
                                className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
                                style={{ backgroundColor: "#a78bfa", color: "#fff", fontSize: "0.65rem" }}
                            >
                                3
                            </span>
                        </button>

                        {/* Cart */}
                        <button
                            className="btn btn-sm position-relative"
                            style={{ color: "#d1d1d1", background: "none", border: "none" }}
                            title="Giỏ hàng"
                        >
                            <span style={{ fontSize: "1.2rem" }}>🛒</span>
                            <span
                                className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
                                style={{ backgroundColor: "#63caff", color: "#0f2027", fontSize: "0.65rem" }}
                            >
                                2
                            </span>
                        </button>

                        {/* Login */}
                        <a
                            href="/login"
                            className="btn btn-sm"
                            style={{
                                backgroundColor: "transparent",
                                border: "1px solid #63caff",
                                color: "#63caff",
                                borderRadius: "6px",
                                fontWeight: "600",
                                fontSize: "0.85rem",
                                padding: "4px 14px",
                                transition: "all 0.2s",
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.backgroundColor = "#63caff";
                                e.currentTarget.style.color = "#0f2027";
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.backgroundColor = "transparent";
                                e.currentTarget.style.color = "#63caff";
                            }}
                        >
                            Đăng nhập
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

const navLinkStyle: React.CSSProperties = {
    color: "#ffffff",
    fontWeight: "500",
    fontSize: "0.95rem",
    transition: "color 0.2s",
};

export default Navbar;