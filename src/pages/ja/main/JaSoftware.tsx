import JaLayout from "../../../layout/JaLayout"

type RepoLink = {
  title: string
  desc: string
  url: string
}

function RepoCard({ title, desc, url }: RepoLink) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      style={{
        display: "block",
        textDecoration: "none",
        color: "#111",
        background: "#fff",
        borderRadius: 16,
        padding: 16,
        boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
        border: "1px solid #eee",
      }}
    >
      <div style={{ fontSize: 12, color: "#666" }}>{title}</div>
      <div style={{ marginTop: 6, color: "#333", lineHeight: 1.7, fontWeight: 800 }}>{desc}</div>

      <div
        style={{
          marginTop: 10,
          fontSize: 13,
          color: "#4fa0d2",
          wordBreak: "break-word",
          overflowWrap: "anywhere",
        }}
      >
        {url}
      </div>
    </a>
  )
}

function FeatureCard({
  title,
  desc,
  tags,
}: {
  title: string
  desc: string
  tags?: string[]
}) {
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
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
        <div style={{ fontSize: 16, fontWeight: 900 }}>{title}</div>

        {tags && tags.length > 0 && (
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {tags.map((t) => (
              <span
                key={t}
                style={{
                  fontSize: 12,
                  color: "#111",
                  background: "#f2f2f2",
                  padding: "4px 10px",
                  borderRadius: 999,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      <p style={{ margin: "10px 0 0", color: "#444", lineHeight: 1.8, fontSize: 14 }}>{desc}</p>
    </div>
  )
}

export default function JaSoftware() {
  const repos: RepoLink[] = [
    {
      title: "基本機能",
      desc: "cube_petit_ros（テレオプ / 自律移動 / 会話など）",
      url: "https://github.com/sbgisen/cube_petit_ros",
    },
    {
      title: "インタラクション機能",
      desc: "cube_petit_interaction（会話・演出などの拡張）",
      url: "https://github.com/sbgisen/cube_petit_interaction",
    },
    {
      title: "デモ用アプリケーション",
      desc: "cube_petit_scenario（展示・デモ用のシナリオ実行）",
      url: "https://github.com/sbgisen/cube_petit_scenario",
    },
  ]

  return (
    <JaLayout>
      {/* Title */}
      <div style={{ marginBottom: 18 }}>
        <h1 style={{ margin: 0 }}>ソフトウェア</h1>
        <p style={{ margin: "10px 0 0", color: "#444", lineHeight: 1.8 }}>
          CubePetit のソフトウェアはオープンソースで開発しています。基本機能からインタラクション、デモアプリまで公開しています。
        </p>
      </div>

      {/* Repos */}
      <section style={{ marginTop: 18 }}>
        <h2 style={{ marginBottom: 10 }}>GitHub リポジトリ</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 12,
          }}
        >
          {repos.map((r) => (
            <RepoCard key={r.url} {...r} />
          ))}
        </div>
      </section>

      {/* Supported */}
      <section style={{ marginTop: 18 }}>
        <h2 style={{ marginBottom: 10 }}>対応</h2>

        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: 18,
            boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
            border: "1px solid #eee",
          }}
        >
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <span style={{ fontSize: 12, background: "#f2f2f2", padding: "6px 10px", borderRadius: 999 }}>
              ROS 1: Noetic / Melodic
            </span>
            <span style={{ fontSize: 12, background: "#f2f2f2", padding: "6px 10px", borderRadius: 999 }}>
              ROS 2: Humble / Jazzy
            </span>
          </div>

          <p style={{ margin: "10px 0 0", color: "#444", lineHeight: 1.8 }}>
            構成やハードウェアバージョンによって対応状況が異なる場合があります。最新情報は各リポジトリをご確認ください。
          </p>
        </div>
      </section>

      {/* Features */}
      <section style={{ marginTop: 18 }}>
        <h2 style={{ marginBottom: 10 }}>機能</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 12,
          }}
        >
          {/* Basic */}
          <FeatureCard
            title="ラジコン操作"
            tags={["基本機能"]}
            desc="コントローラを使って手動で移動できます。展示会での安全な運用や、調整作業にも便利です。"
          />

          <FeatureCard
            title="地図作成 / 自律移動"
            tags={["基本機能"]}
            desc="2D LiDARで自己位置推定と地図作成を行います。さらにDepthカメラで人や障害物を避けながら、指定した位置まで移動・巡回します。"
          />

          <FeatureCard
            title="オフライン会話"
            tags={["基本機能"]}
            desc="オフラインの日本語・英語の音声合成 / 音声認識に対応しています。日本語の音声合成に OpenJTalk、認識に Julius を使用し、感情や速度を変えながら発話可能です。"
          />

          {/* Advanced */}
          <FeatureCard
            title="自動充電"
            tags={["応用機能", "ROS1のみ"]}
            desc="バッテリ残量の低下を検知し、充電ドックへ移動します。ARマーカを見ながら自動で充電位置へ合わせます。（ROS package: ar_track_alvar）"
          />

          <FeatureCard
            title="オンライン会話"
            tags={["応用機能"]}
            desc="（準備中）オンライン会話機能を追加予定です。Realtime API 等を利用した自然な会話デモを想定しています。"
          />

          <FeatureCard
            title="Webアプリ"
            tags={["応用機能"]}
            desc="（準備中）ロボット状態の表示や操作を行うWeb UIを追加予定です。"
          />

          <FeatureCard
            title="デモ用アプリケーション"
            tags={["応用機能"]}
            desc="（準備中）展示会向けのシナリオ実行や、複数デモを切り替える仕組みを整備しています。"
          />
        </div>
      </section>

      {/* Developer CTA */}
      <div
        style={{
          marginTop: 18,
          background: "#111",
          color: "#fff",
          borderRadius: 16,
          padding: 18,
        }}
      >
        <div style={{ fontSize: 16, fontWeight: 900 }}>開発者向け情報</div>
        <p style={{ margin: "8px 0 0", opacity: 0.9, lineHeight: 1.8 }}>
          セットアップ手順・開発の始め方・よくあるトラブルなどは、開発者向けページにまとめています。
        </p>

        <div style={{ marginTop: 12 }}>
          <a
            href="#/ja/dev/main"
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
            開発者向けページへ →
          </a>
        </div>
      </div>
    </JaLayout>
  )
}
