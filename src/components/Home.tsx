import {
  Activity,
  ArrowRight,
  ChartNoAxesCombined,
  ScanLine,
  Workflow,
} from "lucide-react";
import { signals } from "@/data/demo";
import type { Tab } from "./BottomNav";
const actions = [
  { id: "signals", icon: Activity },
  { id: "agents", icon: ScanLine },
  { id: "markets", icon: ChartNoAxesCombined },
  { id: "workflows", icon: Workflow },
] as const;
export default function Home({
  firstName,
  navigate,
}: {
  firstName?: string;
  navigate: (page: Tab | "markets") => void;
}) {
  return (
    <>
      <div className="greeting">
        <span>
          {firstName ? `Good evening, ${firstName}` : "Welcome to HOGA"}
        </span>
        <span className="micro">YOUR WORKSPACE</span>
      </div>
      <section className="home-intro">
        <p className="eyebrow">INSIGHT. CONTEXT. ACTION.</p>
        <h1>
          Built for markets
          <br />
          in motion<span className="period">.</span>
        </h1>
        <p className="muted intro-copy">
          Discover opportunities, surface signals and move from insight to
          action.
        </p>
      </section>
      <div className="quick-actions">
        {actions.map(({ id, icon: Icon }) => (
          <button key={id} onClick={() => navigate(id)}>
            <Icon size={23} strokeWidth={1.5} />
            <span>{id}</span>
          </button>
        ))}
      </div>
      <section>
        <div className="section-heading">
          <h2>On the radar</h2>
          <span className="micro">DEMO INTELLIGENCE</span>
        </div>
        <div className="radar-list">
          {signals.map((signal, index) => (
            <button
              className="radar-row"
              key={signal.symbol}
              onClick={() => navigate("signals")}
            >
              <span className="row-number">0{index + 1}</span>
              <div>
                <strong>{signal.symbol}</strong>
                <p>{signal.title}</p>
              </div>
              <ArrowRight size={18} />
            </button>
          ))}
        </div>
      </section>
      <button className="agent-invite" onClick={() => navigate("agents")}>
        <span className="agent-mark">HX</span>
        <div>
          <span className="micro">A LITTLE MORE CONTEXT?</span>
          <strong>Ask a HOGA agent</strong>
        </div>
        <ArrowRight size={20} />
      </button>
      <p className="footnote">
        A focused view of the HOGA ecosystem.
        <br />
        Demo data. Real possibilities.
      </p>
    </>
  );
}
