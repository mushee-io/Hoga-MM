import { ArrowRight } from "lucide-react";
import { signals } from "@/data/demo";
export default function Signals({
  onRun,
}: {
  onRun: (prompt: string) => void;
}) {
  return (
    <>
      <p className="eyebrow">THE SIGNAL FEED / 03</p>
      <h1>
        Movement,
        <br />
        with meaning.
      </h1>
      <p className="muted page-description">
        A small set of signals. A clearer point of view.
      </p>
      <div className="section-heading">
        <h2>Signals</h2>
        <span className="micro">FIXED DEMO DATA</span>
      </div>
      {signals.map((signal) => (
        <article className="signal" key={signal.symbol}>
          <div className="flex items-center justify-between gap-2">
            <span className="eyebrow">
              {signal.symbol} / {signal.type}
            </span>
            <span className="signal-mark" aria-hidden="true">
              ↗
            </span>
          </div>
          <h2>{signal.title}</h2>
          <span className="confidence">
            {signal.confidence} CONFIDENCE · DEMO
          </span>
          <p className="muted">{signal.detail}</p>
          <button
            className="text-action"
            onClick={() =>
              onRun(
                `Explain the ${signal.symbol} ${signal.type.toLowerCase()} signal`,
              )
            }
          >
            Run with agent <ArrowRight size={17} />
          </button>
        </article>
      ))}
    </>
  );
}
