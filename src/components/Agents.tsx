import { ArrowRight } from "lucide-react";
import { agents, type Agent } from "@/data/demo";
export default function Agents({ onOpen }: { onOpen: (agent: Agent) => void }) {
  return (
    <>
      <p className="eyebrow">THE HOGA ECOSYSTEM / 04</p>
      <h1>
        Intelligence,
        <br />
        on demand.
      </h1>
      <p className="muted page-description">
        Same ecosystem. A closer connection.
      </p>
      <div className="agent-list">
        {agents.map((agent) => (
          <button
            className="agent-row"
            key={agent.id}
            onClick={() => onOpen(agent)}
          >
            <span className="agent-mark">{agent.mark}</span>
            <div className="agent-copy">
              <span className="micro">{agent.category}</span>
              <h2>{agent.name}</h2>
              <p>{agent.description}</p>
              <span className="agent-meta">
                <span className="status">
                  <i />
                  DEMO READY
                </span>
                <span>
                  OPEN <ArrowRight size={14} />
                </span>
              </span>
            </div>
          </button>
        ))}
      </div>
    </>
  );
}
