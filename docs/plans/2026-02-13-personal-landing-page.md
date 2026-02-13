# Personal Landing Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 建立一個 Next.js + TypeScript 個人 landing page，版面配置對齊 https://lab.helloruru.com/，以男性向藍灰色系呈現，並用 dummy data 填入指定區塊內容。

**Architecture:** 使用 Next.js App Router 建立單頁結構。資料層以 TypeScript 型別 + 靜態資料檔管理區塊內容，UI 由首頁組件渲染 Hero、介紹卡、區塊卡片格線、外部連結、聯絡方式與 Footer。測試採 Vitest + React Testing Library 先寫失敗測試再實作。

**Tech Stack:** Next.js (App Router), TypeScript, ESLint, Vitest, React Testing Library

---

### Task 1: 初始化專案與工具鏈

**Files:**
- Create: `package.json` (由 create-next-app 產生)
- Create: `src/app/layout.tsx`
- Create: `src/app/page.tsx`
- Create: `src/app/globals.css`
- Create: `.gitignore`

**Step 1: 建立 Next.js 專案（TypeScript + App Router）**

Run: `npx create-next-app@latest . --typescript --eslint --app --src-dir --import-alias "@/*" --use-npm --no-tailwind --yes`
Expected: 專案檔案生成完成

**Step 2: 安裝測試依賴**

Run: `npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom @testing-library/dom`
Expected: 測試依賴安裝成功

**Step 3: 建立測試命令**

Modify `package.json` scripts，新增 `test` 與 `test:watch`

**Step 4: Commit**

Run:
```bash
git add .
git commit -m "chore: bootstrap nextjs typescript landing page project"
```

### Task 2: TDD - 先寫首頁需求測試（Red）

**Files:**
- Create: `vitest.config.ts`
- Create: `src/test/setup.ts`
- Create: `src/app/page.test.tsx`

**Step 1: 撰寫失敗測試（驗證區塊與版權）**

在 `src/app/page.test.tsx` 撰寫測試，驗證：
- Hero 與主標題存在
- 區塊標題包含：介紹、數位系統、實用工具、遊戲區、部落格、外部網站、聯絡方式
- Footer 版權文案存在

**Step 2: 執行測試確認失敗**

Run: `npm test`
Expected: FAIL（因首頁尚未實作需求內容）

**Step 3: Commit**

Run:
```bash
git add vitest.config.ts src/test/setup.ts src/app/page.test.tsx package.json
git commit -m "test: add failing tests for landing page structure"
```

### Task 3: 建立型別與 Dummy Data

**Files:**
- Create: `src/types/landing.ts`
- Create: `src/data/landing-content.ts`

**Step 1: 建立資料型別**

定義 `LandingSection`, `LandingCard`, `LandingExternalLink`, `ContactItem` 等型別。

**Step 2: 建立 dummy data**

填入你要求的區塊順序：
1. 介紹
2. 數位系統
3. 實用工具
4. 遊戲區
5. 部落格
6. 外部網站
7. 聯絡方式
外加版權資訊。

**Step 3: Commit**

Run:
```bash
git add src/types/landing.ts src/data/landing-content.ts
git commit -m "feat: add typed dummy content model for landing sections"
```

### Task 4: 實作版面與樣式（Green）

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/app/page.tsx`
- Modify: `src/app/globals.css`

**Step 1: 設定 metadata 與字體**

在 `layout.tsx` 使用 `Metadata` 與 `next/font/google` 設定站點標題、描述與字體。

**Step 2: 實作首頁區塊**

在 `page.tsx` 渲染：
- Hero
- 介紹卡
- 數位系統/實用工具/遊戲區/部落格（卡片格線）
- 外部網站（外連按鈕）
- 聯絡方式
- Footer 版權

**Step 3: 套用男性向色系與互動細節**

在 `globals.css` 建立變數與樣式，參考目標站節奏但改為藍灰/鋼鐵系，保留卡片陰影、hover 與淡入動畫。

**Step 4: 執行測試確認轉綠**

Run: `npm test`
Expected: PASS

**Step 5: Commit**

Run:
```bash
git add src/app/layout.tsx src/app/page.tsx src/app/globals.css
git commit -m "feat: implement landing page layout and masculine theme"
```

### Task 5: 最終驗證與說明

**Files:**
- Modify: `README.md`

**Step 1: 補上使用與替換內容說明**

加入如何修改 dummy data、啟動開發與建置指令。

**Step 2: 完整驗證**

Run: `npm test && npm run lint && npm run build`
Expected: 全部通過

**Step 3: Commit**

Run:
```bash
git add README.md
git commit -m "docs: add content customization and run instructions"
```
