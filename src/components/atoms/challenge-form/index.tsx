import React, { useState } from "react";
import styles from "./style.module.css";

export function ChallengeForm() {
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Do something with url
    console.log(url);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.challengeform}>
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
