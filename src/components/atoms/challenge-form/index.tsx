import React, { useState } from "react";
import styles from "./style.module.css";

export function ChallengeForm() {
  const [url, setUrl] = useState("");
  const [publicKey, setPublicKey] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Do something with url and publicKey
    console.log(url, publicKey);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.challengeform}>
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
      <button type="submit" className={styles.button}>
        Submit
      </button>
    </form>
  );
}
