// Cloudflare Pages Function - 注入环境变量
export async function onRequest(context) {
    const key = context.env.QWEATHER_KEY || '';

    const script = `window.QWEATHER_KEY = "${key}";`;

    return new Response(script, {
        headers: {
            'Content-Type': 'application/javascript',
            'Cache-Control': 'no-cache'
        }
    });
}
