import JaHeader from "./JaHeader"

type Props = {
  children: React.ReactNode
}

export default function JaLayout({ children }: Props) {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        fontFamily: "system-ui, sans-serif",
        background: "#fafafa",
      }}
    >
      <JaHeader />

      {/* ★背景をフル幅で塗るゾーン */}
      <div style={{ width: "100vw", background: "#f3f5f7", overflowX: "hidden" }}>
        {/* ★中身だけ幅制限 */}
        <main style={{ maxWidth: 1960, margin: "0 auto", padding: "24px 16px" }}>
          {children}
        </main>
      </div>

      <footer style={{ textAlign: "center", padding: "28px 16px", color: "#666" }}>
        <small>© Cube petit</small>
      </footer>
    </div>
  )
}
