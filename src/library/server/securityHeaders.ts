const cspDirectives: Record<string, string> = {
    "default-src": "'self'",
    // data: required at runtime — Astro's ClientRouter loads data:application/javascript URIs during view transitions
    "script-src": "'self' 'unsafe-inline' data:",
    "style-src": "'self' 'unsafe-inline' https://fonts.googleapis.com",
    "img-src": "'self' data: https://cdn.discordapp.com https://api.bentobot.xyz https:",
    "font-src": "'self' https://fonts.gstatic.com",
    "connect-src": "'self'",
    // 'self' required: Astro's ClientRouter creates a hidden same-origin iframe to collect
    // Vite styles for client:only components (prepareForClientOnlyComponents). The iframe
    // loads a same-origin page, so both frame-src and frame-ancestors must allow 'self'.
    // External clickjacking is still prevented because 'self' only permits same-origin embedding.
    "frame-src": "'self'",
    "frame-ancestors": "'self'",
    "object-src": "'none'",
    "base-uri": "'self'",
    "form-action": "'self'",
    "upgrade-insecure-requests": "",
};

const cspValue = Object.entries(cspDirectives)
    .map(([key, value]) => (value ? `${key} ${value}` : key))
    .join("; ");

export function addSecurityHeaders(headers: Headers): void {
    headers.set("Content-Security-Policy", cspValue);
    headers.set("Strict-Transport-Security", "max-age=31536000");
    headers.set("X-Frame-Options", "SAMEORIGIN");
    headers.set("X-Content-Type-Options", "nosniff");
    headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
    headers.set(
        "Permissions-Policy",
        "camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()"
    );
}
