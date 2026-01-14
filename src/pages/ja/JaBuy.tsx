import JaLayout from "../../layout/JaLayout"

export default function JaBuy() {
  return (
    <JaLayout>
      {/* Title */}
      <div style={{ marginBottom: 18 }}>
        <h1 style={{ margin: 0 }}>CubePetitを購入する</h1>
        <p style={{ margin: "10px 0 0", color: "#444", lineHeight: 1.8 }}>
          CubePetit の購入をご検討いただきありがとうございます。現在、工場での製作体制を準備中です。
        </p>
      </div>

      {/* Status Banner */}
      <div
        style={{
          background: "#fff",
          borderRadius: 16,
          padding: 16,
          boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
          border: "1px solid #eee",
          marginBottom: 14,
        }}
      >
        <div style={{ fontSize: 12, color: "#666" }}>販売状況</div>
        <div style={{ fontSize: 18, fontWeight: 800, marginTop: 6 }}>
          現在工場作成中です。販売開始まで少々お待ちください。
        </div>
        <p style={{ margin: "10px 0 0", color: "#444", lineHeight: 1.8 }}>
          購入希望の方は、下記フォームよりご連絡ください。
        </p>

        <div style={{ marginTop: 12 }}>
          <a
            href="https://www.ros-sier.com/contact"
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
            お問い合わせフォームへ →
          </a>
        </div>
      </div>

      {/* Available Model */}
      <section style={{ marginTop: 18 }}>
        <h2 style={{ marginBottom: 10 }}>Available Model</h2>

        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: 18,
            boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap" }}>
            <h3 style={{ margin: 0 }}>Model v3</h3>
            <span
              style={{
                fontSize: 12,
                color: "#111",
                background: "#f2f2f2",
                padding: "4px 10px",
                borderRadius: 999,
              }}
            >
              テレオプ / 自律移動 / 会話
            </span>
          </div>

          <div style={{ marginTop: 12, color: "#333", lineHeight: 1.9 }}>
            <div>
              <b>Function</b>：テレオプ / 自律移動 / 会話
            </div>
            <div>
              <b>Sensor</b>：LiDAR（LDLidar D300）/ Depth Camera（RealSense D435i）/ IMU（Witmotion）
            </div>
            <div>
              <b>Motor</b>：DJI M2006
            </div>
          </div>

          {/* Variants */}
          <div
            style={{
              marginTop: 14,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 12,
            }}
          >
            {/* Full Custom */}
            <div
              style={{
                border: "1px solid #eee",
                borderRadius: 16,
                padding: 16,
                background: "#fafafa",
              }}
            >
              <div style={{ fontSize: 12, color: "#666" }}>Variant 1</div>
              <div style={{ fontSize: 18, fontWeight: 800, marginTop: 6 }}>Full Custom</div>
              <div style={{ marginTop: 6, color: "#444", lineHeight: 1.7, fontSize: 14 }}>
                PC：MINISFORUM UM690L Slim
              </div>

              <div style={{ marginTop: 10, fontSize: 14 }}>
                <b>Price</b>：¥Ask
              </div>

              <p style={{ margin: "10px 0 0", color: "#444", lineHeight: 1.8, fontSize: 14 }}>
                PCをセットアップいただくだけでCubePetitが動くバージョンです。PCセットアップのお手伝いも
                プラス料金で可能です。
              </p>
            </div>

            {/* Without PC */}
            <div
              style={{
                border: "1px solid #eee",
                borderRadius: 16,
                padding: 16,
                background: "#fafafa",
              }}
            >
              <div style={{ fontSize: 12, color: "#666" }}>Variant 2</div>
              <div style={{ fontSize: 18, fontWeight: 800, marginTop: 6 }}>Without PC</div>
              <div style={{ marginTop: 6, color: "#444", lineHeight: 1.7, fontSize: 14 }}>
                Only Body + Sensor + Motor
              </div>

              <div style={{ marginTop: 10, fontSize: 14 }}>
                <b>Price</b>：¥Ask
              </div>

              <p style={{ margin: "10px 0 0", color: "#444", lineHeight: 1.8, fontSize: 14 }}>
                PC・バッテリが不要の方向けのバージョンです。お手持ちのPCやRaspberry Pi 5などで利用したい方向け。
                PC（or RaspberryPi等）の選定には下の動作条件を確認してください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PC Requirements */}
      <section style={{ marginTop: 18 }}>
        <h2 style={{ marginBottom: 10 }}>PC動作条件</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 12,
          }}
        >
          {/* Must */}
          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              padding: 16,
              boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
            }}
          >
            <h3 style={{ marginTop: 0, marginBottom: 8, fontSize: 16 }}>必須条件（ハード）</h3>
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
              <li>Wi-Fi / Bluetooth</li>
              <li>USB 3.0 ×2口以上</li>
              <li>HDMI端子</li>
            </ul>
          </div>

          {/* Recommended */}
          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              padding: 16,
              boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
            }}
          >
            <h3 style={{ marginTop: 0, marginBottom: 8, fontSize: 16 }}>推奨条件</h3>
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
              <li>電源を入れたときに自動で起動する機能</li>
            </ul>
          </div>

          {/* Verified */}
          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              padding: 16,
              boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
            }}
          >
            <h3 style={{ marginTop: 0, marginBottom: 8, fontSize: 16 }}>動作確認済みデバイス</h3>
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
              <li>Raspberry Pi 5</li>
              <li>MINISFORUM UM690L Slim</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <div
        style={{
          marginTop: 18,
          background: "#111",
          color: "#fff",
          borderRadius: 16,
          padding: 18,
        }}
      >
        <div style={{ fontSize: 16, fontWeight: 800 }}>購入相談・お見積り</div>
        <p style={{ margin: "8px 0 0", opacity: 0.9, lineHeight: 1.8 }}>
          仕様や納期、カスタマイズ希望などがあればお気軽にご連絡ください。
        </p>

        <div style={{ marginTop: 12 }}>
          <a
            href="https://www.ros-sier.com/contact"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              textDecoration: "none",
              background: "#fff",
              color: "#111",
              padding: "10px 14px",
              borderRadius: 999,
              fontSize: 14,
              fontWeight: 800,
            }}
          >
            お問い合わせする →
          </a>
        </div>
      </div>
    </JaLayout>
  )
}
