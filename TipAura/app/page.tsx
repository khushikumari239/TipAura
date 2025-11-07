"use client";

import { useEffect } from "react";
import Image from "next/image";
// import { ConnectWallet, Wallet } from "@coinbase/onchainkit/wallet";
import { useMiniKit } from "@coinbase/onchainkit/minikit";
import { createBaseAccountSDK, base } from "@base-org/account";
import '@coinbase/onchainkit/styles.css';

import { Avatar, Name } from '@coinbase/onchainkit/identity';

import type { LifecycleStatus } from '@coinbase/onchainkit/transaction';
import { Wallet, ConnectWallet } from '@coinbase/onchainkit/wallet';
import { useAccount } from 'wagmi';
import { calls } from '@/calls'

// @noErrors: 1109 - Cannot find name 'contracts'
// import { Transaction } from "@coinbase/onchainkit/transaction"
import { 
  Transaction, 
  TransactionButton,
  TransactionSponsor,
  TransactionStatus,
  TransactionStatusAction,
  TransactionStatusLabel,
} from '@coinbase/onchainkit/transaction'; 

// const calls = [...];

{/* <Transaction calls={calls} /> */}

import styles from "./page.module.css";
import { OnchainKitProvider } from "@coinbase/onchainkit";
import { baseSepolia } from "viem/chains";

export default function Home({ }: { children?: React.ReactNode }) {
  const { context } = useMiniKit();

const BASE_SEPOLIA_CHAIN_ID = 84532;


  // Initialize SDK inside component
  const sdk = createBaseAccountSDK({
    appName: 'TipAura',
    appLogoUrl: 'https://img.icons8.com/?size=48&id=1IQncJNFySJf&format=png',
    appChainIds: [base.constants.CHAIN_IDS.baseSepolia],
  });

  const provider = sdk.getProvider(); // use for transactions
  
  return address ? (
    <Transaction
      chainId={BASE_SEPOLIA_CHAIN_ID}
      calls={calls}
      onStatus={handleOnStatus}
    >
      <TransactionButton />
      <TransactionSponsor />
      <TransactionStatus>
        <TransactionStatusLabel />
        <TransactionStatusAction />
      </TransactionStatus>
    </Transaction>
  ) : (
    <Wallet>
      <ConnectWallet>
        <Avatar className='h-6 w-6' />
       {/* </Name/> */}
       
      </ConnectWallet>
      </Wallet>
  );
};




  
  <OnchainKitProvider
    apiKey={process.env.NEXT_PUBLIC_CDP_API_KEY}
    chain={baseSepolia}
    config={{ paymaster: process.env.NEXT_PUBLIC_PAYMASTER_AND_BUNDLER_ENDPOINT }}
  >
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
          height={200} />
        <h1 className={styles.title}>TipAura</h1>

        <h2>Welcome {context?.user?.displayName}!</h2>
        <p>FID: {context?.user?.fid}</p>
      </div>
    </div>
  </OnchainKitProvider>
  
  



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

      </div>
    </div>
  );
}
