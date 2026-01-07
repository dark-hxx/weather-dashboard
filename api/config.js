// Vercel Edge Function - 注入环境变量
export const config = {
    runtime: 'edge',
};

export default function handler(request) {
    const key = process.env.QWEATHER_KEY || '';

    const script = `window.QWEATHER_KEY = "${key}";`;

    return new Response(script, {
        headers: {
            'Content-Type': 'application/javascript',
            'Cache-Control': 'no-cache'
        }
    });
}
