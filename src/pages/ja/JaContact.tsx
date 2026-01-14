import JaLayout from "../../layout/JaLayout"

type LinkItem = {
  title: string
  desc?: string
  url: string
}

type ExhibitionItem = {
  date: string
  eventName: string
  url?: string
  place?: string
  content?: string[]
  note?: string
}

function LinkCard({ title, desc, url }: LinkItem) {
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
      {desc && <div style={{ marginTop: 6, color: "#333", lineHeight: 1.7 }}>{desc}</div>}
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

function ExhibitionCard({ item }: { item: ExhibitionItem }) {
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
      <div style={{ display: "flex", gap: 10, alignItems: "baseline", flexWrap: "wrap" }}>
        <div
          style={{
            fontSize: 12,
            color: "#111",
            background: "#f2f2f2",
            padding: "4px 10px",
            borderRadius: 999,
          }}
        >
          {item.date}
        </div>

        <div style={{ fontSize: 16, fontWeight: 900 }}>{item.eventName}</div>
      </div>

      {item.place && (
        <div style={{ marginTop: 8, fontSize: 13, color: "#444" }}>
          <b>場所</b>：{item.place}
        </div>
      )}

      {item.url && (
        <div style={{ marginTop: 6, fontSize: 13 }}>
          <a
            href={item.url}
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#4fa0d2",
              textDecoration: "none",
              wordBreak: "break-word",
              overflowWrap: "anywhere",
            }}
          >
            {item.url}
          </a>
        </div>
      )}

      {item.content && item.content.length > 0 && (
        <div style={{ marginTop: 10 }}>
          <div style={{ fontSize: 12, color: "#666" }}>展示内容</div>
          <ul style={{ margin: "6px 0 0", paddingLeft: 18, lineHeight: 1.9, color: "#333" }}>
            {item.content.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      )}

      {item.note && (
        <div style={{ marginTop: 10, fontSize: 12, color: "#666", lineHeight: 1.7 }}>
          ※ {item.note}
        </div>
      )}
    </div>
  )
}

