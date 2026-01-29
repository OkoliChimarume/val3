import React, { useState } from "react";
import { LoadingScreen } from "../components/LoadingScreen";

export default function Home() {
  const [loading, setLoading] = useState(true);

  function postAboutit() {
    const url = new URL("https://twitter.com/intent/tweet");
    url.searchParams.set(
      "text",
      "I just said YES to being someone's Valentine! 💖 #ValentinesDay",
    );
    window.open(url.toString(), "_blank", "noopener,noreferrer");
  }

  return (
    <div>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      Home Page
    </div>
  );
}
