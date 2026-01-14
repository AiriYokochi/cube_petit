import JaLayout from "../../layout/JaLayout"

type LinkItem = {
  title: string
  desc?: string
  url: string
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

  return (
    <JaLayout>
      {/* Title */}
      <div style={{ marginBottom: 18 }}>
        <h1 style={{ margin: 0 }}>リンク・最新情報</h1>
        <p style={{ margin: "10px 0 0", color: "#444", lineHeight: 1.8 }}>
          CubePetit に関するSNS・公式ページ・開発参加リンクはこちらから。
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
