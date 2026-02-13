import type { LandingContent } from "@/types/landing";

export const landingContent: LandingContent = {
  brandName: "JOSH LIN",
  heroTitle: "個人數位實驗室",
  heroSubtitle: "系統、工具、內容與遊戲化體驗的整合入口",
  intro: {
    title: "這裡是我的個人 landing page",
    paragraphs: [
      "這個網站是我整理數位專案與個人創作的中樞。你可以在這裡快速找到我正在維護的系統、常用工具與實驗內容。",
      "我會持續更新每個區塊，把新專案與新文章同步放上來，讓入口保持簡潔但資訊完整。",
    ],
    note: "目前內容為 dummy data，後續可直接替換成你的正式資料。",
  },
  sections: [
    {
      id: "systems",
      title: "數位系統",
      cards: [
        {
          title: "跨語言專案文獻轉譯平台",
          description:
            "整合先進的自然語言處理技術，提供繁體中文與日文之翻譯服務",
          href: "https://project-translate.tools.aibasil.com",
          external: true,
          icon: "TRN",
          iconTone: "steel",
        },
      ],
    },
    {
      id: "tools",
      title: "實用工具",
      cards: [
        {
          title: "PDF拆分、合併工具",
          description: "線上拆分 PDF 頁面，快速輸出你需要的片段檔案",
          href: "https://pdf-splitter.tools.aibasil.com",
          external: true,
          icon: "PDF",
          iconTone: "steel",
        },
        {
          title: "PDF轉PPTX",
          description: "將NotebookLM產出的PDF，轉譯為PPTX簡報格式",
          href: "https://pdf-to-pptx.tools.aibasil.com",
          external: true,
          icon: "PPT",
          iconTone: "slate",
        },
        {
          title: "計算機",
          description: "快速進行日常運算，支援基本加減乘除操作",
          href: "https://calculator.tools.aibasil.com",
          external: true,
          icon: "CAL",
          iconTone: "cyan",
        },
      ],
    },
    {
      id: "games",
      title: "遊戲區",
      cards: [
        {
          title: "Gomoku 五子棋",
          description: "經典五子棋網頁版，支援快速開局與對弈練習",
          href: "https://gomoku.games.aibasil.com",
          external: true,
          icon: "GMK",
          iconTone: "slate",
        },
        {
          title: "Minesweeper 踩地雷",
          description: "經典踩地雷遊戲，訓練邏輯推理與判斷力",
          href: "https://minesweeper.games.aibasil.com",
          external: true,
          icon: "MINE",
          iconTone: "cyan",
        },
      ],
    },
    {
      id: "ai-translation-tools",
      title: "AI工具翻譯",
      cards: [
        {
          title: "OpenSpec Translate",
          description: "OpenSpec 規格文件翻譯工具專案",
          href: "https://github.com/aibasil-ai/OpenSpec_translate",
          external: true,
          icon: "OSP",
          iconTone: "steel",
        },
        {
          title: "Superpowers Translate",
          description: "Superpowers 技能內容翻譯專案",
          href: "https://github.com/aibasil-ai/superpowers_translate",
          external: true,
          icon: "SUP",
          iconTone: "slate",
        },
        {
          title: "UI/UX Pro Max Skill Translate",
          description: "UI/UX Pro Max 技能翻譯與在地化專案",
          href: "https://github.com/aibasil-ai/ui-ux-pro-max-skill_translate",
          external: true,
          icon: "UIX",
          iconTone: "cyan",
        },
      ],
    },
    {
      id: "blog",
      title: "部落格",
      cards: [
        {
          title: "AIBASIL 專欄（Vocus）",
          description: "查看我在 Vocus 的最新文章與觀點整理",
          href: "https://vocus.cc/salon/aibasil",
          external: true,
          icon: "VOC",
          iconTone: "cyan",
          badge: { text: "vocus.cc", tone: "neutral" },
          fullWidth: true,
        },
      ],
    },
  ],
  externalLinks: [
    { label: "Profile", href: "#", icon: "portfolio" },
    { label: "GitHub", href: "https://github.com/aibasil-ai", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/chia-yi-lin-joshlin/",
      icon: "linkedin",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/aibasil_ai/",
      icon: "instagram",
    },
    {
      label: "Threads",
      href: "https://www.threads.com/@aibasil_ai",
      icon: "threads",
    },
    {
      label: "Facebook",
      href: "#",
      icon: "facebook",
    },
  ],
  contacts: [
    {
      label: "Email",
      value: "aibasil@joshlucky.com",
      href: "mailto:aibasil@joshlucky.com",
    },
  ],
  copyrightOwner: "Josh Lin",
};
