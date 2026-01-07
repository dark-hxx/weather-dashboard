// 和风天气 API 配置
// 优先使用环境变量，本地开发可直接修改此处
const QWEATHER_KEY = window.QWEATHER_KEY || '在此处填入你的API Key';
const QWEATHER_API = 'https://devapi.qweather.com/v7';
const QWEATHER_GEO_API = 'https://geoapi.qweather.com/v2';

// 天气图标映射（和风天气 icon code -> emoji + 动画类型）
const WEATHER_ICONS = {
    // 晴
    '100': { icon: '☀️', animation: 'sun-shine', desc: '晴' },
    '150': { icon: '🌙', animation: '', desc: '晴' },
    // 多云
    '101': { icon: '⛅', animation: 'cloud-move', desc: '多云' },
    '102': { icon: '⛅', animation: 'cloud-move', desc: '少云' },
    '103': { icon: '🌥️', animation: 'cloud-move', desc: '晴间多云' },
    '151': { icon: '🌙', animation: '', desc: '多云' },
    '152': { icon: '🌙', animation: '', desc: '少云' },
    '153': { icon: '🌙', animation: '', desc: '晴间多云' },
    // 阴
    '104': { icon: '☁️', animation: 'cloud-move', desc: '阴' },
    '154': { icon: '☁️', animation: 'cloud-move', desc: '阴' },
    // 雨
    '300': { icon: '🌦️', animation: 'rain', desc: '阵雨' },
    '301': { icon: '🌧️', animation: 'rain', desc: '强阵雨' },
    '302': { icon: '⛈️', animation: 'rain', desc: '雷阵雨' },
    '303': { icon: '⛈️', animation: 'rain', desc: '强雷阵雨' },
    '304': { icon: '⛈️', animation: 'rain', desc: '雷阵雨伴有冰雹' },
    '305': { icon: '🌧️', animation: 'rain', desc: '小雨' },
    '306': { icon: '🌧️', animation: 'rain', desc: '中雨' },
    '307': { icon: '🌧️', animation: 'rain', desc: '大雨' },
    '308': { icon: '🌧️', animation: 'rain', desc: '极端降雨' },
    '309': { icon: '🌧️', animation: 'rain', desc: '毛毛雨' },
    '310': { icon: '🌧️', animation: 'rain', desc: '暴雨' },
    '311': { icon: '🌧️', animation: 'rain', desc: '大暴雨' },
    '312': { icon: '🌧️', animation: 'rain', desc: '特大暴雨' },
    '313': { icon: '🌧️', animation: 'rain', desc: '冻雨' },
    '314': { icon: '🌧️', animation: 'rain', desc: '小到中雨' },
    '315': { icon: '🌧️', animation: 'rain', desc: '中到大雨' },
    '316': { icon: '🌧️', animation: 'rain', desc: '大到暴雨' },
    '317': { icon: '🌧️', animation: 'rain', desc: '暴雨到大暴雨' },
    '318': { icon: '🌧️', animation: 'rain', desc: '大暴雨到特大暴雨' },
    '350': { icon: '🌧️', animation: 'rain', desc: '阵雨' },
    '351': { icon: '🌧️', animation: 'rain', desc: '强阵雨' },
    // 雪
    '400': { icon: '🌨️', animation: 'snow', desc: '小雪' },
    '401': { icon: '🌨️', animation: 'snow', desc: '中雪' },
    '402': { icon: '🌨️', animation: 'snow', desc: '大雪' },
    '403': { icon: '🌨️', animation: 'snow', desc: '暴雪' },
    '404': { icon: '🌨️', animation: 'snow', desc: '雨夹雪' },
    '405': { icon: '🌨️', animation: 'snow', desc: '雨雪天气' },
    '406': { icon: '🌨️', animation: 'snow', desc: '阵雨夹雪' },
    '407': { icon: '🌨️', animation: 'snow', desc: '阵雪' },
    '408': { icon: '🌨️', animation: 'snow', desc: '小到中雪' },
    '409': { icon: '🌨️', animation: 'snow', desc: '中到大雪' },
    '410': { icon: '🌨️', animation: 'snow', desc: '大到暴雪' },
    '456': { icon: '🌨️', animation: 'snow', desc: '阵雨夹雪' },
    '457': { icon: '🌨️', animation: 'snow', desc: '阵雪' },
    // 雾霾沙尘
    '500': { icon: '🌫️', animation: '', desc: '薄雾' },
    '501': { icon: '🌫️', animation: '', desc: '雾' },
    '502': { icon: '🌫️', animation: '', desc: '霾' },
    '503': { icon: '🌫️', animation: '', desc: '扬沙' },
    '504': { icon: '🌫️', animation: '', desc: '浮尘' },
    '507': { icon: '🌫️', animation: '', desc: '沙尘暴' },
    '508': { icon: '🌫️', animation: '', desc: '强沙尘暴' },
    '509': { icon: '🌫️', animation: '', desc: '浓雾' },
    '510': { icon: '🌫️', animation: '', desc: '强浓雾' },
    '511': { icon: '🌫️', animation: '', desc: '中度霾' },
    '512': { icon: '🌫️', animation: '', desc: '重度霾' },
    '513': { icon: '🌫️', animation: '', desc: '严重霾' },
    '514': { icon: '🌫️', animation: '', desc: '大雾' },
    '515': { icon: '🌫️', animation: '', desc: '特强浓雾' },
    // 风
    '900': { icon: '💨', animation: 'wind-blow', desc: '热' },
    '901': { icon: '❄️', animation: '', desc: '冷' },
    '999': { icon: '❓', animation: '', desc: '未知' }
};

