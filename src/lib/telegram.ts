export interface TelegramUser {
  id: number;
  first_name: string;
  username?: string;
  photo_url?: string;
}
interface Insets {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}
export interface TelegramWebApp {
  initData: string;
  initDataUnsafe?: { user?: TelegramUser };
  platform?: string;
  themeParams?: Record<string, string>;
  safeAreaInset?: Insets;
  contentSafeAreaInset?: Insets;
  ready: () => void;
  expand: () => void;
  BackButton?: {
    show: () => void;
    hide: () => void;
    onClick: (fn: () => void) => void;
    offClick: (fn: () => void) => void;
  };
  onEvent?: (event: string, fn: () => void) => void;
  offEvent?: (event: string, fn: () => void) => void;
}
declare global {
  interface Window {
    Telegram?: { WebApp?: TelegramWebApp };
  }
}
export function getTelegramWebApp() {
  return typeof window === "undefined" ? undefined : window.Telegram?.WebApp;
}
export function isTelegramMiniApp() {
  const app = getTelegramWebApp();
  return Boolean(
    app && (app.initData || (app.platform && app.platform !== "unknown")),
  );
}
export function readTelegram() {
  const app = getTelegramWebApp();
  // Production applications must verify Telegram initData server-side before trusting user identity.
  return {
    isTelegramMiniApp: isTelegramMiniApp(),
    initData: app?.initData ?? "",
    user: app?.initDataUnsafe?.user,
    themeParams: app?.themeParams ?? {},
  };
}
export function initializeTelegram() {
  const app = getTelegramWebApp();
  app?.ready();
  app?.expand();
  return readTelegram();
}
export function syncSafeArea() {
  const app = getTelegramWebApp();
  for (const side of ["top", "bottom", "left", "right"] as const) {
    document.documentElement.style.setProperty(
      `--telegram-safe-${side}`,
      `${(app?.safeAreaInset?.[side] ?? 0) + (app?.contentSafeAreaInset?.[side] ?? 0)}px`,
    );
  }
}
