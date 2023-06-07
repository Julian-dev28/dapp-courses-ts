import React from "react";
import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";
import clsx from "clsx";
import { ConnectButton } from "../../src/components/atoms/connect-button";
import { CompletedCoursesCard } from "../components/atoms/courses-card";
import { UserCard } from "../components/atoms/user-card";
import { ChallengeCard } from "../components/atoms/start-challenge-card";
import { CardContainer } from "../components/molecules/card-container";
import { useSorobanReact, SorobanReactProvider } from "@soroban-react/core";
import { SorobanEventsProvider } from "@soroban-react/events";
import { futurenet, sandbox, standalone } from "@soroban-react/chains";
import { freighter } from "@soroban-react/freighter";
import { ChainMetadata, Connector } from "@soroban-react/types";

const chains: ChainMetadata[] = [sandbox, standalone, futurenet];
const connectors: Connector[] = [freighter()];

export default function Login({ children }: { children: React.ReactNode }) {
  return (
    <SorobanReactProvider
      chains={chains}
      connectors={connectors}
      appName={"Login"}
    >
      <SorobanEventsProvider>
        {children}
        <Layout>
          <LoginComponent />
        </Layout>
      </SorobanEventsProvider>
    </SorobanReactProvider>
  );
}

function LoginComponent() {
  // Here you can use your hook
  const { address } = useSorobanReact();

  return (
    <main className="login">
      <div
        className="hp--hero"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {!address && <ConnectButton label={"Connect Wallet"} />}
        {address && <UserCard addressHex={address} />}
        {address && <CompletedCoursesCard addressHex={address} />}
        {address && <ChallengeCard />}
{/* 
        <CardContainer addressHex={address} /> */}
      </div>
    </main>
  );
}
