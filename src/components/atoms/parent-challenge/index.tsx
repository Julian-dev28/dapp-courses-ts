import React , {useState} from "react";


import { ChallengeForm2 } from "../challenge-form2";
import { useSorobanReact, SorobanReactProvider } from "@soroban-react/core";
import { SorobanEventsProvider } from "@soroban-react/events";
import { futurenet, sandbox, standalone } from "@soroban-react/chains";
import { freighter } from "@soroban-react/freighter";
import { ChainMetadata, Connector } from "@soroban-react/types";

const chains: ChainMetadata[] = [sandbox, standalone, futurenet];
const connectors: Connector[] = [freighter()];

export function ParentChallengeForm({courseIds}: {courseIds: number[]}) {
  const [courseIdState, setCourseId] = useState(courseIds);

  return (
    <SorobanReactProvider chains={chains} connectors={connectors} appName={"course completion"}>
      <SorobanEventsProvider>
        <InnerComponent courseIds={courseIdState} />
      </SorobanEventsProvider>
    </SorobanReactProvider>
  );
}

function InnerComponent({courseIds}: {courseIds: number[]}) {
  const { address } = useSorobanReact();
  const [courseIdState, setCourseId] = useState(courseIds);


  return (
      <ChallengeForm2 courseId={courseIds} />
  );
}
