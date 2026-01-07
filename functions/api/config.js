// Cloudflare Pages Function - 注入环境变量
export async function onRequest(context) {
    const key = '8bc2cd24dc914a63a81929657f780bd8';

    const script = `window.QWEATHER_KEY = "${key}";`;

    return new Response(script, {
        headers: {
            'Content-Type': 'application/javascript',
            'Cache-Control': 'no-cache'
        }
    });
}
