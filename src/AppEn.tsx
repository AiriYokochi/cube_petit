import { Link } from "react-router-dom"

export default function EnPage() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Cube petit</h1>
      <p>This is the English page.</p>
      <Link to="/ja">← 日本語</Link>
    </div>
  )
}
