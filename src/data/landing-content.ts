import type { LandingContent } from "@/types/landing";

export const landingContent: LandingContent = {
  brandName: "JOSH LIN",
  heroTitle: "數位實驗世界",
  heroSubtitle: "系統、工具、內容與遊戲化體驗的整合入口",
  intro: {
    title: "歡迎來到我的數位實驗世界",
    paragraphs: [
      "這裡是匯集我所有數位專案、技術實驗與個人創作的核心樞紐。",
      "致力於將 AI 技術與程式開發轉化為具體的應用，您可以在此探索我正在維護的系統與開發中的創意專案。",
      "本站內容將持續迭代，同步更新最新的技術成果與文章，為您提供簡潔而完整的數位體驗。",
      "當然，在AI的時代，大部分的內容都是由 AI 助理所產生的。",
    ],
    note: "",
  },
  sections: [
    {
      id: "systems",
      title: "數位系統",
      cards: [
        {
          title: "跨語言專案文獻轉譯平台",
          description: "整合自然語言處理技術，提供繁體中文與日文之翻譯服務",
          href: "https://project-translate.tools.aibasil.com",
          external: true,
          icon: "TRN",
          iconTone: "steel",
        },
        {
          title: "OpenSpec 專案追蹤面板",
          description: "OpenSpec 規格管理與追蹤儀表板",
          href: "https://openspec-dashboard.tools.aibasil.com/",
          external: true,
          icon: "OSD",
          iconTone: "slate",
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
