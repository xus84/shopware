import { config } from "dotenv"
config()

/* Mongodb */
export const MONGODB_URL = process.env.MONGODB_URL || "";

export const PORT = process.env.PORT 