// 星期映射
const WEEKDAYS = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

// 当前选中的城市
let currentLocation = null;
// 搜索防抖定时器
let searchTimer = null;
// 当前主题模式: 'light' | 'dark' | 'auto'
let currentTheme = 'auto';

// DOM 元素
const loadingEl = document.getElementById('loading');
const errorEl = document.getElementById('error');
const errorMsgEl = document.getElementById('errorMsg');
const mainContentEl = document.getElementById('mainContent');
const locationNameEl = document.getElementById('locationName');
const cityInputEl = document.getElementById('cityInput');
const cityDropdownEl = document.getElementById('cityDropdown');
const themeToggleEl = document.getElementById('themeToggle');
const themeIconEl = document.getElementById('themeIcon');

// 初始化
document.addEventListener('DOMContentLoaded', init);

async function init() {
    initTheme();
    setupEventListeners();
    await loadWeatherByIP();
}

// 初始化主题
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'auto';
    setTheme(savedTheme);
}

// 设置主题
function setTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeIcon();
}

// 更新主题图标
function updateThemeIcon() {
    const isDark = currentTheme === 'dark' ||
        (currentTheme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (currentTheme === 'auto') {
        themeIconEl.textContent = '🌗';
        themeToggleEl.title = '当前：跟随系统';
    } else if (currentTheme === 'dark') {
        themeIconEl.textContent = '🌙';
        themeToggleEl.title = '当前：深色模式';
    } else {
        themeIconEl.textContent = '☀️';
        themeToggleEl.title = '当前：浅色模式';
    }
}

// 切换主题
function toggleTheme() {
    // 循环切换: auto -> light -> dark -> auto
    const themes = ['auto', 'light', 'dark'];
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
}

// 设置事件监听
function setupEventListeners() {
    // 主题切换按钮
    themeToggleEl.addEventListener('click', toggleTheme);

    // 监听系统主题变化
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (currentTheme === 'auto') {
            updateThemeIcon();
        }
    });

    // 城市搜索输入
    cityInputEl.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        if (searchTimer) clearTimeout(searchTimer);

        if (query.length < 1) {
            hideCityDropdown();
            return;
        }

        searchTimer = setTimeout(() => searchCity(query), 300);
    });

    // 点击其他地方关闭下拉框
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.location-selector')) {
            hideCityDropdown();
        }
    });

    // 输入框获得焦点时，如果有内容则搜索
    cityInputEl.addEventListener('focus', () => {
        const query = cityInputEl.value.trim();
        if (query.length >= 1) {
            searchCity(query);
        }
    });
}

