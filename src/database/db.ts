import { Pool } from "pg"
import dotenv from "dotenv"

dotenv.config()

// eslint-disable-next-line max-len
const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

const isProduction = process.env.NODE_ENV === "production"

const pool = new Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  ssl: isProduction,
})

const query = async (text: string, params = []) => {
  const start = Date.now()
  const res = await pool.query(text, params)
  const duration = Date.now() - start
  console.log(
    `Duration: ${duration}\nCommand: ${res.command}\nRows: ${res.rows}\n`,
  )
  return res
}

export { query, pool }
