import React from "react";

const Footer: React.FC = () => {
  return (
    <footer style={{
      background: "linear-gradient(180deg, #0f2027, #203a43)",
      color: "#c0c0d0",
      fontFamily: "sans-serif",
    }}>

      {/* ── Top strip ── */}
      <div
        style={{
          background: "linear-gradient(135deg, #203a43, #2c5364)",
          borderTop: "3px solid #63caff",
          borderBottom: "1px solid #2f4c5c",
          padding: "36px 0",
        }}
      >
        <div className="container">
          <div className="row align-items-center g-3">
            <div className="col-md-6">
              <h4 style={{ fontFamily: "Georgia, serif", fontWeight: 700, color: "#fff", margin: 0, fontSize: "1.3rem" }}>
                📬 Nhận ưu đãi trước mọi người
              </h4>
              <p style={{ color: "rgba(255,255,255,.6)", margin: "6px 0 0", fontSize: "0.88rem" }}>
                Sách mới, giảm giá độc quyền — gửi thẳng vào hộp thư của bạn.
              </p>
            </div>
            <div className="col-md-6">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="email@example.com"
                  style={{
                    backgroundColor: "#162a35",
                    border: "1px solid #2f4c5c",
                    color: "#fff",
                    borderRadius: "8px 0 0 8px",
                    padding: "10px 16px",
                  }}
                />
                <button
                  className="btn"
                  style={{
                    background: "linear-gradient(90deg, #63caff, #a78bfa)",
                    color: "#fff",
                    fontWeight: 700,
                    borderRadius: "0 8px 8px 0",
                    padding: "10px 24px",
                    border: "none",
                  }}
                >
                  Đăng ký
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main footer body ── */}
      <div className="container" style={{ padding: "56px 12px 40px" }}>
        <div className="row g-5">

          {/* Brand column */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center gap-2 mb-3">
              <span style={{ fontSize: "1.8rem" }}>📚</span>
              <span style={{ fontFamily: "Georgia, serif", fontWeight: 700, color: "#63caff", fontSize: "1.5rem" }}>
                BookHaven
              </span>
            </div>
            <p style={{ color: "rgba(255,255,255,.5)", fontSize: "0.88rem", lineHeight: "1.9", maxWidth: "300px", marginBottom: "24px" }}>
              Nơi mỗi cuốn sách là một cánh cửa mở ra thế giới mới. Chúng tôi tuyển chọn hơn 10.000 đầu sách từ các thể loại phong phú, phục vụ mọi độc giả.
            </p>
            <div className="d-flex gap-3">
              <a href="#" title="Facebook" style={socialStyle}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#63caff")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#203a43")}>📘</a>
              <a href="#" title="Instagram" style={socialStyle}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#63caff")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#203a43")}>📸</a>
              <a href="#" title="Twitter" style={socialStyle}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#63caff")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#203a43")}>🐦</a>
              <a href="#" title="YouTube" style={socialStyle}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#63caff")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#203a43")}>▶️</a>
            </div>
          </div>

          {/* Danh mục sách */}
          <div className="col-lg col-md-6 col-6">
            <h6 style={colTitleStyle}>Danh mục sách</h6>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={liStyle}><a href="/" style={linkStyle} onMouseEnter={e => (e.currentTarget.style.color = "#63caff")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.8)")}>Văn học</a></li>
              <li style={liStyle}><a href="/" style={linkStyle} onMouseEnter={e => (e.currentTarget.style.color = "#63caff")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.8)")}>Kinh doanh</a></li>
              <li style={liStyle}><a href="/" style={linkStyle} onMouseEnter={e => (e.currentTarget.style.color = "#63caff")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.8)")}>Tâm lý học</a></li>
              <li style={liStyle}><a href="/" style={linkStyle} onMouseEnter={e => (e.currentTarget.style.color = "#63caff")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.8)")}>Lịch sử & Địa lý</a></li>
              <li style={liStyle}><a href="/" style={linkStyle} onMouseEnter={e => (e.currentTarget.style.color = "#63caff")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.8)")}>Khoa học</a></li>
              <li style={liStyle}><a href="/" style={linkStyle} onMouseEnter={e => (e.currentTarget.style.color = "#63caff")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.8)")}>Thiếu nhi</a></li>
            </ul>
          </div>

          {/* Hỗ trợ khách hàng */}
          <div className="col-lg col-md-6 col-6">
            <h6 style={colTitleStyle}>Hỗ trợ khách hàng</h6>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={liStyle}><a href="/" style={linkStyle} onMouseEnter={e => (e.currentTarget.style.color = "#63caff")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.8)")}>Hướng dẫn đặt hàng</a></li>
              <li style={liStyle}><a href="/" style={linkStyle} onMouseEnter={e => (e.currentTarget.style.color = "#63caff")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.8)")}>Theo dõi đơn hàng</a></li>
              <li style={liStyle}><a href="/" style={linkStyle} onMouseEnter={e => (e.currentTarget.style.color = "#63caff")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.8)")}>Đổi trả & Hoàn tiền</a></li>
              <li style={liStyle}><a href="/" style={linkStyle} onMouseEnter={e => (e.currentTarget.style.color = "#63caff")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.8)")}>Chính sách vận chuyển</a></li>
              <li style={liStyle}><a href="/" style={linkStyle} onMouseEnter={e => (e.currentTarget.style.color = "#63caff")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.8)")}>FAQ</a></li>
            </ul>
          </div>

          {/* Về chúng tôi */}
          <div className="col-lg col-md-6 col-6">
            <h6 style={colTitleStyle}>Về chúng tôi</h6>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={liStyle}><a href="/" style={linkStyle} onMouseEnter={e => (e.currentTarget.style.color = "#63caff")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.8)")}>Giới thiệu</a></li>
              <li style={liStyle}><a href="/" style={linkStyle} onMouseEnter={e => (e.currentTarget.style.color = "#63caff")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.8)")}>Blog sách hay</a></li>
              <li style={liStyle}><a href="/" style={linkStyle} onMouseEnter={e => (e.currentTarget.style.color = "#63caff")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.8)")}>Cộng tác viên</a></li>
              <li style={liStyle}><a href="/" style={linkStyle} onMouseEnter={e => (e.currentTarget.style.color = "#63caff")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.8)")}>Tuyển dụng</a></li>
              <li style={liStyle}><a href="/" style={linkStyle} onMouseEnter={e => (e.currentTarget.style.color = "#63caff")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.8)")}>Liên hệ</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── Trust badges ── */}
      <div style={{ borderTop: "1px solid #2f4c5c", borderBottom: "1px solid #2f4c5c" }}>
        <div className="container" style={{ padding: "24px 12px" }}>
          <div className="row g-3">
            <div className="col-6 col-md-3">
              <div style={badgeWrapStyle}>
                <span style={badgeIconStyle}>🚚</span>
                <div>
                  <div style={badgeTitleStyle}>Giao hàng nhanh</div>
                  <div style={badgeSubStyle}>Toàn quốc 2–3 ngày</div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div style={badgeWrapStyle}>
                <span style={badgeIconStyle}>🔄</span>
                <div>
                  <div style={badgeTitleStyle}>Đổi trả dễ dàng</div>
                  <div style={badgeSubStyle}>Trong vòng 7 ngày</div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div style={badgeWrapStyle}>
                <span style={badgeIconStyle}>🔒</span>
                <div>
                  <div style={badgeTitleStyle}>Thanh toán an toàn</div>
                  <div style={badgeSubStyle}>Mã hóa SSL 256-bit</div>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div style={badgeWrapStyle}>
                <span style={badgeIconStyle}>🎁</span>
                <div>
                  <div style={badgeTitleStyle}>Quà tặng hấp dẫn</div>
                  <div style={badgeSubStyle}>Cho đơn từ 200.000₫</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="container" style={{ padding: "20px 12px" }}>
        <div className="row align-items-center g-2">
          <div className="col-md-6">
            <p style={{ margin: 0, color: "rgba(255,255,255,.35)", fontSize: "0.82rem" }}>
              © 2026 BookHaven. Tất cả quyền được bảo lưu.
            </p>
          </div>
          <div className="col-md-6 d-flex gap-3 justify-content-md-end flex-wrap">
            <a href="/" style={bottomLinkStyle} onMouseEnter={e => (e.currentTarget.style.color = "#63caff")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.35)")}>Điều khoản sử dụng</a>
            <a href="/" style={bottomLinkStyle} onMouseEnter={e => (e.currentTarget.style.color = "#63caff")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.35)")}>Chính sách bảo mật</a>
            <a href="/" style={bottomLinkStyle} onMouseEnter={e => (e.currentTarget.style.color = "#63caff")} onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,.35)")}>Cookie</a>
          </div>
        </div>
      </div>

    </footer>
  );
};

