import { ArrowUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { demoResponse, prompts, type Agent } from "@/data/demo";
type Message = { role: "user" | "agent"; text: string };
export default function AgentChat({
  agent,
  initialPrompt,
}: {
  agent: Agent;
  initialPrompt?: string;
}) {
  const [messages, setMessages] = useState<Message[]>(() => [
    {
      role: "agent",
      text: "What would you like to understand about the market?",
    },
    ...(initialPrompt
      ? [
          { role: "user" as const, text: initialPrompt },
          { role: "agent" as const, text: demoResponse(initialPrompt) },
        ]
      : []),
  ]);
  const [input, setInput] = useState("");
  const end = useRef<HTMLDivElement>(null);
  useEffect(() => {
    end.current?.scrollIntoView({ block: "nearest" });
  }, [messages]);
  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((previous) => [
      ...previous,
      { role: "user", text: trimmed },
      { role: "agent", text: demoResponse(trimmed) },
    ]);
    setInput("");
  }
  return (
    <div className="chat">
      <div className="chat-heading">
        <span className="agent-mark">{agent.mark}</span>
        <div>
          <h1>{agent.name}</h1>
          <span className="status">
            <i className="running" />
            ONLINE <span className="muted">/ DEMO</span>
          </span>
        </div>
      </div>
      <p className="chat-notice">
        Demo conversation · Local responses · No live data
      </p>
      <div
        className="conversation"
        role="log"
        aria-label="Agent conversation"
        aria-live="polite"
      >
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.role}`}>
            <span className="micro">
              {message.role === "user" ? "YOU" : "HOGA"}
            </span>
            <p>{message.text}</p>
          </div>
        ))}
        <div ref={end} />
      </div>
      {messages.length === 1 ? (
        <div className="suggestions">
          {prompts.map((prompt) => (
            <button key={prompt} onClick={() => send(prompt)}>
              {prompt}
              <span aria-hidden="true">↗</span>
            </button>
          ))}
        </div>
      ) : null}
      <form
        className="composer"
        onSubmit={(event) => {
          event.preventDefault();
          send(input);
        }}
      >
        <label className="sr-only" htmlFor="message">
          Message agent
        </label>
        <input
          id="message"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Ask about the market…"
          autoComplete="off"
          maxLength={2000}
        />
        <button
          aria-label="Send message"
          disabled={!input.trim()}
          type="submit"
        >
          <ArrowUp size={22} />
        </button>
      </form>
    </div>
  );
}
