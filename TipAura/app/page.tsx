"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Wallet } from "@coinbase/onchainkit/wallet";
import { useMiniKit } from "@coinbase/onchainkit/minikit";
import { createBaseAccountSDK, base } from "@base-org/account";
import '@coinbase/onchainkit/styles.css';

import styles from "./page.module.css";

export default function Home() {
  const { context } = useMiniKit();

  // Initialize SDK inside component
  const sdk = createBaseAccountSDK({
    appName: 'TipAura',
    appLogoUrl: 'https://img.icons8.com/?size=48&id=1IQncJNFySJf&format=png',
    appChainIds: [base.constants.CHAIN_IDS.baseSepolia],
  });

  const provider = sdk.getProvider(); // use for transactions

  // Example useEffect (uncomment if needed)
  // useEffect(() => {
  //   if (!isMiniAppReady) {
  //     setMiniAppReady();
  //   }
  // }, [setMiniAppReady, isMiniAppReady]);

  return (
    <div className={styles.container}>
      <header className={styles.headerWrapper}>
        <Wallet />
      </header>

      <div className={styles.content}>
        <Image
          priority
          src="/Tips.png"
          alt="TipsLogo"
          width={200}
          height={200}
        />
        <h1 className={styles.title}>TipAura</h1>

        <h2>Welcome {context?.user?.displayName}!</h2>
        <p>FID: {context?.user?.fid}</p>



        {/* <h2 className={styles.componentsTitle}>Explore Components</h2> */}

        {/* <ul className={styles.components}>
          {[
            { name: "Transaction", url: "https://docs.base.org/onchainkit/transaction/transaction" },
            { name: "Swap", url: "https://docs.base.org/onchainkit/swap/swap" },
            { name: "Checkout", url: "https://docs.base.org/onchainkit/checkout/checkout" },
            { name: "Wallet", url: "https://docs.base.org/onchainkit/wallet/wallet" },
            { name: "Identity", url: "https://docs.base.org/onchainkit/identity/identity" },
          ].map((component) => (
            <li key={component.name}>
              <a target="_blank" rel="noreferrer" href={component.url}>
                {component.name}
              </a>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
}
