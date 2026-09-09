import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import type { TelegramUser } from "@/lib/telegram";
export default function Profile({
  user,
  connected,
  notifications,
  onToggle,
}: {
  user?: TelegramUser;
  connected: boolean;
  notifications: boolean;
  onToggle: () => void;
}) {
  const [photoFailed, setPhotoFailed] = useState(false);
  const photo = user?.photo_url?.startsWith("https://")
    ? user.photo_url
    : undefined;
  return (
    <>
      <p className="eyebrow">YOUR HOGA</p>
      <h1>In good company.</h1>
      <div className="profile-identity">
        <div className="avatar">
          {photo && !photoFailed ? (
            <Image
              src={photo}
              alt="Your Telegram profile"
              width={64}
              height={64}
              unoptimized
              onError={() => setPhotoFailed(true)}
            />
          ) : (
            (user?.first_name?.[0] ?? "H")
          )}
        </div>
        <div>
          <h2>{user?.first_name ?? "HOGA User"}</h2>
          <p className="muted">
            {user?.username
              ? `@${user.username}`
              : "Your market intelligence workspace"}
          </p>
        </div>
      </div>
      <div className="settings-row">
        <strong>Telegram</strong>
        <span className="status">
          <i className={connected ? "running" : ""} />
          {connected ? "Connected" : "Browser preview"}
        </span>
      </div>
      <div className="settings-row">
        <div>
          <strong>Notifications</strong>
          <p className="muted">Demo preference only</p>
        </div>
        <button
          className="toggle"
          role="switch"
          aria-label="Notifications"
          aria-checked={notifications}
          onClick={onToggle}
        >
          <span />
        </button>
      </div>
      <p className="footnote">
        A lightweight way into the HOGA ecosystem.
        <br />
        All intelligence in this app is simulated.
      </p>
      <a
        className="external-link"
        href="https://hoga-seven.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open full HOGA website <ArrowUpRight size={19} />
      </a>
    </>
  );
}
