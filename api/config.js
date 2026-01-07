// Vercel Edge Function - 注入环境变量
export const config = {
    runtime: 'edge',
};

export default function handler(request) {
    const key = '8bc2cd24dc914a63a81929657f780bd8';

    const script = `window.QWEATHER_KEY = "${key}";`;

    return new Response(script, {
        headers: {
            'Content-Type': 'application/javascript',
            'Cache-Control': 'no-cache'
        }
    });
}
