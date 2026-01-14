import JaLayout from "../../../layout/JaLayout"

type TocItem = {
  id: string
  label: string
}

function CodeBlock({ code }: { code: string }) {
  return (
    <pre
      style={{
        margin: "12px 0 0",
        background: "#0b1020",
        color: "#e7e7e7",
        padding: 14,
        borderRadius: 14,
        overflowX: "auto",
        fontSize: 13,
        lineHeight: 1.6,
      }}
    >
      <code>{code}</code>
    </pre>
  )
}

function Section({
  id,
  title,
  desc,
  children,
}: {
  id: string
  title: string
  desc?: string
  children?: React.ReactNode
}) {
  return (
    <section
      id={id}
      style={{
        scrollMarginTop: 90, // sticky header分ずらす
        background: "#fff",
        borderRadius: 16,
        padding: 18,
        boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
        border: "1px solid #eee",
      }}
    >
      <h2 style={{ margin: 0, fontSize: 18 }}>{title}</h2>
      {desc && <p style={{ margin: "10px 0 0", color: "#444", lineHeight: 1.8 }}>{desc}</p>}
      {children && <div style={{ marginTop: 12 }}>{children}</div>}
    </section>
  )
}

function InlineLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{ color: "#4fa0d2", textDecoration: "none", fontWeight: 700 }}
    >
      {children}
    </a>
  )
}