// 通过IP定位获取天气
async function loadWeatherByIP() {
    showLoading();

    try {
        // 使用 ip-api.com 获取IP定位信息
        const ipResponse = await fetch('http://ip-api.com/json/?lang=zh-CN');
        if (!ipResponse.ok) throw new Error('IP定位失败');

        const ipData = await ipResponse.json();

        if (ipData.status !== 'success') {
            throw new Error('无法获取位置信息');
        }

        // 使用城市名搜索获取 Location ID
        const cityName = ipData.city || ipData.regionName;
        const geoResponse = await fetch(
            `${QWEATHER_GEO_API}/city/lookup?location=${encodeURIComponent(cityName)}&key=${QWEATHER_KEY}&number=1`
        );

        if (!geoResponse.ok) throw new Error('城市搜索失败');

        const geoData = await geoResponse.json();

        if (geoData.code !== '200' || !geoData.location || geoData.location.length === 0) {
            // 尝试使用经纬度搜索
            const coordResponse = await fetch(
                `${QWEATHER_GEO_API}/city/lookup?location=${ipData.lon},${ipData.lat}&key=${QWEATHER_KEY}&number=1`
            );
            const coordData = await coordResponse.json();

            if (coordData.code !== '200' || !coordData.location || coordData.location.length === 0) {
                throw new Error('无法定位到您的城市');
            }

            currentLocation = coordData.location[0];
        } else {
            currentLocation = geoData.location[0];
        }

        await loadWeather();
    } catch (error) {
        console.error('IP定位失败:', error);
        showError('无法获取您的位置，请手动搜索城市');
    }
}

// 搜索城市
async function searchCity(query) {
    try {
        const response = await fetch(
            `${QWEATHER_GEO_API}/city/lookup?location=${encodeURIComponent(query)}&key=${QWEATHER_KEY}&number=10`
        );

        if (!response.ok) throw new Error('搜索失败');

        const data = await response.json();

        if (data.code !== '200' || !data.location || data.location.length === 0) {
            cityDropdownEl.innerHTML = '<div class="city-option"><div class="city-name">未找到匹配的城市</div></div>';
            showCityDropdown();
            return;
        }

        renderCityOptions(data.location);
    } catch (error) {
        console.error('城市搜索失败:', error);
        cityDropdownEl.innerHTML = '<div class="city-option"><div class="city-name">搜索失败，请重试</div></div>';
        showCityDropdown();
    }
}

// 渲染城市选项
function renderCityOptions(locations) {
    cityDropdownEl.innerHTML = locations.map(loc => `
        <div class="city-option" data-id="${loc.id}" data-name="${loc.name}" data-adm1="${loc.adm1}" data-adm2="${loc.adm2}">
            <div class="city-name">${loc.name}</div>
            <div class="city-path">${loc.adm1} · ${loc.adm2} · ${loc.country}</div>
        </div>
    `).join('');

    // 绑定点击事件
    cityDropdownEl.querySelectorAll('.city-option').forEach(option => {
        option.addEventListener('click', () => {
            const id = option.dataset.id;
            const name = option.dataset.name;
            const adm1 = option.dataset.adm1;
            const adm2 = option.dataset.adm2;

            currentLocation = { id, name, adm1, adm2 };
            cityInputEl.value = '';
            hideCityDropdown();
            showLoading();
            loadWeather();
        });
    });

    showCityDropdown();
}

function showCityDropdown() {
    cityDropdownEl.classList.add('show');
}

function hideCityDropdown() {
    cityDropdownEl.classList.remove('show');
}

// 加载天气数据
async function loadWeather() {
    if (!currentLocation) return;

    try {
        // 并行请求实时天气和预报
        const [nowResponse, forecastResponse] = await Promise.all([
            fetch(`${QWEATHER_API}/weather/now?location=${currentLocation.id}&key=${QWEATHER_KEY}`),
            fetch(`${QWEATHER_API}/weather/3d?location=${currentLocation.id}&key=${QWEATHER_KEY}`)
        ]);

        if (!nowResponse.ok || !forecastResponse.ok) {
            throw new Error('天气数据获取失败');
        }

        const nowData = await nowResponse.json();
        const forecastData = await forecastResponse.json();

        if (nowData.code !== '200') {
            throw new Error(`实时天气获取失败: ${nowData.code}`);
        }

        if (forecastData.code !== '200') {
            throw new Error(`天气预报获取失败: ${forecastData.code}`);
        }

        renderCurrentWeather(nowData);
        renderForecast(forecastData);
        updateLocationName();
        showMainContent();
    } catch (error) {
        console.error('加载天气失败:', error);
        showError(error.message || '天气数据加载失败');
    }
}

