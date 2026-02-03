"use client";

import React, { useMemo, useState } from "react";
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

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [noClicks, setNoClicks] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const [imageKey, setImageKey] = useState(0);
  const [noPosition, setNoPosition] = useState<{
    top: string | number;
    left: string | number;
    position: "static" | "fixed";
  }>({
    top: "auto",
    left: "auto",
    position: "static",
  });

  const yesScale = useMemo(() => {
    const s = Math.pow(1.15, noClicks);
    return clamp(s, 1, 6);
  }, [noClicks]);

  const noScale = useMemo(() => {
    // Shrink by 10% per click, minimum 0.3 (30% of original size)
    const s = Math.pow(0.9, noClicks);
    return clamp(s, 0.3, 1);
  }, [noClicks]);

  // Get the current no text and image based on noClicks
  const noItem = NO_TEXTS[Math.min(noClicks, NO_TEXTS.length - 1)];
  const currentImage = noItem.image;
  const noLabel = noItem.text;

  // Collect all images to preload (including yes-image.gif)
  const allImagesToPreload = useMemo(() => {
    const images = NO_TEXTS.map((item) => item.image);
    images.push("/yes-image.gif"); // Add the success image
    return images;
  }, []);

  function handleNoClick() {
    setNoClicks((c) => c + 1);
    setImageKey((k) => k + 1); // Trigger re-animation

    // Move to random position
    const randomTop = Math.floor(Math.random() * 80) + 10; // 10% to 90%
    const randomLeft = Math.floor(Math.random() * 80) + 10; // 10% to 90%

    setNoPosition({
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
      position: "fixed",
    });
  }
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

<form onSubmit={handleSubmit}>
  <div className="w-full mb-[15px]">
    <p className="text-main-900 mb-1 font-medium text-sm">Email Address</p>
    <TextField
      id="email"
      InputProps={{
        className: "rounded-[11px] px-3",
        startAdornment: (
          <EmailOutlinedIcon className="text-xl text-sub-500 mr-2" />
        ),
      }}
      type="email"
      value={values.email}
      placeholder="anu21@gmail.com"
      onChange={handleChange}
      error={touched.email && !!errors.email}
      helperText={touched.email ? errors.email : ""}
      fullWidth
    />{" "}
  </div>
  <Button
    type="submit"
    disabled={isSubmitting}
    className="text-sm mt-6 py-2.5 px-2 rounded-[10px]"
    fullWidth
  >
    {isSubmitting ? (
      <>
        <CircularProgress color="inherit" className="text-white" size={22} />
        <span className="sr-only">Submitting</span>
      </>
    ) : (
      "Get Started"
    )}
  </Button>
</form>;
