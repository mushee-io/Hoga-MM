import { House, Activity, ScanLine, Workflow, UserRound } from "lucide-react";
export type Tab = "home" | "signals" | "agents" | "workflows" | "profile";
const items = [
  { id: "home", icon: House },
  { id: "signals", icon: Activity },
  { id: "agents", icon: ScanLine },
  { id: "workflows", icon: Workflow },
  { id: "profile", icon: UserRound },
] as const;
export default function BottomNav({
  active,
  onChange,
}: {
  active: Tab;
  onChange: (tab: Tab) => void;
}) {
  return (
    <nav className="bottom-nav" aria-label="Main navigation">
      {items.map(({ id, icon: Icon }) => (
        <button
          key={id}
          aria-current={active === id ? "page" : undefined}
          onClick={() => onChange(id)}
        >
          <Icon size={20} strokeWidth={1.6} />
          <span>{id}</span>
        </button>
      ))}
    </nav>
  );
}
