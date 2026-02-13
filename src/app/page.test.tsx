import React from "react";
import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home landing page", () => {
  it("renders all required sections and copyright", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { name: /數位系統/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /實用工具/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /遊戲區/i })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /AI工具翻譯/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /部落格/i })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /外部網站/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /聯絡方式/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/版權所有/i)).toBeInTheDocument();
  });

  it("renders requested section links and hides show-more when not needed", () => {
    render(<Home />);

    const systemsSection = screen.getAllByLabelText("section-數位系統")[0];
    expect(within(systemsSection).getAllByRole("link")).toHaveLength(1);
    expect(
      within(systemsSection).getByRole("link", {
        name: /跨語言專案文獻轉譯平台/,
      }),
    ).toHaveAttribute("href", "https://project-translate.tools.aibasil.com");

    const toolsSection = screen.getAllByLabelText("section-實用工具")[0];
    expect(within(toolsSection).getAllByRole("link")).toHaveLength(3);

    const gamesSection = screen.getAllByLabelText("section-遊戲區")[0];
    expect(within(gamesSection).getAllByRole("link")).toHaveLength(2);
    const aiTranslationSection = screen.getAllByLabelText("section-AI工具翻譯")[0];
    expect(within(aiTranslationSection).getAllByRole("link")).toHaveLength(3);

    expect(
      within(systemsSection).queryByRole("button", { name: "顯示更多" }),
    ).not.toBeInTheDocument();
    expect(
      within(toolsSection).queryByRole("button", { name: "顯示更多" }),
    ).not.toBeInTheDocument();
    expect(
      within(gamesSection).queryByRole("button", { name: "顯示更多" }),
    ).not.toBeInTheDocument();

    expect(
      within(toolsSection).getByRole("link", { name: /PDF拆分、合併工具/ }),
    ).toHaveAttribute("href", "https://pdf-splitter.tools.aibasil.com");
    expect(
      within(toolsSection).getByRole("link", { name: /PDF轉PPTX/ }),
    ).toHaveAttribute("href", "https://pdf-to-pptx.tools.aibasil.com");
    expect(
      within(toolsSection).getByRole("link", { name: /計算機/ }),
    ).toHaveAttribute("href", "https://calculator.tools.aibasil.com");
    expect(
      within(gamesSection).getByRole("link", { name: /Gomoku 五子棋/ }),
    ).toHaveAttribute("href", "https://gomoku.games.aibasil.com");
    expect(
      within(gamesSection).getByRole("link", { name: /Minesweeper 踩地雷/ }),
    ).toHaveAttribute("href", "https://minesweeper.games.aibasil.com");
    expect(
      within(aiTranslationSection).getByRole("link", {
        name: /OpenSpec Translate/,
      }),
    ).toHaveAttribute("href", "https://github.com/aibasil-ai/OpenSpec_translate");
    expect(
      within(aiTranslationSection).getByRole("link", {
        name: /Superpowers Translate/,
      }),
    ).toHaveAttribute(
      "href",
      "https://github.com/aibasil-ai/superpowers_translate",
    );
    expect(
      within(aiTranslationSection).getByRole("link", {
        name: /UI\/UX Pro Max Skill Translate/,
      }),
    ).toHaveAttribute(
      "href",
      "https://github.com/aibasil-ai/ui-ux-pro-max-skill_translate",
    );
  });

  it("keeps only vocus card in blog section", () => {
    render(<Home />);

    const blogSection = screen.getAllByLabelText("section-部落格")[0];
    const links = within(blogSection).getAllByRole("link");
    expect(links).toHaveLength(1);
    expect(
      within(blogSection).getByRole("link", { name: /AIBASIL 專欄（Vocus）/ }),
    ).toHaveAttribute("href", "https://vocus.cc/salon/aibasil");
    expect(within(blogSection).queryByText("技術與產品筆記")).not.toBeInTheDocument();
  });

  it("renders svg icons inside card icon boxes", () => {
    render(<Home />);

    const systemsSection = screen.getAllByLabelText("section-數位系統")[0];
    const firstCard = within(systemsSection).getAllByRole("link")[0];
    const iconBox = firstCard.querySelector(".card-icon");
    expect(iconBox).not.toBeNull();
    expect(iconBox?.querySelector("svg")).not.toBeNull();
  });

  it("renders icons on each external website link item", () => {
    render(<Home />);

    const externalHeading = screen.getAllByRole("heading", { name: /外部網站/i })[0];
    const externalSection = externalHeading.closest("section");
    expect(externalSection).not.toBeNull();

    const links = within(externalSection as HTMLElement).getAllByRole("link");
    expect(links.length).toBeGreaterThan(0);
    links.forEach((link) => {
      expect(link.querySelector(".ext-link-icon svg")).not.toBeNull();
    });

    expect(
      within(externalSection as HTMLElement).getByRole("link", {
        name: /Instagram/,
      }),
    ).toHaveAttribute("href", "https://www.instagram.com/aibasil_ai/");
    expect(
      within(externalSection as HTMLElement).getByRole("link", {
        name: /Threads/,
      }),
    ).toHaveAttribute("href", "https://www.threads.com/@aibasil_ai");
    expect(
      within(externalSection as HTMLElement).getByRole("link", {
        name: /Facebook/,
      }),
    ).toHaveAttribute("href", "#");
  });
});
