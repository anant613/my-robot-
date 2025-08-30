import React, { useState, useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";
import createListener from "./listen.js";
import { getReply } from "./reply.js";

export default function App() {
  const [userSpeech, setUserSpeech] = useState("");
  const listenerRef = useRef(null);

  const speak = (text) => {
    if (!window.speechSynthesis) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.pitch = 1;
    utterance.rate = 1;
    utterance.volume = 1;
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    listenerRef.current = createListener((text) => {
      setUserSpeech(text);
      const reply = getReply(text);
      speak(reply);
    });
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <Spline scene="https://prod.spline.design/WbZi-EzqzqvOr781/scene.splinecode" />

      <div style={{ position: "absolute", top: 20, left: 20, color: "#fff", zIndex: 10 }}>
        <button onClick={() => listenerRef.current?.start()}>Start Listening</button>
        <button onClick={() => listenerRef.current?.stop()}>Stop Listening</button>
        <p>User said: {userSpeech}</p>
      </div>
    </div>
  );
}