// 渲染实时天气
function renderCurrentWeather(data) {
    const now = data.now;
    const weatherInfo = WEATHER_ICONS[now.icon] || WEATHER_ICONS['999'];

    // 温度
    document.getElementById('temperature').textContent = now.temp;
    document.getElementById('feelsLike').textContent = now.feelsLike;
    document.getElementById('weatherText').textContent = now.text;

    // 天气图标
    const iconContainer = document.getElementById('weatherIcon');
    iconContainer.innerHTML = weatherInfo.icon;
    iconContainer.className = 'weather-icon';
    if (weatherInfo.animation) {
        iconContainer.classList.add(weatherInfo.animation);
    }

    // 天气动画
    renderWeatherAnimation(weatherInfo.animation);

    // 详情
    document.getElementById('humidity').textContent = `${now.humidity}%`;
    document.getElementById('wind').textContent = `${now.windDir} ${now.windScale}级`;
    document.getElementById('visibility').textContent = `${now.vis}km`;
    document.getElementById('pressure').textContent = `${now.pressure}hPa`;

    // 更新时间
    const updateTime = new Date(data.updateTime);
    document.getElementById('updateTime').textContent = formatTime(updateTime);
}

// 渲染天气动画
function renderWeatherAnimation(animationType) {
    const container = document.getElementById('weatherAnimation');
    container.innerHTML = '';

    if (animationType === 'rain') {
        // 雨滴动画
        for (let i = 0; i < 20; i++) {
            const drop = document.createElement('div');
            drop.className = 'rain-drop';
            drop.style.left = `${Math.random() * 100}%`;
            drop.style.animationDelay = `${Math.random() * 0.8}s`;
            drop.style.animationDuration = `${0.5 + Math.random() * 0.3}s`;
            container.appendChild(drop);
        }
    } else if (animationType === 'snow') {
        // 雪花动画
        for (let i = 0; i < 15; i++) {
            const flake = document.createElement('div');
            flake.className = 'snow-flake';
            flake.textContent = '❄';
            flake.style.left = `${Math.random() * 100}%`;
            flake.style.animationDelay = `${Math.random() * 3}s`;
            flake.style.animationDuration = `${2 + Math.random() * 2}s`;
            container.appendChild(flake);
        }
    }
}

// 渲染天气预报
function renderForecast(data) {
    const container = document.getElementById('forecastCards');

    container.innerHTML = data.daily.map((day, index) => {
        const date = new Date(day.fxDate);
        const weekday = index === 0 ? '今天' : WEEKDAYS[date.getDay()];
        const weatherInfo = WEATHER_ICONS[day.iconDay] || WEATHER_ICONS['999'];

        return `
            <div class="forecast-card">
                <div class="forecast-date">
                    <span class="weekday">${weekday}</span>
                    <span>${formatDate(date)}</span>
                </div>
                <div class="forecast-icon">${weatherInfo.icon}</div>
                <div class="forecast-text">${day.textDay}</div>
                <div class="forecast-temp">
                    <span class="temp-high">${day.tempMax}°</span>
                    <span class="temp-low">${day.tempMin}°</span>
                </div>
                <div class="forecast-wind">${day.windDirDay} ${day.windScaleDay}级</div>
            </div>
        `;
    }).join('');
}

// 更新位置显示
function updateLocationName() {
    if (!currentLocation) return;

    const displayName = currentLocation.adm2 && currentLocation.adm2 !== currentLocation.name
        ? `${currentLocation.adm2} · ${currentLocation.name}`
        : `${currentLocation.adm1} · ${currentLocation.name}`;

    locationNameEl.textContent = displayName;
}

// 显示/隐藏状态
function showLoading() {
    loadingEl.style.display = 'block';
    errorEl.style.display = 'none';
    mainContentEl.style.display = 'none';
}

function showError(message) {
    loadingEl.style.display = 'none';
    errorEl.style.display = 'block';
    mainContentEl.style.display = 'none';
    errorMsgEl.textContent = message;
}

function showMainContent() {
    loadingEl.style.display = 'none';
    errorEl.style.display = 'none';
    mainContentEl.style.display = 'block';
}

// 重试加载
function retryLoad() {
    if (currentLocation) {
        showLoading();
        loadWeather();
    } else {
        loadWeatherByIP();
    }
}

// 格式化时间
function formatTime(date) {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

// 格式化日期
function formatDate(date) {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month}月${day}日`;
}
