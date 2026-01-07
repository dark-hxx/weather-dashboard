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

2. 打开 `public/index.html` 即可使用

> 如需修改 API Key，编辑 `functions/api/config.js` 和 `api/config.js`

## 部署教程

### Cloudflare Pages 部署

1. Fork 本仓库到你的 GitHub
2. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
3. 进入 **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
4. 选择你 Fork 的仓库，构建设置保持默认即可
5. 点击部署

### Vercel 部署

1. Fork 本仓库到你的 GitHub
2. 登录 [Vercel](https://vercel.com)，点击 **Add New Project**
3. 导入你 Fork 的仓库
4. 点击 **Deploy** 完成部署

## 项目结构

```
weather-dashboard/
├── public/             # 静态资源目录
│   ├── index.html      # 主页面
│   ├── style.css       # 样式文件
│   ├── app.js          # 业务逻辑
│   └── favicon.svg     # 网站图标
├── functions/          # Cloudflare Pages Functions
│   └── api/
│       └── config.js   # API Key 注入
├── api/                # Vercel Serverless Functions
│   └── config.js       # API Key 注入
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