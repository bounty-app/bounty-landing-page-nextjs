import { useScript } from "../hooks/useScript";
import styles from "../styles/Home.module.css";

export default function Bounty() {
  useScript({
    id: "bounty",
    src: "https://bountyshopifysnippet.earnbounty.com/snippets/landing-page.snippet.umd.js",
  });

  return (
    <div className={styles.main}>
      <div
        data-props-shop="bounty-keychains.myshopify.com"
        data-widget-host="bounty-landing-page"
      ></div>
    </div>
  );
}
