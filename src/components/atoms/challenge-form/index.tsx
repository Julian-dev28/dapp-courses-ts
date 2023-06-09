import React, { useState } from "react";
import styles from "./style.module.css";

import { KVNamespace } from "@cloudflare/workers-types";
declare const dapp_course: KVNamespace;
const apiUrl = "https://dapp-wrangler.julian-martinez.workers.dev/pubkey?=";

export async function handlePostPubkey(publicKey: string): Promise<Response> {
  const apiUrl = "https://dapp-wrangler.julian-martinez.workers.dev/pubkey";
  const body = JSON.stringify({ publicKey });

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    if (response.ok) {
      console.log("Pubkey posted successfully!");
      // Handle successful response if needed
    } else {
      console.error(
        "Error posting pubkey:",
        response.status,
        response.statusText
      );
      // Handle error response if needed
    }

    return response;
  } catch (error) {
    console.error("Error posting pubkey:", error);
    // Handle fetch or other error if needed
    throw error;
  }
}

export function ChallengeForm() {
  const [url, setUrl] = useState("");
  const [publicKey, setPublicKey] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await handlePostPubkey(publicKey);
      console.log(publicKey);
    } catch (error) {
      console.error("Error posting public key:", error);
      // Handle fetch or other error if needed
    }
  };

  return (
    <form className={styles.challengeform}>
      <label>
        Public Key:
        <input
          className={styles.input}
          type="text"
          value={publicKey}
          onChange={(e) => setPublicKey(e.target.value)}
          required
        />
      </label>
      <label>
        Public URL:
        <input
          className={styles.input}
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
      </label>
      <button onClick={handleSubmit} type="submit" className={styles.button}>
        Submit
      </button>
    </form>
  );
}
