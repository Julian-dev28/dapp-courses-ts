import React, { useState } from "react";
import styles from "./style.module.css";

export function ChallengeForm() {
  const [url, setUrl] = useState("");
  const [publicKey, setPublicKey] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://dapp-wrangler.julian-martinez.workers.dev/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ publickey: publicKey, url: url }),
        }
      );

      if (response.ok) {
        // Request succeeded, handle the response
        const data = await response.json();
        console.log(data);
      } else {
        // Request failed, handle the error
        console.error("Request failed with status:", response.status);
      }
    } catch (error) {
      // Handle or log the error here
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.challengeform}>
      <label>
        Public Key:
        <input
          className={styles.input}
          type="text"
          value={publicKey}
          onChange={(e) => {
            const publicKey = e.target.value;
            setPublicKey(publicKey);
            console.log("Public Key:", publicKey);
          }}
          required
        />
      </label>
      <label>
        Public URL:
        <input
          className={styles.input}
          type="url"
          value={url}
          onChange={(e) => {
            const url = e.target.value;
            setUrl(url);
            console.log("URL:", url);
          }}
          required
        />
      </label>
      <button type="submit" className={styles.button}>
        Submit
      </button>
    </form>
  );
}
