# ⚡ Lag Killer Pro (AI Chat Optimizer)

![Version](https://img.shields.io/badge/Version-1.0-blue)
![Category](https://img.shields.io/badge/Category-Browser_Extension_%26_Performance-brightgreen)
![Size](https://img.shields.io/badge/Size-<10KB-success)

## 📌 Overview
Ever noticed how browser tabs with long ChatGPT conversations start to freeze, lag, and consume massive amounts of RAM? That happens because the browser struggles to render an infinitely growing DOM tree.

**Lag Killer Pro** is a zero-dependency, vanilla JavaScript extension designed to inject hardcore performance optimizations directly into the chat interface, keeping your scrolling buttery smooth no matter how long the conversation gets.

## ✨ How It Works (Under the Hood)

1. 🪄 **Dynamic Rendering (`content-visibility`):** The script injects modern CSS (`content-visibility: auto; contain-intrinsic-size: auto 200px;`) into the chat nodes. This forces the browser engine to completely unload off-screen elements from memory and bypass their rendering lifecycle until you actually scroll to them.

2. 🪓 **Aggressive DOM Pruning (Garbage Collection):**
   Utilizes a `MutationObserver` to constantly monitor the chat container. Once the conversation exceeds a hard limit of `30` active message turns, the script acts as a brutal garbage collector, physically hiding (`display: 'none'`) the oldest messages to prevent DOM bloat and memory leaks.

## 🛠️ Tech Stack
* **JavaScript:** Vanilla JS (ES6+), `MutationObserver` API
* **CSS:** Advanced DOM rendering optimization properties
* **Architecture:** Content Script Injection

## 🚀 Installation (Developer Mode)
1. Clone this repository or download the source code.
2. Open your Chromium-based browser and navigate to `chrome://extensions/`.
3. Enable **Developer mode** in the top right corner.
4. Click **Load unpacked** and select the folder containing `content.js` and `manifest.json`.
5. Open an AI chat, check the console for `"Lag Killer Pro: Динамический рендеринг активирован!"`, and enjoy a lag-free experience.