export default function JaDev() {
  const toc: TocItem[] = [
    { id: "overview", label: "概要" },
    { id: "repos", label: "リポジトリ" },
    { id: "requirements", label: "推奨環境" },
    { id: "setup", label: "Quick Start" },
    { id: "run", label: "起動（例）" },
    { id: "troubleshooting", label: "Troubleshooting" },
    { id: "contribute", label: "開発参加（PR/Issue）" },
  ]

  return (
    <JaLayout>
      {/* Title */}
      <div style={{ marginBottom: 18 }}>
        <h1 style={{ margin: 0 }}>開発者向け（Developer Wiki）</h1>
        <p style={{ margin: "10px 0 0", color: "#444", lineHeight: 1.8 }}>
          CubePetit の開発に参加したい方向けの情報をまとめています。セットアップ、起動、トラブル対応など。
        </p>
      </div>

      {/* Wiki layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "280px 1fr",
          gap: 14,
          alignItems: "start",
        }}
      >
        {/* Sidebar */}
        <aside
          style={{
            position: "sticky",
            top: 84,
            alignSelf: "start",
            background: "#fff",
            borderRadius: 16,
            padding: 14,
            border: "1px solid #eee",
            boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
          }}
        >
          <div style={{ fontSize: 12, color: "#666", marginBottom: 10 }}>目次</div>

          <nav style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {toc.map((item) => (
              <a
                key={item.id}
                href={`#/ja/dev/main#${item.id}`}
                style={{
                  textDecoration: "none",
                  color: "#111",
                  padding: "8px 10px",
                  borderRadius: 12,
                  background: "#f6f7f9",
                  fontSize: 14,
                  fontWeight: 700,
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div style={{ marginTop: 12, fontSize: 12, color: "#666", lineHeight: 1.7 }}>
            ※ クリックで該当セクションへ移動します
          </div>
        </aside>

        {/* Content */}
        <main style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <Section
            id="overview"
            title="概要"
            desc="CubePetit のソフトウェアはオープンソースで開発しています。基本機能・インタラクション・デモアプリを公開しています。"
          >
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9, color: "#333" }}>
              <li>ROS 1 / ROS 2 の両方に対応（構成により異なります）</li>
              <li>テレオプ / 自律移動 / 会話機能</li>
              <li>展示会向けのデモシナリオも整備中</li>
            </ul>
          </Section>

          <Section id="repos" title="リポジトリ" desc="用途ごとにリポジトリが分かれています。">
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
              <li>
                基本機能：<InlineLink href="https://github.com/sbgisen/cube_petit_ros">cube_petit_ros</InlineLink>
              </li>
              <li>
                インタラクション：<InlineLink href="https://github.com/sbgisen/cube_petit_interaction">cube_petit_interaction</InlineLink>
              </li>
              <li>
                デモ用アプリ：<InlineLink href="https://github.com/sbgisen/cube_petit_scenario">cube_petit_scenario</InlineLink>
              </li>
            </ul>
          </Section>

          <Section id="requirements" title="推奨環境" desc="まずはここを満たすとスムーズです。">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 10,
              }}
            >
              <div style={{ background: "#fafafa", border: "1px solid #eee", borderRadius: 14, padding: 14 }}>
                <div style={{ fontWeight: 900 }}>OS</div>
                <div style={{ marginTop: 6, color: "#444", lineHeight: 1.7 }}>Ubuntu 22.04 / 24.04</div>
              </div>

              <div style={{ background: "#fafafa", border: "1px solid #eee", borderRadius: 14, padding: 14 }}>
                <div style={{ fontWeight: 900 }}>ROS</div>
                <div style={{ marginTop: 6, color: "#444", lineHeight: 1.7 }}>ROS 2 Humble / Jazzy（推奨：Jazzy）</div>
              </div>

              <div style={{ background: "#fafafa", border: "1px solid #eee", borderRadius: 14, padding: 14 }}>
                <div style={{ fontWeight: 900 }}>Tools</div>
                <div style={{ marginTop: 6, color: "#444", lineHeight: 1.7 }}>Git / colcon / rosdep / VS Code</div>
              </div>
            </div>
          </Section>

          <Section id="setup" title="Quick Start（セットアップ）" desc="まずはワークスペースを作ってビルドします。">
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 10 }}>
              <div style={{ background: "#fafafa", border: "1px solid #eee", borderRadius: 14, padding: 14 }}>
                <div style={{ fontWeight: 900 }}>1) Clone</div>
                <CodeBlock
                  code={`cd ~/ros/src
git clone https://github.com/sbgisen/cube_petit_ros.git`}
                />
              </div>

              <div style={{ background: "#fafafa", border: "1px solid #eee", borderRadius: 14, padding: 14 }}>
                <div style={{ fontWeight: 900 }}>2) rosdep</div>
                <CodeBlock
                  code={`cd ~/ros
sudo rosdep init
rosdep update

cd ~/ros/src
rosdep install --from-paths . --ignore-src -r -y`}
                />
              </div>

              <div style={{ background: "#fafafa", border: "1px solid #eee", borderRadius: 14, padding: 14 }}>
                <div style={{ fontWeight: 900 }}>3) Build</div>
                <CodeBlock code={`cd ~/ros\ncolcon build --symlink-install`} />
              </div>
            </div>
          </Section>

          <Section id="run" title="起動（例）" desc="起動方法は構成により異なります。まずは環境をsourceします。">
            <CodeBlock
              code={`source /opt/ros/jazzy/setup.bash
source ~/ros/install/setup.bash

# 例：launch（パッケージ名に合わせて変更）
ros2 launch <package_name> <launch_file>.launch.py`}
            />
          </Section>

          <Section id="troubleshooting" title="Troubleshooting" desc="よくある問題と対処例です。">
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9, color: "#333" }}>
              <li>
                ビルドが重い / 落ちる →{" "}
                <code style={{ background: "#f2f2f2", padding: "2px 6px", borderRadius: 8 }}>
                  colcon build --parallel-workers 2
                </code>
              </li>
              <li>
                USBデバイスが見えない → dialout / video 権限や udev を確認
              </li>
              <li>
                ノードが見えない → <code style={{ background: "#f2f2f2", padding: "2px 6px", borderRadius: 8 }}>source</code>{" "}
                を忘れていないか確認
              </li>
            </ul>
          </Section>

          <Section id="contribute" title="開発参加（PR / Issue）" desc="不具合報告・改善提案・PR歓迎です！">
            <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
              <li>Issueで相談 → 実装方針のすり合わせができます</li>
              <li>PRで改善 → 小さな修正でも歓迎です</li>
              <li>展示会向けのデモ追加も歓迎です</li>
            </ul>

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
                  fontWeight: 800,
                }}
              >
                お問い合わせする →
              </a>
            </div>
          </Section>
        </main>
      </div>

      {/* responsive note */}
      <style>{`
        @media (max-width: 900px) {
          .wiki-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </JaLayout>
  )
}
