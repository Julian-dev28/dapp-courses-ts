async function handleCourseCompletion(courseName, status) {
  await fetch(
    "https://dapp-courses-wrangler.julian-martinez.workers.dev/worker-dapp_challenge",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ courseName, status }),
    }
  );
}
