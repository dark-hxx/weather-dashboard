# 天气喵 🐱

一个简洁可爱的天气查询应用，基于和风天气 API。

![preview](https://img.shields.io/badge/License-MIT-blue.svg)

## 功能特性

- 🌍 **IP 自动定位** - 根据访问 IP 自动获取当地天气
- 🔍 **城市搜索** - 支持模糊搜索切换城市
- 🌤️ **实时天气** - 温度、体感、湿度、风速、能见度、气压
- 📅 **3天预报** - 未来天气趋势一目了然
- 🎨 **主题切换** - 浅色/深色/跟随系统
- ✨ **毛玻璃 UI** - 现代化视觉设计
- 📱 **响应式** - 完美适配手机和桌面

## 快速开始

### 本地运行

1. 克隆项目
```bash
git clone https://github.com/dark-hxx/weather-dashboard
cd weather-dashboard
```

2. 配置 API Key

编辑 `public/app.js` 第 3 行，填入你的和风天气 API Key：
```javascript
const QWEATHER_KEY = window.QWEATHER_KEY || '你的API Key';
```

3. 打开 `public/index.html` 即可使用

> 获取 API Key: [和风天气开发平台](https://dev.qweather.com/)

## 部署教程

本项目使用 GitHub Actions 自动部署到 Cloudflare Pages 和 Vercel。

### 配置 GitHub Secrets

在你的 GitHub 仓库中配置以下 Secrets（Settings → Secrets and variables → Actions）：

| Secret 名称 | 说明 | 获取方式 |
|------------|------|---------|
| `QWEATHER_KEY` | 和风天气 API Key | [和风天气开发平台](https://dev.qweather.com/) |
| `CLOUDFLARE_API_TOKEN` | Cloudflare API Token | [Cloudflare API Tokens](https://dash.cloudflare.com/profile/api-tokens)，需要 `Cloudflare Pages:Edit` 权限 |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare 账户 ID | Cloudflare Dashboard 右侧边栏 |
| `VERCEL_TOKEN` | Vercel 访问令牌 | [Vercel Tokens](https://vercel.com/account/tokens) |

### 首次部署准备

#### Cloudflare Pages
1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 进入 **Workers & Pages** → **Create** → **Pages** → **Direct Upload**
3. 创建一个名为 `weather-dashboard` 的项目（上传任意文件即可）
4. 后续推送代码会自动通过 GitHub Actions 部署

#### Vercel
1. 登录 [Vercel](https://vercel.com)，导入本仓库
2. 首次部署后，后续推送代码会自动通过 GitHub Actions 部署

### 手动部署

推送到 `main` 分支会自动触发部署，也可以在 GitHub Actions 页面手动触发。

## 项目结构

```
weather-dashboard/
├── .github/workflows/  # GitHub Actions
│   └── deploy.yml      # 自动部署配置
├── public/             # 静态资源目录
│   ├── index.html      # 主页面
│   ├── style.css       # 样式文件
│   ├── app.js          # 业务逻辑
│   └── favicon.svg     # 网站图标
├── functions/          # Cloudflare Pages Functions
│   └── api/
│       └── config.js   # 环境变量注入
├── api/                # Vercel Serverless Functions
│   └── config.js       # 环境变量注入
├── wrangler.json       # Cloudflare 配置
├── vercel.json         # Vercel 配置
├── README.md           # 说明文档
└── LICENSE             # 开源协议
```

## 技术栈

- 原生 HTML/CSS/JavaScript
- 和风天气 API
- IP-API（IP 定位）
- CSS 变量 + 媒体查询（主题切换）
- Glassmorphism（毛玻璃设计）

## API 说明

本项目使用以下 API：

| API | 用途 | 文档 |
|-----|------|------|
| 和风天气 GeoAPI | 城市搜索 | [文档](https://dev.qweather.com/docs/api/geoapi/) |
| 和风天气 实时天气 | 当前天气 | [文档](https://dev.qweather.com/docs/api/weather/weather-now/) |
| 和风天气 逐日预报 | 3天预报 | [文档](https://dev.qweather.com/docs/api/weather/weather-daily-forecast/) |
| IP-API | IP 定位 | [文档](https://ip-api.com/docs/) |

## 开源协议

[MIT License](./LICENSE)

## 致谢

- [和风天气](https://www.qweather.com/) - 天气数据支持
- [IP-API](https://ip-api.com/) - IP 定位服务