export default function JaContact() {
  const snsLinks: LinkItem[] = [
    {
      title: "YouTube",
      desc: "ROS-SIer SoftBank（動画・再生リスト）",
      url: "https://www.youtube.com/watch?v=0tyVF5ujO_o&list=PL509ZQjTHPYecUfyNaroISz6ZV1QCh2k4",
    },
    {
      title: "X",
      desc: "Cube_petit_2022",
      url: "https://x.com/Cube_petit_2022",
    },
  ]

  const webLinks: LinkItem[] = [
    {
      title: "HomePage",
      desc: "CubePetit紹介ページ",
      url: "https://www.ros-sier.com/case/hardware/cubepetit",
    },
    {
      title: "Contact",
      desc: "購入相談・お問い合わせ",
      url: "https://www.ros-sier.com/contact",
    },
  ]

  const devLinks: LinkItem[] = [
    {
      title: "Join Develop",
      desc: "ソフトウェア開発に参加する（GitHub）",
      url: "https://github.com/sbgisen/cube_petit_ros",
    },
    {
      title: "Join Hardware Update",
      desc: "ハードウェア更新・CAD（GitHub）",
      url: "https://github.com/sbgisen/cube_petit_cad",
    },
  ]

  const exhibitions2025: ExhibitionItem[] = [
    {
      date: "2025/9/2 ~ 9/5",
      eventName: "第43回 日本ロボット学会学術講演会（RSJ2025）",
      url: "https://ac.rsj-web.org/2025/index.html",
      place: "（未記載）",
      content: ["展示紹介", "Realtime API 会話デモ"],
      note: "会場情報は公式サイトをご確認ください。",
    },
    {
      date: "2025/9/9",
      eventName: "ROSCon JP",
      url: "https://roscon.jp/",
      place: "（未記載）",
      content: ["複数台での会話デモ"],
      note: "詳細は確定次第更新します。",
    },
  ]

  const exhibitions2024: ExhibitionItem[] = [
    {
      date: "2024/9/24, 9/25",
      eventName: "ROSCon JP 2024",
      url: "https://roscon.jp/2024/",
      place: "東京都立産業貿易センター 台東館",
      content: ["ROS 2 対応 Cube petit の展示", "会話デモ", "じゃんけん", "テレオプ"],
    },
  ]

  const exhibitions2023: ExhibitionItem[] = [
    {
      date: "2023",
      eventName: "第41回 日本ロボット学会学術講演会（RSJ2023）",
      place: "（未記載）",
      content: ["Cube petit の展示（詳細未記載）"],
      note: "展示内容の詳細が分かれば追記できます。",
    },
    {
      date: "2023",
      eventName: "ROSCon JP 2023",
      place: "（未記載）",
      content: ["Cube petit の展示（詳細未記載）"],
    },
    {
      date: "2023",
      eventName: "ROS Japan UG #50 ROS Robot Party!",
      place: "（未記載）",
      content: ["Cube petit の展示（詳細未記載）"],
    },
  ]

  const exhibitions2022: ExhibitionItem[] = [
    {
      date: "2022",
      eventName: "第40回 日本ロボット学会学術講演会（RSJ2022）",
      place: "（未記載）",
      content: ["Cube petit の展示（詳細未記載）"],
    },
    {
      date: "2022",
      eventName: "ROSCon JP 2022",
      place: "（未記載）",
      content: ["Cube petit の展示（詳細未記載）"],
    },
    {
      date: "2022/9/3 (Sat) 12:00~18:00 / 2022/9/4 (Sun) 10:00~17:00",
      eventName: "Maker Faire Tokyo 2022",
      place: "東京ビッグサイト（西ホール）",
      content: ["Cube petit の展示（詳細未記載）"],
      note: "主催：株式会社オライリー・ジャパン",
    },
  ]

  return (
    <JaLayout>
      {/* Title */}
      <div style={{ marginBottom: 18 }}>
        <h1 style={{ margin: 0 }}>リンク・最新情報</h1>
        <p style={{ margin: "10px 0 0", color: "#444", lineHeight: 1.8 }}>
          CubePetit に関するSNS・公式ページ・開発参加リンク、過去の出展情報はこちらから。
        </p>
      </div>

      {/* SNS */}
      <section style={{ marginTop: 18 }}>
        <h2 style={{ marginBottom: 10 }}>SNSリンク</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 12,
          }}
        >
          {snsLinks.map((item) => (
            <LinkCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      {/* Website */}
      <section style={{ marginTop: 18 }}>
        <h2 style={{ marginBottom: 10 }}>Web / Contact</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 12,
          }}
        >
          {webLinks.map((item) => (
            <LinkCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      {/* Dev */}
      <section style={{ marginTop: 18 }}>
        <h2 style={{ marginBottom: 10 }}>Join / Development</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 12,
          }}
        >
          {devLinks.map((item) => (
            <LinkCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      {/* Exhibitions */}
      <section style={{ marginTop: 18 }}>
        <h2 style={{ marginBottom: 10 }}>過去の出展情報</h2>

        {/* 2025 */}
        <div style={{ marginTop: 10 }}>
          <h3 style={{ margin: "0 0 10px" }}>2025</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: 12,
            }}
          >
            {exhibitions2025.map((item) => (
              <ExhibitionCard key={item.eventName + item.date} item={item} />
            ))}
          </div>
        </div>

        {/* 2024 */}
        <div style={{ marginTop: 16 }}>
          <h3 style={{ margin: "0 0 10px" }}>2024</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: 12,
            }}
          >
            {exhibitions2024.map((item) => (
              <ExhibitionCard key={item.eventName + item.date} item={item} />
            ))}
          </div>
        </div>

        {/* 2023 */}
        <div style={{ marginTop: 16 }}>
          <h3 style={{ margin: "0 0 10px" }}>2023</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: 12,
            }}
          >
            {exhibitions2023.map((item) => (
              <ExhibitionCard key={item.eventName + item.date} item={item} />
            ))}
          </div>
        </div>

        {/* 2022 */}
        <div style={{ marginTop: 16 }}>
          <h3 style={{ margin: "0 0 10px" }}>2022</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: 12,
            }}
          >
            {exhibitions2022.map((item) => (
              <ExhibitionCard key={item.eventName + item.date} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom message */}
      <div
        style={{
          marginTop: 18,
          background: "#111",
          color: "#fff",
          borderRadius: 16,
          padding: 18,
        }}
      >
        <div style={{ fontSize: 16, fontWeight: 800 }}>研究開発・共同検討も歓迎です</div>
        <p style={{ margin: "8px 0 0", opacity: 0.9, lineHeight: 1.8 }}>
          CubePetitを利用した研究開発もお待ちしております。<br />
          (Free Trial Available)
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