// ── Shared style objects ──────────────────────────────────────────────────────

const socialStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "38px",
  height: "38px",
  borderRadius: "8px",
  backgroundColor: "#203a43",
  border: "1px solid #2f4c5c",
  fontSize: "1.1rem",
  textDecoration: "none",
  transition: "background 0.2s",
};

const colTitleStyle: React.CSSProperties = {
  color: "#63caff",
  fontWeight: 700,
  fontSize: "0.85rem",
  letterSpacing: "1px",
  textTransform: "uppercase",
  marginBottom: "20px",
};

const liStyle: React.CSSProperties = { marginBottom: "10px" };

const linkStyle: React.CSSProperties = {
  color: "rgba(255,255,255,.8)",
  fontSize: "0.88rem",
  textDecoration: "none",
  transition: "color 0.2s",
};

const badgeWrapStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
};

const badgeIconStyle: React.CSSProperties = { fontSize: "1.6rem" };

const badgeTitleStyle: React.CSSProperties = {
  color: "#fff",
  fontWeight: 600,
  fontSize: "0.85rem",
};

const badgeSubStyle: React.CSSProperties = {
  color: "rgba(255,255,255,.45)",
  fontSize: "0.78rem",
};

const bottomLinkStyle: React.CSSProperties = {
  color: "rgba(255,255,255,.35)",
  fontSize: "0.82rem",
  textDecoration: "none",
  transition: "color 0.2s",
};

export default Footer;