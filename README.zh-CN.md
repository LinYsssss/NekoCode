<p align="center">
  <pre align="center">
   /\_/\
  ( o.o )  ~
   > ^ <
  </pre>
</p>

<h1 align="center">NekoCode</h1>

<p align="center">
  <strong>你的终端 AI 编程伙伴</strong>
</p>

<p align="center">
  简体中文 · <a href="./README.md">English</a>
</p>

---

**NekoCode** 是一个基于恢复版 Claude Code 源码深度魔改的 AI CLI 工具，重新打包为标准 npm 项目，开箱即用。

> 🐱 终端里的 AI 结对编程助手 — 紫金赛博朋克主题，猫咪吉祥物，多 provider 自由切换。

## ✨ 核心特性

| 特性 | 说明 |
|------|------|
| 🎨 **自定义主题** | 紫金赛博朋克配色 + 猫咪 ASCII 图形 |
| 🔌 **多 Provider** | Anthropic、OpenAI 兼容、Bedrock、Vertex — 自由切换 |
| 🧠 **CLI 内配置** | 添加 provider、输入 API key、选择模型，全在终端内完成 |
| 📦 **标准 npm** | `npm install && npm run build` — 无需额外工具 |
| 🔒 **配置隔离** | 独立配置命名空间，可与官方 Claude CLI 并存 |
| 🛠️ **完全可改** | Fork、改品牌、扩展功能 — 随心所欲 |

## 🚀 快速开始

```bash
# 克隆并构建
git clone https://github.com/YOUR_USERNAME/NekoCode.git
cd NekoCode
npm install
npm run build

# 运行
npm start
# 或
node dist/cli.js
```

## 📦 安装为全局命令行工具

```bash
npm install -g .
nekocode --help
nekocode --version
```

开发阶段也可以用 `npm link`。

## 🔧 Provider 配置

在 CLI 内使用 `/model` 命令：

1. 选择 provider 类型：**Anthropic** 或 **OpenAI 兼容格式**
2. 输入 API base URL
3. 输入 API key
4. 自动拉取 `/models` 模型列表，或手动输入
5. 激活开始使用

模型显示格式：`provider名/模型名`

## 🗂️ 目录结构

```
NekoCode/
├── src/          # TypeScript 源码 (1900+ 文件)
├── scripts/      # 构建脚本
├── vendor/       # 三方依赖
├── dist/         # 构建产物 (不纳入版本控制)
├── package.json
└── README.md
```

## 🏠 本地存储

NekoCode 使用独立的配置命名空间，不会与官方 CLI 冲突：

| 项目 | 路径 |
|------|------|
| 配置目录 | `~/.yscli` |
| 全局配置文件 | `~/.yscli.json` |
| 凭据文件 (Win/Linux) | `~/.yscli/.credentials.json` |

> **注意**：macOS Keychain 的命名空间隔离尚未完全完成。

## 🎨 主题定制

NekoCode 内置 **紫金暗色主题**：

- 💜 柔紫主色调 (`rgb(180,120,255)`)
- ✨ 暖金高亮色 (`rgb(220,180,100)`)
- 🐱 猫咪吉祥物 ASCII 图形
- 🌈 全局统一的彩虹色系

主题颜色定义在 `src/utils/theme.ts`，可自行修改。

## ⚠️ 已知限制

- 部分内部文案仍保留了原版 Claude 品牌字样
- 部分远程服务功能仍残留在代码中
- macOS Keychain 命名空间隔离未完全完成
- 基于恢复源码的项目，可能与上游行为存在差异

## 🛤️ 路线图

- [ ] 完成全量品牌替换
- [ ] 移除/禁用远程服务依赖
- [ ] 完善 macOS 凭据隔离
- [ ] 优化 provider 管理体验
- [ ] 插件系统改进

## 📋 环境要求

- **Node.js** ≥ 18
- **npm** ≥ 9

## 📄 许可证

[MIT](./LICENSE)

---

<p align="center">
  <sub>用 💜 和 ✨ 构建</sub>
</p>
