"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TerminalPlayground from "@/components/TerminalPlayground";
import GravityControl from "@/components/GravityControl";
import TechComparison from "@/components/TechComparison";
import Footer from "@/components/Footer";

export default function Home() {
  // Gravity level: 1.0G (Earth) down to 0.0G (Zero Gravity)
  const [gravity, setGravity] = useState<number>(1.0);

  return (
    <div 
      style={{ 
        "--gravity-scale": gravity,
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh"
      } as React.CSSProperties}
    >
      <Navbar />
      
      <main style={{ flex: 1 }}>
        <Hero />
        <Features />
        <TerminalPlayground />
        <TechComparison />
        <GravityControl gravity={gravity} setGravity={setGravity} />
      </main>

      <Footer />
    </div>
  );
}
