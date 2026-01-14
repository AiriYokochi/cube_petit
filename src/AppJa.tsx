import { Link } from "react-router-dom"

export default function JaPage() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#fafafa", minHeight: "100vh" }}>
      {/* Hero */}
      <header
        style={{
          padding: "56px 16px",
          background: "#111",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <div style={{ width: "100%", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Link
              to="/en"
              style={{
                color: "#fff",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.4)",
                padding: "8px 12px",
                borderRadius: 999,
                fontSize: 14,
              }}
            >
              English →
            </Link>
          </div>

          <h1 style={{ margin: "16px 0 8px", fontSize: 42, letterSpacing: 0.5 }}>Cube petit</h1>
          <p style={{ margin: 0, fontSize: 18, opacity: 0.9 }}>
            会話とロボット技術を統合した卓上型ロボット
          </p>
        </div>
      </header>

      <main style={{  margin: "0 auto", padding: "24px 16px" }}>
        {/* Overview */}
        <section
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: 20,
            boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
          }}
        >
          <h2 style={{ marginTop: 0 }}>概要</h2>
          <p style={{ marginBottom: 0, lineHeight: 1.8 }}>
            Cube petit（キューブプチ）は、音声対話・センサ情報・ROSによる制御を統合したデモロボットです。
            展示会や研究紹介の場で、会話デモやロボット技術の導入イメージを直感的に伝えることを目的としています。
          </p>
        </section>

        {/* Features */}
        <section style={{ marginTop: 20 }}>
          <h2>できること</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 12,
            }}
          >
            {[
              {
                title: "音声認識",
                desc: "Realtime API の Whisper を利用",
              },
              {
                title: "会話",
                desc: "GPT-4o による対話処理",
              },
              {
                title: "音声合成",
                desc: "OpenJTalk による読み上げ",
              },
              {
                title: "センサ入力",
                desc: "カメラ / LiDAR 等の情報を利用",
              },
            ].map((f) => (
              <div
                key={f.title}
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  padding: 16,
                  boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
                }}
              >
                <h3 style={{ margin: "0 0 6px" }}>{f.title}</h3>
                <p style={{ margin: 0, color: "#444", lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* System */}
        <section style={{ marginTop: 20 }}>
          <h2>システム構成</h2>

          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              padding: 20,
              boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
            }}
          >
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
              <li>
                <b>Sensor</b>：Intel RealSense D435i / LD19（2D LiDAR） / OAK-1（AIカメラ）
              </li>
              <li>
                <b>PC</b>：MINISFORUM UM690L Slim
              </li>
              <li>
                <b>Software</b>：ROS 1（テレオペ / 自律移動 / 自動充電 / 会話）・ROS 2（テレオペ / 会話）
              </li>
            </ul>
          </div>
        </section>

        {/* Demo */}
        <section style={{ marginTop: 20 }}>
          <h2>デモ</h2>

          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              padding: 20,
              boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
            }}
          >
            <p style={{ marginTop: 0, color: "#444", lineHeight: 1.8 }}>
              デモ動画（YouTube）をここに埋め込めます。
            </p>

            <div
              style={{
                width: "100%",
                aspectRatio: "16 / 9",
                background: "#eee",
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#666",
                fontSize: 14,
              }}
            >
              YouTube iframe をここに貼る
            </div>

            {/* 例：YouTube埋め込み（VIDEO_IDを差し替え）
            <iframe
              width="100%"
              style={{ aspectRatio: "16 / 9", borderRadius: 12 }}
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="Cube petit demo"
              frameBorder="0"
              allowFullScreen
            />
            */}
          </div>
        </section>

        {/* Links */}
        <section style={{ marginTop: 20 }}>
          <h2>リンク</h2>
          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              padding: 20,
              boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
            }}
          >
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
              <li>
                <a href="https://github.com/sbgisen/cube_petit_ros" target="_blank" rel="noreferrer">
                  cube_petit_ros（GitHub）
                </a>
              </li>
            </ul>
          </div>
        </section>

        <footer style={{ textAlign: "center", padding: "28px 0", color: "#666" }}>
          <small>© Cube petit</small>
        </footer>
      </main>
    </div>
  )
}
