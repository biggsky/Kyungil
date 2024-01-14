import dotenv from "dotenv";

dotenv.config();

const database: string = process.env.DATABASE_NAME || "";
const username: string = process.env.DATABASE_USERNAME || "";
const password: string = process.env.DATABASE_PASSWORD || "";
const host: string = process.env.DATABASE_HOST || "";

const config = {
  dev: {
    database,
    username,
    password,
    host,
  },
};
console.log(config);

export default config;
