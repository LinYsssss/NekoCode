<div align="center">

# 🐱 NekoCode

[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D18-brightgreen?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-1900%2B_files-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![LinuxDo](https://img.shields.io/badge/LinuxDo-Community-blue?style=for-the-badge&logo=discourse&logoColor=white)](https://linux.do)

**Your Terminal AI Coding Companion**

*A fully hackable AI-powered CLI with multi-provider support,*
*purple-gold cyberpunk theme, and a cat mascot* 🐾

[简体中文](./README.zh-CN.md) · English

---

</div>

## 🚀 Quick Start

```bash
git clone https://github.com/LinYsssss/NekoCode.git
cd NekoCode
npm install
npm run build
npm start
```

## ✨ What is NekoCode?

NekoCode is a fully customizable AI-powered CLI built from a recovered Claude Code codebase, repackaged as a clean npm project you can build, extend, and make your own.

### Key Features

🎨 **Custom Purple-Gold Theme** — Cyberpunk aesthetic with cat ASCII art mascot

🔌 **Multi-Provider Support** — Anthropic, OpenAI-compatible, Bedrock, Vertex

🧠 **In-CLI Provider Setup** — Add API keys, select models, switch providers — all in the terminal

📦 **Standard npm Build** — `npm install && npm run build` — no special tooling

🔒 **Isolated Config** — Separate config namespace, coexists with official Claude CLI

🛠️ **Fully Hackable** — Fork it, rebrand it, extend it however you want

## 🔧 Provider Setup

Use `/model` inside the CLI to configure providers:

```
1. Choose provider type → Anthropic or OpenAI-compatible
2. Enter API base URL
3. Enter API key
4. Auto-fetch models from /models endpoint (or enter manually)
5. Activate and start coding!
```

Display format: `provider-name/model-name`

## 📦 Install as Global CLI

```bash
npm install -g .
nekocode --help
```

Or link during development:

```bash
npm link
```

## 🏠 Config Storage

NekoCode uses its own namespace — zero conflicts:

| Item | Path |
|------|------|
| Config directory | `~/.yscli` |
| Global config | `~/.yscli.json` |
| Credentials | `~/.yscli/.credentials.json` |

## 🗂️ Project Structure

```
NekoCode/
├── src/           # TypeScript source (1900+ files)
│   ├── components/  # UI components (LogoV2, etc.)
│   ├── services/    # API, MCP, analytics
│   ├── utils/       # Theme, tools, helpers
│   └── ...
├── scripts/       # Build scripts
├── vendor/        # Vendored dependencies
├── dist/          # Build output (gitignored)
└── package.json
```

## 🎨 Theme Customization

The purple-gold theme is defined in [`src/utils/theme.ts`](src/utils/theme.ts):

| Element | Color |
|---------|-------|
| Brand accent | `rgb(180,120,255)` 💜 |
| Gold highlights | `rgb(220,180,100)` ✨ |
| Success | `rgb(100,220,160)` 💚 |
| Error | `rgb(255,95,120)` ❤️ |

## ⚡ Common Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run build` | Build the project |
| `npm start` | Run the CLI |
| `npm run clean` | Clean build output |
| `npm pack` | Create distributable tarball |

## ⚠️ Known Limitations

- Some internal strings still reference original Claude branding
- Certain remote-service features remain in the codebase
- macOS Keychain namespace isolation is incomplete

## 🛤️ Roadmap

- [ ] Complete branding replacement
- [ ] Remove/disable remote-only dependencies
- [ ] Full macOS credential isolation
- [ ] Enhanced provider management UX


## 📄 License

[MIT](./LICENSE)

---

<div align="center">
  <sub>Built with 💜 and ✨</sub>
</div>
