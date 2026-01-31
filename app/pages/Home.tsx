"use client";

import React, { useState } from "react";
import { LoadingScreen } from "../components/LoadingScreen";

const NO_TEXTS = [
  { text: "No", image: "/image1.jpeg" },
  { text: "Are you sure?", image: "/image2.jpeg" },
  { text: "Like… REALLY sure?", image: "/image3.gif" },
  { text: "Do you have your glasses on? 🤓", image: "/image4.gif" },
  { text: "The YES button is the other one.", image: "/image5.gif" },
  { text: "Oops! Wrong choice. Try again.", image: "/image6.gif" },
  { text: "You're breaking my heart 💔", image: "/image7.jpeg" },
  { text: "Maybe your finger slipped?", image: "/image9.jpeg" },
  { text: "Be honest… you meant YES.", image: "/image10.jpeg" },
  { text: "This is getting suspicious.", image: "/image11.jpeg" },
  { text: "Plot twist: NO is disabled (in my heart).", image: "/image13.gif" },
  { text: "Final answer?", image: "/image12.jpeg" },
  { text: "Last chance… pretty please? 🥺", image: "/image14.jpeg" },
];

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
