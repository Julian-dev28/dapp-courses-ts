import React from "react";
import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";
import clsx from "clsx";
import { ConnectButton } from "../../src/components/atoms/connect-button";
import { useSorobanReact, SorobanReactProvider } from "@soroban-react/core";
import { SorobanEventsProvider } from "@soroban-react/events";
import { futurenet, sandbox, standalone } from "@soroban-react/chains";
import { freighter } from "@soroban-react/freighter";
import { ChainMetadata, Connector } from "@soroban-react/types";

const chains: ChainMetadata[] = [sandbox, standalone, futurenet];
const connectors: Connector[] = [freighter()];

export default function Sorobanathon() {
  return (
    <SorobanReactProvider
      chains={chains}
      connectors={connectors}
      appName={"Sorobanathon"}
    >
      <SorobanEventsProvider>
        <Layout>
          <SorobanathonComponent />
        </Layout>
      </SorobanEventsProvider>
    </SorobanReactProvider>
  );
}

function SorobanathonComponent() {
  // Here you can use your hook
  const {} = useSorobanReact();

  return (
    <main className="sorobanathon">
      <div className="hp--hero">
        <div
          className="hp--heroInfo hp--maxWidth"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ConnectButton label={"Connect Wallet"} />
        </div>
      </div>
    </main>
  );
}
