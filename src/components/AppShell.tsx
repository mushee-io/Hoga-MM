"use client";
import Script from "next/script";
import { ArrowLeft } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import {
  agents,
  workflows,
  type Agent,
  type WorkflowStatus,
} from "@/data/demo";
import {
  getTelegramWebApp,
  initializeTelegram,
  readTelegram,
  syncSafeArea,
} from "@/lib/telegram";
import BottomNav, { type Tab } from "./BottomNav";
import Home from "./Home";
import Signals from "./Signals";
import Agents from "./Agents";
import AgentChat from "./AgentChat";
import Markets from "./Markets";
import Workflows from "./Workflows";
import Profile from "./Profile";
type Screen =
  { page: Tab | "markets" } | { page: "chat"; agent: Agent; prompt?: string };
export default function AppShell() {
  const [stack, setStack] = useState<Screen[]>([{ page: "home" }]);
  const [telegram, setTelegram] = useState<ReturnType<typeof readTelegram>>({
    isTelegramMiniApp: false,
    initData: "",
    user: undefined,
    themeParams: {},
  });
  const [statuses, setStatuses] = useState<WorkflowStatus[]>(
    workflows.map((workflow) => workflow.status),
  );
  const [notifications, setNotifications] = useState(false);
  const screen = stack[stack.length - 1];
  const back = useCallback(
    () =>
      setStack((previous) =>
        previous.length > 1 ? previous.slice(0, -1) : previous,
      ),
    [],
  );
  const initialize = useCallback(() => {
    setTelegram(initializeTelegram());
    syncSafeArea();
  }, []);
  useEffect(() => {
    const app = getTelegramWebApp();
    if (!app) return;
    const update = () => {
      setTelegram(readTelegram());
      syncSafeArea();
    };
    const events = [
      "themeChanged",
      "safeAreaChanged",
      "contentSafeAreaChanged",
    ];
    events.forEach((event) => app.onEvent?.(event, update));
    return () => events.forEach((event) => app.offEvent?.(event, update));
  }, [telegram.isTelegramMiniApp]);
  useEffect(() => {
    const button = getTelegramWebApp()?.BackButton;
    if (!button) return;
    if (stack.length > 1) {
      button.show();
      button.onClick(back);
    } else button.hide();
    return () => {
      button.offClick(back);
      button.hide();
    };
  }, [back, stack.length, telegram.isTelegramMiniApp]);
  function navigate(page: Tab | "markets") {
    setStack(
      page === "markets" ? (previous) => [...previous, { page }] : [{ page }],
    );
  }
  function openChat(agent: Agent, prompt?: string) {
    setStack((previous) => [...previous, { page: "chat", agent, prompt }]);
  }
  return (
    <>
      <Script
        src="https://telegram.org/js/telegram-web-app.js"
        strategy="afterInteractive"
        onReady={initialize}
      />
      <div className="app-shell">
        <header className="brand-header">
          <div className="brand-line">
            <span className="wordmark">HOGA</span>
            <span className="demo-badge">DEMO</span>
          </div>
          <p>MARKET INTELLIGENCE IN MOTION</p>
        </header>
        <main
          className={
            screen.page === "chat" ? "main-content chat-main" : "main-content"
          }
          key={screen.page}
        >
          {stack.length > 1 ? (
            <button className="back-button" onClick={back}>
              <ArrowLeft size={18} /> Back
            </button>
          ) : null}
          {screen.page === "home" ? (
            <Home firstName={telegram.user?.first_name} navigate={navigate} />
          ) : screen.page === "signals" ? (
            <Signals onRun={(prompt) => openChat(agents[0], prompt)} />
          ) : screen.page === "agents" ? (
            <Agents onOpen={(agent) => openChat(agent)} />
          ) : screen.page === "chat" ? (
            <AgentChat agent={screen.agent} initialPrompt={screen.prompt} />
          ) : screen.page === "markets" ? (
            <Markets />
          ) : screen.page === "workflows" ? (
            <Workflows
              statuses={statuses}
              onToggle={(index) =>
                setStatuses((previous) =>
                  previous.map((status, i) =>
                    i === index
                      ? status === "RUNNING"
                        ? "PAUSED"
                        : "RUNNING"
                      : status,
                  ),
                )
              }
            />
          ) : (
            <Profile
              user={telegram.user}
              connected={telegram.isTelegramMiniApp}
              notifications={notifications}
              onToggle={() => setNotifications((previous) => !previous)}
            />
          )}
        </main>
        {screen.page !== "chat" ? (
          <BottomNav
            active={screen.page === "markets" ? "home" : screen.page}
            onChange={navigate}
          />
        ) : null}
      </div>
    </>
  );
}
