"use client";

import React, { useState, useEffect } from "react";
import styles from "./TerminalPlayground.module.css";

type Step = "idle" | "research" | "plan" | "replace" | "verify" | "success";

export default function TerminalPlayground() {
  const [step, setStep] = useState<Step>("idle");
  const [progress, setProgress] = useState(0);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [typingText, setTypingText] = useState("");

  const logs = {
    research: [
      "[Research] Analyzing directory: file:///d:/project/src",
      "[Research] Found 3 files: index.js, calculator.py, test.py",
      "[Research] Reading calculator.py lines 1 to 20...",
      "[Research] Context gathered successfully. Identifying bugs in division logic..."
    ],
    plan: [
      "[Plan] Generating design implementation_plan.md...",
      "[Plan] Proposal: Fix ZeroDivisionError exception mapping",
      "[Plan] Proposal: Enable high-precision floating point divisions",
      "[Plan] Awaiting system policies hook approval...",
      "[Plan] Hook passed: Policy approved automatically!"
    ],
    replace: [
      "[Edit] Starting multi-replace on calculator.py...",
      "[Edit] Patching block at line 12: replace division logic",
      "[Edit] Block successfully replaced (1 chunk applied)",
      "[Edit] Code compilation succeeded without syntax errors."
    ],
    verify: [
      "[Verify] Proposing command: pytest test_calculator.py",
      "[Verify] Waiting for command completion synchronously...",
      "[Verify] Running 5 test cases...",
      "test_calculator.py::test_basic_division PASSED",
      "test_calculator.py::test_zero_division PASSED",
      "test_calculator.py::test_high_precision PASSED"
    ],
    success: [
      "[Success] All tests successfully passed! (5/5)",
      "[Success] Created walkthrough.md to document changes.",
      "[Zero-G Execution Complete] Defied gravity successfully."
    ]
  };

  useEffect(() => {
    if (step === "idle") {
      setTerminalLogs(["Ready to execute. Press 'Run Antigravity Agent' to begin."]);
      setProgress(0);
      return;
    }

    let logIndex = 0;
    const currentLogs = logs[step as keyof typeof logs];
    
    // Add logs step-by-step
    const interval = setInterval(() => {
      if (logIndex < currentLogs.length) {
        setTerminalLogs(prev => [...prev, currentLogs[logIndex]]);
        logIndex++;
      } else {
        clearInterval(interval);
        
        // Progress to next state after a brief delay
        setTimeout(() => {
          if (step === "research") {
            setStep("plan");
            setProgress(25);
          } else if (step === "plan") {
            setStep("replace");
            setProgress(50);
          } else if (step === "replace") {
            setStep("verify");
            setProgress(75);
          } else if (step === "verify") {
            setStep("success");
            setProgress(100);
          }
        }, 1200);
      }
    }, 700);

    return () => clearInterval(interval);
  }, [step]);

  const handleStart = () => {
    setTerminalLogs([]);
    setStep("research");
  };

  const handleReset = () => {
    setStep("idle");
  };

  return (
    <section id="playground" className={styles.playground}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.subtitle}>Execution playground</h2>
          <h1 className={styles.title}>실시간 에이전트 자율 코딩 세션</h1>
          <p className={styles.lead}>
            안티그래비티 에이전트가 코드를 탐색하고, 복잡한 지점에 패치를 대입하며, 
            자가 치유(Self-Healing) 방식으로 테스트를 완수하는 전 과정을 눈으로 확인해 보세요.
          </p>
        </div>

        {/* IDE Simulator Grid */}
        <div className={styles.ide}>
          <div className={styles.ideHeader}>
            <div className={styles.ideDots}>
              <span className={styles.dotRed} />
              <span className={styles.dotYellow} />
              <span className={styles.dotGreen} />
            </div>
            <div className={styles.ideTitle}>Antigravity IDE - Workspace: d:/project</div>
            <div className={styles.ideHeaderBtn}>
              {step === "idle" || step === "success" ? (
                <button className={styles.runBtn} onClick={handleStart}>
                  <span>▶ Run Antigravity Agent</span>
                </button>
              ) : (
                <button className={styles.resetBtn} onClick={handleReset}>
                  <span>■ Stop & Reset</span>
                </button>
              )}
            </div>
          </div>

          <div className={styles.ideBody}>
            {/* 1. File Explorer Pane */}
            <div className={styles.explorer}>
              <h4 className={styles.paneTitle}>FILES</h4>
              <ul className={styles.fileList}>
                <li className={styles.fileDir}>📁 src</li>
                <li className={`${styles.fileItem} ${step !== "idle" ? styles.fileActive : ""}`}>
                  🐍 calculator.py
                </li>
                <li className={styles.fileItem}>🐍 test.py</li>
                <li className={styles.fileDir}>📁 docs</li>
                {step !== "idle" && step !== "research" && (
                  <li className={styles.fileArtifact}>📝 plan.md</li>
                )}
                {step === "success" && (
                  <li className={styles.fileArtifact}>📝 walkthrough.md</li>
                )}
              </ul>
            </div>

            {/* 2. Main Editor Pane */}
            <div className={styles.editor}>
              <div className={styles.editorTabs}>
                <div className={`${styles.tab} ${styles.tabActive}`}>calculator.py</div>
                {step !== "idle" && step !== "research" && (
                  <div className={styles.tab}>plan.md</div>
                )}
              </div>

              <div className={styles.editorContent}>
                <div className={styles.lineNumbers}>
                  {Array.from({ length: 15 }, (_, i) => (
                    <span key={i}>{i + 1}</span>
                  ))}
                </div>
                
                <pre className={styles.codeArea}>
                  {step === "idle" || step === "research" || step === "plan" ? (
                    <code>
                      <span className={styles.kw}>def</span> <span className={styles.fn}>divide</span>(a, b):<br />
                      &nbsp;&nbsp;<span className={styles.comment}># TODO: Fix division bug</span><br />
                      &nbsp;&nbsp;<span className={styles.kw}>return</span> a / b<br />
                      <br />
                      <span className={styles.kw}>def</span> <span className={styles.fn}>multiply</span>(a, b):<br />
                      &nbsp;&nbsp;<span className={styles.kw}>return</span> a * b
                    </code>
                  ) : step === "replace" ? (
                    <code>
                      <span className={styles.kw}>def</span> <span className={styles.fn}>divide</span>(a, b):<br />
                      <span className={styles.diffDelete}>- &nbsp;# TODO: Fix division bug</span><br />
                      <span className={styles.diffDelete}>- &nbsp;return a / b</span><br />
                      <span className={styles.diffAdd}>+ &nbsp;if b == 0:</span><br />
                      <span className={styles.diffAdd}>+ &nbsp;&nbsp;&nbsp;raise ValueError("Defied divisor 0")</span><br />
                      <span className={styles.diffAdd}>+ &nbsp;return a / b</span><br />
                      <br />
                      <span className={styles.kw}>def</span> <span className={styles.fn}>multiply</span>(a, b):<br />
                      &nbsp;&nbsp;<span className={styles.kw}>return</span> a * b
                    </code>
                  ) : (
                    <code>
                      <span className={styles.kw}>def</span> <span className={styles.fn}>divide</span>(a, b):<br />
                      &nbsp;&nbsp;<span className={styles.kw}>if</span> b == <span className={styles.num}>0</span>:<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.kw}>raise</span> <span className={styles.cls}>ValueError</span>(<span className={styles.str}>"Defied divisor 0"</span>)<br />
                      &nbsp;&nbsp;<span className={styles.kw}>return</span> a / b<br />
                      <br />
                      <span className={styles.kw}>def</span> <span className={styles.fn}>multiply</span>(a, b):<br />
                      &nbsp;&nbsp;<span className={styles.kw}>return</span> a * b
                    </code>
                  )}
                </pre>
              </div>
            </div>
          </div>

          {/* 3. Bottom Terminal Pane */}
          <div className={styles.terminal}>
            <div className={styles.terminalHeader}>
              <span>Terminal - antigravity-exec</span>
              <div className={styles.progressTracker}>
                <span>Progress: {progress}%</span>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{ width: `${progress}%` }} />
                </div>
              </div>
            </div>
            <div className={styles.terminalContent}>
              {terminalLogs.map((log, i) => (
                <div
                  key={i}
                  className={`${styles.logRow} ${
                    log.includes("[Verify]")
                      ? styles.logVerify
                      : log.includes("[Edit]")
                      ? styles.logEdit
                      : log.includes("[Success]")
                      ? styles.logSuccess
                      : log.includes("[Plan]")
                      ? styles.logPlan
                      : log.includes("PASSED")
                      ? styles.logPass
                      : ""
                  }`}
                >
                  {log}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
