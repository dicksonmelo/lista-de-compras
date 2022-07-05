import dotenv from "dotenv"

dotenv.config()

const { PGUSER, PGHOST, PGPASSWORD, PGDATABASE, PGPORT } = process.env

export const config = {
  user: PGUSER as string,
  host: PGHOST as string,
  database: PGDATABASE as string,
  password: PGPASSWORD as string,
  port: Number(PGPORT),
  max: 10,
  idleTimeoutMillis: 30000,
}
