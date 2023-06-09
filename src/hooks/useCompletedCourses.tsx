import { useState, useEffect } from "react";

export function usePubkey() {
  const [pubkey, setPubkey] = useState("");

  useEffect(() => {
    const apiUrl = "https://dapp-wrangler.julian-martinez.workers.dev/pubkey?=";

    const updatePubkey = async () => {
      try {
        const response = await fetch(apiUrl, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ pubkey: newPubkey }),
        });

        if (response.ok) {
          setPubkey(newPubkey);
          console.log("Pubkey updated successfully!");
          // Handle successful response if needed
        } else {
          console.error(
            "Error updating pubkey:",
            response.status,
            response.statusText
          );
          // Handle error response if needed
        }
      } catch (error) {
        console.error("Error updating pubkey:", error);
        // Handle fetch or other error if needed
      }
    };

    updatePubkey();
  }, []);

  return pubkey;
}
