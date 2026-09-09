# HOGA-MM

Telegram Mini App distribution layer for HOGA.

A mobile-first demo of the existing HOGA ecosystem: Home, Signals, Agents, local agent chat, Markets, Workflows and Profile. Built with Next.js, TypeScript, React and Tailwind CSS.

## Local setup

Node.js 20.9 or later is required.

```sh
npm install
npm run dev
```

Open http://localhost:3000. The app works in a normal browser without Telegram.

## Checks and production build

```sh
npm run typecheck
npm run lint
npm run build
npm start
```

## Telegram Setup

1. Deploy this Next.js app to an HTTPS host.
2. Copy the HTTPS deployment URL.
3. Open **@BotFather** in Telegram and create or select your bot.
4. Under `/mybots`, select the bot and configure its **Mini App** URL. To launch from the chat menu, use `/setmenubutton` and set the URL and button text to **HOGA**.
5. Launch HOGA from the bot inside Telegram.

See the [official Telegram Mini Apps documentation](https://core.telegram.org/bots/webapps) for the available launch methods. No bot token or environment variables are needed by this demo.

## Demo boundaries

- `src/data/demo.ts` contains fixed illustrative prices, signals, ecosystem entries, suggested prompts and deterministic responses. Nothing is live and no external AI is called.
- Workflow controls and the notification preference use local React state and reset on reload. They do not run background tasks or send notifications.
- All four ecosystem entries open an in-app chat. “Run with agent” carries the selected signal into Research Hoxo. These are local simulations of the HOGA experience, not connections to the actual agents.
- `src/lib/telegram.ts` safely reads `window.Telegram.WebApp`, initializes `ready()` and `expand()`, exposes `isTelegramMiniApp`, reads user/theme data, and manages safe area values. The shell manages Telegram BackButton registration and cleanup. White HOGA styling is retained regardless of Telegram theme.
- Telegram identity is used only for demo display. Production applications must verify Telegram `initData` server-side before trusting user identity. Raw `initData` is never logged, persisted or sent anywhere.
- No database, wallet, authentication, payments or additional infrastructure.

## Mobile smoke test

Check 320, 360, 390 and 430px widths. Open every tab, every agent and Markets; send a suggested and typed message; run a signal with its agent; start/pause/resume workflows; toggle notifications. Inside Telegram, confirm the greeting/profile, expansion, safe areas and native BackButton. Browser profile should say “Browser preview”. Final on-device testing requires a deployed HTTPS URL and a configured bot.
