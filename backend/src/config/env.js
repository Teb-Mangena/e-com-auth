import "dotenv/config";

export const ENV = {
  PORT: process.env.PORT || 5050,
  MONGO_URI: process.env.MONGO_URI,
  CLIENT_URL: process.env.CLIENT_URL || "http://localhost:5173",
  CLERK_PUBLISHABLE_KEY: process.env.CLERK_PUBLISHABLE_KEY,
  CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
  INNGEST_SIGNING_KEY: process.env.INNGEST_SIGNING_KEY
}