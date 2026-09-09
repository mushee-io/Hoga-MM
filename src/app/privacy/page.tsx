import type { Metadata } from "next";
import Link from "next/link";
import styles from "./privacy.module.css";

export const metadata: Metadata = {
  title: "HOGA Privacy Policy",
  description:
    "Privacy Policy for HOGA-MM, the Telegram Mini App interface for HOGA.",
};

export default function PrivacyPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.wordmark} aria-label="HOGA Mini App">
          HOGA
        </Link>
      </header>
      <main className={styles.content}>
        <h1>HOGA Privacy Policy</h1>
        <p className={styles.updated}>Last updated: September 2026</p>
        <p>HOGA-MM is the Telegram Mini App interface for HOGA.</p>

        <section>
          <h2>Information we receive</h2>
          <p>
            When you open HOGA through Telegram, Telegram may provide basic
            account information to the Mini App, including your Telegram user
            ID, first name, username, language settings and profile information
            made available by Telegram.
          </p>
          <p>
            During the current demo, HOGA may also process interactions you make
            inside the application, including selected agents, prompts, workflow
            actions and navigation activity.
          </p>
        </section>
        <section>
          <h2>How we use information</h2>
          <p>Information is used only to:</p>
          <ul>
            <li>provide and operate the HOGA Mini App;</li>
            <li>personalize the Telegram experience;</li>
            <li>enable HOGA agents, signals and workflows;</li>
            <li>improve application performance and usability;</li>
            <li>prevent misuse and maintain service security.</li>
          </ul>
        </section>
        <section>
          <h2>Telegram data</h2>
          <p>
            HOGA does not control Telegram&apos;s own collection or processing
            of information. Your use of Telegram remains subject to
            Telegram&apos;s own privacy policies and terms.
          </p>
          <p>
            Telegram authentication data must be verified securely before being
            trusted in production.
          </p>
        </section>
        <section>
          <h2>Demo environment</h2>
          <p>
            HOGA-MM is currently a demonstration environment. Market
            information, signals, agent responses and workflow states displayed
            in the demo may be simulated and must not be treated as live
            financial information.
          </p>
        </section>
        <section>
          <h2>Financial information</h2>
          <p>
            HOGA does not provide financial, investment or trading advice.
            Information shown through the application is provided for
            informational and demonstration purposes.
          </p>
        </section>
        <section>
          <h2>Data sharing</h2>
          <p>We do not sell users&apos; personal information.</p>
          <p>
            Information may only be shared with infrastructure or service
            providers where necessary to operate HOGA, comply with legal
            obligations, protect the service or provide functionality requested
            by the user.
          </p>
        </section>
        <section>
          <h2>Data retention</h2>
          <p>
            We retain information only for as long as reasonably necessary to
            provide the service, maintain security, comply with legal
            requirements or support legitimate operational needs.
          </p>
        </section>
        <section>
          <h2>Your rights</h2>
          <p>
            Depending on where you live, you may have rights relating to access,
            correction or deletion of personal information associated with you.
          </p>
        </section>
        <section>
          <h2>Contact</h2>
          <p>For privacy questions regarding HOGA, contact:</p>
          <address className={styles.contact}>
            <strong>HOGA / Mushee</strong>
            <a href="mailto:privacy@mushee.xyz">privacy@mushee.xyz</a>
            <a href="https://mushee.xyz">https://mushee.xyz</a>
          </address>
        </section>
        <section>
          <h2>Changes</h2>
          <p>
            This Privacy Policy may be updated as HOGA develops. The latest
            version will always be available through the HOGA Mini App.
          </p>
        </section>
        <footer className={styles.footer}>
          <Link href="/">← Back to the Mini App</Link>
        </footer>
      </main>
    </div>
  );
}
