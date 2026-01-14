# cube_petit

Cube petit の紹介ページ（GitHub Pages）です。  
日本語 / 英語ページを React + Vite + TypeScript で作成しています。

## 🌐 Website

- Japanese: https://airiyokochi.github.io/cube_petit/#/ja
- English: https://airiyokochi.github.io/cube_petit/#/en

---

## 🛠 Tech Stack

- React
- TypeScript
- Vite
- React Router（HashRouter）
- GitHub Pages

---

## 📁 Pages

日本語ページ（`#/ja`）は以下の構成です：

- コンセプト
- ハードウェア紹介
- ソフトウェア紹介
- CubePetitをつくる（DIY）
- CubePetitを購入する
- リンク集・コンタクト・最新情報

---

## 🚀 Development

### 1) Install dependencies

```bash
yarn
```

### 2) Start local server

```bash
yarn dev
```

ブラウザで以下にアクセスできます：
- http://localhost:5173/#/ja
- http://localhost:5173/#/en

## 📦 Build
```
yarn build
```

ビルド成果物は `dist/` に生成されます。

## 🚢 Deploy (GitHub Pages)

このリポジトリは GitHub Actions により自動デプロイされます。
- develop ブランチに push すると自動で gh-pages にデプロイされます
- 公開URL: https://airiyokochi.github.io/cube_petit/

## 📝 Notes
- GitHub Pages 配下で動作させるため、`vite.config.ts` で `base` を設定しています
- ルーティングは GitHub Pages で 404 を避けるため `HashRouter` を使用しています

## 📩 Contact

お問い合わせはこちら：
https://www.ros-sier.com/contact