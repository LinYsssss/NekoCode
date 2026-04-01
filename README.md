<p align="center">
  <pre align="center">
   /\_/\
  ( o.o )  ~
   > ^ <
  </pre>
</p>

<h1 align="center">NekoCode</h1>

<p align="center">
  <strong>Your personal AI coding companion — in the terminal.</strong>
</p>

<p align="center">
  <a href="./README.zh-CN.md">简体中文</a> · English
</p>

---

**NekoCode** is a fully customizable AI-powered CLI built from a recovered Claude Code codebase. It's repackaged as a clean npm project you can build, extend, and make your own.

> 🐱 Think of it as your terminal-native AI pair programmer — with a cat mascot, a purple-gold cyberpunk theme, and full provider flexibility.

## ✨ Highlights

| Feature | Description |
|---------|-------------|
| 🎨 **Custom Theme** | Purple-gold cyberpunk aesthetic with cat ASCII art |
| 🔌 **Multi-Provider** | Anthropic, OpenAI-compatible, Bedrock, Vertex — switch freely |
| 🧠 **In-CLI Setup** | Add providers, enter API keys, select models — all inside the terminal |
| 📦 **npm-native** | Standard `npm install && npm run build` — no magic required |
| 🔒 **Isolated Config** | Separate config namespace, can coexist with official Claude CLI |
| 🛠️ **Fully Hackable** | Fork it, rebrand it, extend it — it's yours |

## 🚀 Quick Start

```bash
# Clone and build
git clone https://github.com/YOUR_USERNAME/NekoCode.git
cd NekoCode
npm install
npm run build

# Run it
npm start
# or
node dist/cli.js
```

## 📦 Install as Global CLI

```bash
npm install -g .
nekocode --help
nekocode --version
```

Or use `npm link` during development.

## 🔧 Provider Setup

NekoCode supports multiple AI providers out of the box. Use the `/model` command inside the CLI to:

1. Choose provider type: **Anthropic** or **OpenAI-compatible**
2. Enter your API base URL
3. Enter your API key
4. Auto-fetch available models from `/models`, or enter manually
5. Activate and start coding

Model display format: `provider/model-name`

## 🗂️ Project Structure

```
NekoCode/
├── src/          # TypeScript source (1900+ files)
├── scripts/      # Build scripts
├── vendor/       # Vendored dependencies
├── dist/         # Build output (not tracked)
├── package.json
└── README.md
```

## 🏠 Local Storage

NekoCode uses its own config namespace — no conflicts with the official CLI:

| Item | Path |
|------|------|
| Config directory | `~/.yscli` |
| Global config | `~/.yscli.json` |
| Credentials (Win/Linux) | `~/.yscli/.credentials.json` |

> **Note**: macOS Keychain isolation is not yet fully separated.

## 🎨 Theming

NekoCode ships with a custom **purple-gold dark theme**:

- 💜 Soft purple accents (`rgb(180,120,255)`)
- ✨ Warm gold highlights (`rgb(220,180,100)`)
- 🐱 Cat mascot ASCII art
- 🌈 Matching rainbow colors throughout

Theme colors are defined in `src/utils/theme.ts` — easy to customize.

## ⚠️ Known Limitations

- Some internal strings still reference the original Claude branding
- Certain remote-service features remain in the codebase
- macOS Keychain namespace isolation is incomplete
- This is a recovered-source project; behavior may differ from upstream

## 🛤️ Roadmap

- [ ] Complete branding replacement
- [ ] Remove/disable remote-only service dependencies
- [ ] Full macOS credential isolation
- [ ] Enhanced provider management UX
- [ ] Plugin system improvements

## 📋 Requirements

- **Node.js** ≥ 18
- **npm** ≥ 9

## 📄 License

[MIT](./LICENSE)

---

<p align="center">
  <sub>Built with 💜 and ✨ by the NekoCode community</sub>
</p>
