<div align="center">

# 🐱 NekoCode

[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D18-brightgreen?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-1900%2B_files-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

**你的终端 AI 编程伙伴**

*多 Provider 支持 · 紫金赛博朋克主题 · 猫咪吉祥物* 🐾

简体中文 · [English](./README.md)

---

</div>

## 🚀 快速开始

```bash
git clone https://github.com/LinYsssss/NekoCode.git
cd NekoCode
npm install
npm run build
npm start
```

## ✨ NekoCode 是什么？

NekoCode 是一个基于恢复版 Claude Code 源码深度魔改的 AI CLI 工具，重新打包为标准 npm 项目，开箱即用。

### 核心特性

🎨 **紫金赛博朋克主题** — 猫咪 ASCII 吉祥物，沉浸式暗色界面

🔌 **多 Provider 支持** — Anthropic、OpenAI 兼容、Bedrock、Vertex 自由切换

🧠 **CLI 内配置** — 添加 provider、输入 API key、选择模型，全在终端完成

📦 **标准 npm 构建** — `npm install && npm run build`，不需要额外工具

🔒 **配置隔离** — 独立命名空间，可与官方 Claude CLI 并存

🛠️ **完全可改** — Fork、改品牌、扩展功能，随心所欲

## 🔧 Provider 配置

在 CLI 内使用 `/model` 命令：

```
1. 选择 provider 类型 → Anthropic 或 OpenAI 兼容格式
2. 输入 API base URL
3. 输入 API key
4. 自动拉取 /models 模型列表（或手动输入）
5. 激活开始使用！
```

模型显示格式：`provider名/模型名`

## 📦 安装为全局命令行

```bash
npm install -g .
nekocode --help
```

开发阶段可用 `npm link`。

## 🏠 本地存储

独立配置命名空间，不会与官方 CLI 冲突：

| 项目 | 路径 |
|------|------|
| 配置目录 | `~/.yscli` |
| 全局配置 | `~/.yscli.json` |
| 凭据文件 | `~/.yscli/.credentials.json` |

## 🗂️ 目录结构

```
NekoCode/
├── src/           # TypeScript 源码 (1900+ 文件)
│   ├── components/  # UI 组件 (LogoV2 等)
│   ├── services/    # API、MCP、分析
│   ├── utils/       # 主题、工具、辅助
│   └── ...
├── scripts/       # 构建脚本
├── vendor/        # 三方依赖
├── dist/          # 构建产物 (不纳入版控)
└── package.json
```

## 🎨 主题定制

紫金主题定义在 [`src/utils/theme.ts`](src/utils/theme.ts)：

| 元素 | 颜色值 |
|------|--------|
| 品牌主色 | `rgb(180,120,255)` 💜 |
| 金色高亮 | `rgb(220,180,100)` ✨ |
| 成功 | `rgb(100,220,160)` 💚 |
| 错误 | `rgb(255,95,120)` ❤️ |

## ⚡ 常用命令

| 命令 | 说明 |
|------|------|
| `npm install` | 安装依赖 |
| `npm run build` | 构建项目 |
| `npm start` | 运行 CLI |
| `npm run clean` | 清理构建产物 |
| `npm pack` | 打包为可分发 tgz |

## ⚠️ 已知限制

- 部分内部文案仍保留原版 Claude 品牌字样
- 部分远程服务功能残留在代码中
- macOS Keychain 命名空间隔离未完全完成

## 🛤️ 路线图

- [ ] 完成全量品牌替换
- [ ] 移除/禁用远程服务依赖
- [ ] 完善 macOS 凭据隔离
- [ ] 优化 Provider 管理体验

## 📄 许可证

[MIT](./LICENSE)

---

<div align="center">
  <sub>用 💜 和 ✨ 构建</sub>
</div>
