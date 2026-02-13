# 個人 Landing Page（Next.js + TypeScript）

此專案是以 Next.js App Router 建立的單頁式個人網站，內容目前使用 dummy data，方便後續直接替換。

## 技術棧

- Next.js 15
- TypeScript
- ESLint
- Vitest + React Testing Library

## 開發指令

```bash
npm run dev        # 啟動開發伺服器
npm test           # 執行測試
npm run lint       # 執行 ESLint
npm run build      # 建置 production 版本
```

## 內容替換位置

主要內容都集中在 `src/data/landing-content.ts`：

- Hero 區塊（品牌名、主標、副標）
- `介紹`
- `數位系統`
- `實用工具`
- `遊戲區`
- `部落格`
- `外部網站`
- `聯絡方式`
- Footer 版權擁有者名稱

你只要改這個檔案的內容，不需要改 JSX 結構，就能快速換成自己的資料。

## 主要版面檔案

- `src/app/page.tsx`: 首頁區塊渲染
- `src/app/globals.css`: 全站樣式（男性向藍灰色系、卡片、動畫、RWD）
- `src/app/layout.tsx`: Metadata 與字體設定

## 測試說明

`src/app/page.test.tsx` 會檢查首頁是否包含你指定的區塊標題與版權文案，確保核心結構不會被誤改。
