import { Pause, Play } from "lucide-react";
import { workflows, type WorkflowStatus } from "@/data/demo";
export default function Workflows({
  statuses,
  onToggle,
}: {
  statuses: WorkflowStatus[];
  onToggle: (index: number) => void;
}) {
  return (
    <>
      <p className="eyebrow">REPEATABLE INTELLIGENCE / 03</p>
      <h1>
        Set ideas
        <br />
        in motion.
      </h1>
      <p className="muted page-description">
        Your routine, with a little more structure.
      </p>
      {workflows.map((workflow, index) => (
        <article className="workflow-row" key={workflow.name}>
          <div className="flex items-center justify-between">
            <span className="row-number">0{index + 1}</span>
            <span className="status">
              <i className={statuses[index] === "RUNNING" ? "running" : ""} />
              {statuses[index]}
            </span>
          </div>
          <h2>{workflow.name}</h2>
          <p className="muted">{workflow.description}</p>
          <button
            className="workflow-button"
            onClick={() => onToggle(index)}
            aria-label={`${statuses[index] === "RUNNING" ? "Pause" : statuses[index] === "PAUSED" ? "Resume" : "Start"} ${workflow.name}`}
          >
            {statuses[index] === "RUNNING" ? (
              <Pause size={14} />
            ) : (
              <Play size={14} />
            )}{" "}
            {statuses[index] === "RUNNING"
              ? "PAUSE"
              : statuses[index] === "PAUSED"
                ? "RESUME"
                : "START"}
          </button>
        </article>
      ))}
      <p className="footnote">
        Demo controls only. No background tasks run.
        <br />
        Workflow states reset when you reload.
      </p>
    </>
  );
}
