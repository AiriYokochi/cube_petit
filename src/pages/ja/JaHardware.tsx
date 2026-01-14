import JaLayout from "../../layout/JaLayout"

type VersionCardProps = {
  version: string
  period: string
  title: string
  specs: string[]
  notes: string[]
}

function VersionCard({ version, period, title, specs, notes }: VersionCardProps) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 16,
        padding: 16,
        boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
        border: "1px solid #eee",
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap" }}>
        <div style={{ fontSize: 18, fontWeight: 900 }}>{version}</div>
        <div style={{ fontSize: 12, color: "#666" }}>{period}</div>
      </div>

      <div style={{ marginTop: 8, fontSize: 14, color: "#333", fontWeight: 700 }}>{title}</div>

      <div style={{ marginTop: 10 }}>
        <div style={{ fontSize: 12, color: "#666" }}>構成</div>
        <ul style={{ margin: "6px 0 0", paddingLeft: 18, lineHeight: 1.9 }}>
          {specs.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>

      <div style={{ marginTop: 10 }}>
        <div style={{ fontSize: 12, color: "#666" }}>特徴</div>
        <ul style={{ margin: "6px 0 0", paddingLeft: 18, lineHeight: 1.9 }}>
          {notes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function JaHardware() {
  const cadRepo = "https://github.com/sbgisen/cube_petit_cad.git"

  return (
    <JaLayout>
      {/* Title */}
      <div style={{ marginBottom: 18 }}>
        <h1 style={{ margin: 0 }}>ハードウェア紹介</h1>
        <p style={{ margin: "10px 0 0", color: "#444", lineHeight: 1.8 }}>
          CubePetit のハードウェアはオープンハードとして公開しています。
        </p>
      </div>

      {/* License / Notice */}
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
        <div style={{ fontSize: 12, color: "#666" }}>利用条件</div>
        <div style={{ marginTop: 6, fontSize: 16, fontWeight: 800 }}>
          個人・研究用途での利用を想定しています
        </div>

        <ul style={{ margin: "10px 0 0", paddingLeft: 18, lineHeight: 1.9, color: "#333" }}>
          <li>自分の環境で使用する用途に限り利用してください</li>
          <li>再配布はご遠慮ください</li>
          <li>商用利用は禁止しています</li>
        </ul>
      </div>

      {/* CAD link */}
      <section style={{ marginTop: 18 }}>
        <h2 style={{ marginBottom: 10 }}>CADデータ</h2>

        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: 18,
            boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
            border: "1px solid #eee",
          }}
        >
          <p style={{ marginTop: 0, marginBottom: 12, color: "#444", lineHeight: 1.8 }}>
            ハードウェア設計（CAD）は以下のリポジトリから確認できます。
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
                wordBreak: "break-word",
                overflowWrap: "anywhere",
              }}
            >
              {cadRepo}
            </div>

            <div style={{ marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a
                href="https://github.com/sbgisen/cube_petit_cad"
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
                CADを開く →
              </a>

              <button
                type="button"
                style={{
                  border: "1px solid #ddd",
                  background: "#fff",
                  color: "#111",
                  padding: "10px 14px",
                  borderRadius: 999,
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigator.clipboard?.writeText(`git clone ${cadRepo}`)
                  alert("コピーしました: git clone ...")
                }}
              >
                git clone をコピー
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Versions */}
      <section style={{ marginTop: 18 }}>
        <h2 style={{ marginBottom: 10 }}>Versions</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 12,
          }}
        >
          <VersionCard
            version="V1"
            period="2018/12 ~ 2020"
            title="初期プロトタイプ"
            specs={[
              "Raspberry Pi 4 + LiDAR + RealSense",
              "モータ：Dynamixel",
              "モバイルバッテリー ×2",
            ]}
            notes={[
              "軽量構成で試作を重視",
              "基本機能の検証と開発を進めたバージョン",
            ]}
          />

          <VersionCard
            version="V2"
            period="2020 ~ 2023"
            title="拡張・自動充電対応"
            specs={[
              "NIC PC + LiDAR + RealSense",
              "モータ：DJI M2006（CAN通信）",
              "バッテリ：自作",
            ]}
            notes={[
              "背面にカメラと充電コネクタを追加",
              "自動充電が可能になったバージョン",
            ]}
          />

          <VersionCard
            version="V3"
            period="2023 ~ 2025"
            title="工場生産を意識した構成"
            specs={[
              "MINISFORUM PC + LiDAR + RealSense",
              "足回りはV2から継続",
              "バッテリ：モバイルバッテリー",
            ]}
            notes={[
              "自動充電機能は無し（コスト・取り回し優先）",
              "会話機能に重点を置いたバージョン",
              "工場生産に向けてより安価・扱いやすい構成へ",
            ]}
          />
        </div>
      </section>

      <div style={{ marginTop: 14, color: "#666", fontSize: 13, lineHeight: 1.7 }}>
        ※ 仕様は更新される可能性があります。
      </div>
    </JaLayout>
  )
}
