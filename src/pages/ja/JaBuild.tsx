import JaLayout from "../../layout/JaLayout"

export default function JaBuild() {
  return (
    <JaLayout>
      <div style={{ marginBottom: 18 }}>
        <h1 style={{ margin: 0 }}>CubePetitをDIYする</h1>
        <p style={{ margin: "10px 0 0", color: "#444", lineHeight: 1.8 }}>
          見た目やセンサー構成をカスタマイズした CubePetit をつくろう！
        </p>
      </div>

      {/* Info cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 12,
          marginBottom: 16,
        }}
      >
        {/* Budget */}
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: 16,
            boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
          }}
        >
          <div style={{ fontSize: 12, color: "#666" }}>予算</div>
          <div style={{ fontSize: 22, fontWeight: 800, marginTop: 6 }}>約35万円</div>
          <div style={{ marginTop: 8, color: "#444", lineHeight: 1.7, fontSize: 14 }}>
            センサー構成や筐体のカスタマイズ内容により変動します。
          </div>
        </div>

        {/* Time */}
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: 16,
            boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
          }}
        >
          <div style={{ fontSize: 12, color: "#666" }}>目安時間</div>
          <div style={{ fontSize: 22, fontWeight: 800, marginTop: 6 }}>約1週間</div>
          <div style={{ marginTop: 8, color: "#444", lineHeight: 1.7, fontSize: 14 }}>
            部品の調達状況・加工の有無で前後します。
          </div>
        </div>

        {/* What you get */}
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: 16,
            boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
          }}
        >
          <div style={{ fontSize: 12, color: "#666" }}>このページで分かること</div>
          <ul style={{ margin: "10px 0 0", paddingLeft: 18, lineHeight: 1.9, color: "#333" }}>
            <li>購入物品リスト</li>
            <li>組み立て手順</li>
            <li>配線・接続の注意点</li>
          </ul>
        </div>
      </div>

      {/* Manual link card */}
      <section
        style={{
          background: "#fff",
          borderRadius: 16,
          padding: 18,
          boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
        }}
      >
        <h2 style={{ marginTop: 0, marginBottom: 8, fontSize: 18 }}>ハードウェアマニュアル</h2>
        <p style={{ margin: "0 0 14px", color: "#444", lineHeight: 1.8 }}>
          以下のリポジトリに、購入物品リストと組み立てマニュアルがあります。
        </p>

        <div
          style={{
            border: "1px solid #eee",
            borderRadius: 14,
            padding: 14,
            background: "#fafafa",
          }}
        >
          <div style={{ fontSize: 12, color: "#666", marginBottom: 6 }}>Repository</div>

          <div
            style={{
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
              fontSize: 13,
              lineHeight: 1.6,
              wordBreak: "break-all",
              color: "#111",
            }}
          >
            https://github.com/AiriYokochi/cube_petit_hardware_manual.git
          </div>

          <div style={{ marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a
              href="https://github.com/AiriYokochi/cube_petit_hardware_manual"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                textDecoration: "none",
                background: "#111",
                color: "#fff",
                padding: "10px 14px",
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              マニュアルを開く →
            </a>

            <a
              href="https://github.com/AiriYokochi/cube_petit_hardware_manual.git"
              style={{
                display: "inline-block",
                textDecoration: "none",
                border: "1px solid #ddd",
                color: "#111",
                padding: "10px 14px",
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 600,
                background: "#fff",
              }}
              onClick={(e) => {
                // クリックしてもOKだけど、git clone用途なので補助的に表示
                e.preventDefault()
                navigator.clipboard?.writeText(
                  "git clone https://github.com/AiriYokochi/cube_petit_hardware_manual.git"
                )
                alert("コピーしました: git clone ...")
              }}
            >
              git clone をコピー
            </a>
          </div>
        </div>
      </section>

      {/* Small note */}
      <div style={{ marginTop: 14, color: "#666", fontSize: 13, lineHeight: 1.7 }}>
        ※ 上の「git clone をコピー」はクリップボード対応ブラウザで動作します。
      </div>
    </JaLayout>
  )
}
