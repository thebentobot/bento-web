const cspDirectives: Record<string, string> = {
	"default-src": "'self'",
	"script-src": "'self' 'unsafe-inline'",
	"style-src": "'self' 'unsafe-inline' https://fonts.googleapis.com",
	"img-src":
		"'self' data: https://cdn.discordapp.com https://api.bentobot.xyz https:",
	"font-src": "'self' https://fonts.gstatic.com",
	"connect-src": "'self'",
	"frame-src": "'none'",
	"frame-ancestors": "'none'",
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
	headers.set(
		"Strict-Transport-Security",
		"max-age=31536000; includeSubDomains; preload",
	);
	headers.set("X-Frame-Options", "DENY");
	headers.set("X-Content-Type-Options", "nosniff");
	headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
	headers.set(
		"Permissions-Policy",
		"camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()",
	);
}
