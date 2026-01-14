import { Link, NavLink } from "react-router-dom"

const navLinkStyle = ({ isActive }: { isActive: boolean }) => ({
  textDecoration: "none",
  color: isActive ? "#fff" : "rgba(255,255,255,0.85)",
  fontWeight: isActive ? 700 : 500,
  padding: "6px 10px",
  borderRadius: 999,
  background: isActive ? "rgba(255,255,255,0.15)" : "transparent",
})

export default function JaHeader() {
  return (
    <header
      style={{
        padding: "18px 16px",
        background: "#4fa0d2",
        color: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      <div
        style={{
          width: "100%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        {/* Left: Title */}
        <Link to="/ja" style={{ color: "#fff", textDecoration: "none" }}>
          <div style={{ fontSize: 18, fontWeight: 800 }}>Cube petit</div>
          <div style={{ fontSize: 12, opacity: 0.8 }}>ROS2会話ロボット</div>
        </Link>

        {/* Center: Nav */}
        <nav style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          <NavLink to="/ja/concept" style={navLinkStyle}>
            コンセプト
          </NavLink>
          <NavLink to="/ja/hardware" style={navLinkStyle}>
            ハードウェア
          </NavLink>
          <NavLink to="/ja/software" style={navLinkStyle}>
            ソフトウェア
          </NavLink>
          <NavLink to="/ja/build" style={navLinkStyle}>
            つくる
          </NavLink>
          <NavLink to="/ja/buy" style={navLinkStyle}>
            購入
          </NavLink>
          <NavLink to="/ja/contact" style={navLinkStyle}>
            リンク・最新情報
          </NavLink>
        </nav>

        {/* Right: Lang switch */}
        <Link
          to="/en"
          style={{
            color: "#fff",
            textDecoration: "none",
            border: "1px solid rgba(255,255,255,0.35)",
            padding: "8px 12px",
            borderRadius: 999,
            fontSize: 14,
          }}
        >
          English →
        </Link>
      </div>
    </header>
  )
}
