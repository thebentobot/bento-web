import "dotenv/config";
import { defineConfig } from "drizzle-kit";

// NOTE: This config is used only by Drizzle Kit tooling (SQL generation/typegen).
// The `dbCredentials.url` pointing to 'file:local.db' is NOT used by the app at runtime.
// Runtime database access uses Cloudflare D1 via drizzle-orm/d1 (see src/db/index.ts).

export default defineConfig({
    out: "./drizzle",
    schema: "./src/db/schema.ts",
    dialect: "sqlite",
    dbCredentials: {
        url: process.env.DB_FILE_NAME || "file:local.db",
    },
});
